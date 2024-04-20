import type { Hex } from "viem";
import { fromHex } from "viem";
import { ponder } from "@/generated";

import { RocketVaultAbi } from "../abis/RocketPool/RocketVault";
import { RocketNodeStakingAbi } from "../abis/RocketPool/RocketNodeStaking";
import { RocketMinipoolManagerAbi } from "../abis/RocketPool/RocketMinipoolManager";

ponder.on(
  "RocketMinipoolManager:MinipoolCreated",
  async ({ event, context }) => {
    const { client } = context;

    const limit = 1000;

    let offset = 0;

    let initialisedMinipools: bigint = 0n;
    let prelaunchMinipools: bigint = 0n;
    let stakingMinipools: bigint = 0n;
    let withdrawableMinipools: bigint = 0n;

    while (true) {
      const activeMinipools = await client.readContract({
        address: "0x6293b8abc1f36afb22406be5f96d893072a8cf3a",
        abi: RocketMinipoolManagerAbi,
        functionName: "getMinipoolCountPerStatus",
        args: [BigInt(offset), BigInt(limit)],
        blockNumber: event.block.number,
      });

      initialisedMinipools += activeMinipools[0];
      prelaunchMinipools += activeMinipools[1];
      stakingMinipools += activeMinipools[2];
      withdrawableMinipools += activeMinipools[3];

      if (
        activeMinipools[0] +
          activeMinipools[1] +
          activeMinipools[2] +
          activeMinipools[3] +
          activeMinipools[4] <
        limit
      ) {
        break;
      }

      offset += limit;
      console.log("offset: ", offset);
    }

    const value =
      initialisedMinipools * 16n +
      prelaunchMinipools * 32n +
      stakingMinipools * 32n +
      (withdrawableMinipools * 32n) * BigInt(1e18);

    await context.db.EthLockedInMinipools.create({
      id: event.log.id,
      data: {
        value,
        date: event.block.timestamp,
      },
    });
  }
);
