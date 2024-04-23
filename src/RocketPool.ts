import type { Hex } from "viem";
import { fromHex } from "viem";
import { ponder } from "@/generated";

import { RocketVaultAbi, RocketVaultAddress } from "../abis/RocketPool/RocketVault";
import { RocketNodeStakingAbi, RocketNodeStakingAddress } from "../abis/RocketPool/RocketNodeStaking";
import { RocketMinipoolManagerAbi, RocketMinipoolManagerAddress } from "../abis/RocketPool/RocketMinipoolManager";

ponder.on(
  "RocketMinipoolManager:MinipoolCreated",
  async ({ event, context }) => {
    const { client } = context;

    let totalEthLocked = 0n;
    let totalRPLLocked = 0n;
    let totalRethLocked = 0n;

    // Calculate total ETH locked
    const limit = 1000;
    let offset = 0;

    let initialisedMinipools: bigint = 0n;
    let prelaunchMinipools: bigint = 0n;
    let stakingMinipools: bigint = 0n;
    let withdrawableMinipools: bigint = 0n;

    while (true) {
      const activeMinipools = await client.readContract({
        address: RocketMinipoolManagerAddress,
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
    }

    const ethLockedInMinipools =
      (initialisedMinipools * 16n +
        prelaunchMinipools * 32n +
        stakingMinipools * 32n +
        withdrawableMinipools * 32n
      ) * BigInt(1e18);

    totalEthLocked += ethLockedInMinipools;

    const rocketVaultContract = {
      address: RocketVaultAddress,
      abi: RocketVaultAbi,
    } as const;

    const rocketDepositPoolEth = await client.readContract({
      address: rocketVaultContract.address,
      abi: rocketVaultContract.abi,
      functionName: "balanceOf",
      args: ["rocketDepositPool"],
      blockNumber: event.block.number,
    });

    totalEthLocked += rocketDepositPoolEth;

    // Calculate totalRPL locked
    const totalRPLStaked = await client.readContract({
      address: RocketNodeStakingAddress,
      abi: RocketNodeStakingAbi,
      functionName: "getTotalRPLStake",
      blockNumber: event.block.number,
    });

    totalRPLLocked += totalRPLStaked;

    const [rocketDAONodeTrustedActionsRPLBalance, rocketAuctionManagerRPLbalance] = await client.multicall({
      contracts: [
        {
          ...rocketVaultContract,
          functionName: "balanceOfToken",
          args: ["rocketDAONodeTrustedActions", rocketVaultContract.address],
        },
        {
          ...rocketVaultContract,
          functionName: "balanceOfToken",
          args: ["rocketAuctionManager", rocketVaultContract.address],
        },
      ],
      blockNumber: event.block.number,
    });

    if (rocketDAONodeTrustedActionsRPLBalance.status != "success") {
      throw new Error("rocketDAONodeTrustedActionsRPLBalance failed");
    }

    totalRPLLocked += rocketDAONodeTrustedActionsRPLBalance.result;

    if (rocketAuctionManagerRPLbalance.status != "success") {
      throw new Error("rocketAuctionManagerRPLbalance failed");
    }

    totalRPLLocked += rocketAuctionManagerRPLbalance.result;

    await context.db.RocketPoolTVL.create({
      id: event.log.id,
      data: {
        ethLocked: totalEthLocked,
        rethLocked: totalRethLocked,
        rplLocked: totalRPLLocked,
        date: event.block.timestamp,
      },
    });
  }
);
