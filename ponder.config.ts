import { createConfig } from "@ponder/core";
import { http } from "viem";

import { RocketVaultAbi } from "./abis/RocketPool/RocketVault";
import { RocketNodeStakingAbi } from "./abis/RocketPool/RocketNodeStaking";
import { RocketMinipoolManagerAbi } from "./abis/RocketPool/RocketMinipoolManager";

const startBlock = 13535419;

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      maxRequestsPerSecond: 30,
      transport: http("https://eth-mainnet.rpc.grove.city/v1/60ff569c7031010034074b21"),
    },
  },
  contracts: {
    RocketVault: {
      network: "mainnet",
      abi: RocketVaultAbi,
      address: "0x3bdc69c4e5e13e52a65f5583c23efb9636b469d6",
      startBlock,
    },
    RocketNodeStaking: {
      network: "mainnet",
      abi: RocketNodeStakingAbi,
      address: "0x3019227b2b8493e45bf5d25302139c9a2713bf15",
      startBlock,
    },
    RocketMinipoolManager: {
      network: "mainnet",
      abi: RocketMinipoolManagerAbi,
      address: "0x6293b8abc1f36afb22406be5f96d893072a8cf3a",
      startBlock,
    },
  },
});
