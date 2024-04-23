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

const startBlock = 19520243;

export default createConfig({
  database: {
    kind: "postgres",
    connectionString: process.env.DATABASE_URL,
  },
  networks: {
    mainnet: {
      chainId: 1,
      maxRequestsPerSecond: Number(process.env.MAX_REQUESTS_PER_SECOND),
      transport: http(
        process.env.RPC_URL
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
