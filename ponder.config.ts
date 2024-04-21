import { createConfig } from "@ponder/core";
import { http } from "viem";
import {
  RocketVaultAbi,
  RocketVaultAddress,
} from "./abis/RocketPool/RocketVault";
import {
  RocketNodeStakingAbi,
  RocketNodeStakingAddress,
} from "./abis/RocketPool/RocketNodeStaking";
import {
  RocketMinipoolManagerAbi,
  RocketMinipoolManagerAddress,
} from "./abis/RocketPool/RocketMinipoolManager";

const startBlock = 14353601;

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      maxRequestsPerSecond: 25,
      transport: http(
        "https://eth-mainnet.rpc.grove.city/v1/60ff569c7031010034074b21"
      ),
    },
  },
  contracts: {
    RocketVault: {
      network: "mainnet",
      abi: RocketVaultAbi,
      address: RocketVaultAddress,
      startBlock,
    },
    RocketNodeStaking: {
      network: "mainnet",
      abi: RocketNodeStakingAbi,
      address: RocketNodeStakingAddress,
      startBlock,
    },
    RocketMinipoolManager: {
      network: "mainnet",
      abi: RocketMinipoolManagerAbi,
      address: RocketMinipoolManagerAddress,
      startBlock,
    },
  },
});
