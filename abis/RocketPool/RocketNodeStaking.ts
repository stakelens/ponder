export const RocketNodeStakingAddress =
  "0x0d8d8f8541b12a0e1194b7cc4b6d954b90ab82ec";
export const RocketNodeStakingAbi = [
  {
    inputs: [
      {
        internalType: "contract RocketStorageInterface",
        name: "_rocketStorageAddress",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethValue",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "RPLSlashed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "RPLStaked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "RPLWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "StakeRPLForAllowed",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeETHCollateralisationRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeETHMatched",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeETHMatchedLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeETHProvided",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeEffectiveRPLStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeMaximumRPLStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeMinimumRPLStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeRPLStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeRPLStakedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTotalRPLStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_allowed",
        type: "bool"
      }
    ],
    name: "setStakeRPLForAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_ethSlashAmount",
        type: "uint256"
      }
    ],
    name: "slashRPL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "stakeRPL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "stakeRPLFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawRPL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
] as const;
