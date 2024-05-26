/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestERC20, TestERC20Interface } from "../../test/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToMint",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106ce3803806106ce8339818101604052602081101561003357600080fd5b505161003f3382610045565b506100c8565b6001600160a01b0382166000908152602081905260409020548101818110156100a8576040805162461bcd60e51b815260206004820152601060248201526f6f766572666c6f772062616c616e636560801b604482015290519081900360640190fd5b6001600160a01b0390921660009081526020819052604090209190915550565b6105f7806100d76000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063095ea7b31461006757806323b872dd146100a757806340c10f19146100dd57806370a082311461010b578063a9059cbb14610143578063dd62ed3e1461016f575b600080fd5b6100936004803603604081101561007d57600080fd5b506001600160a01b03813516906020013561019d565b604080519115158252519081900360200190f35b610093600480360360608110156100bd57600080fd5b506001600160a01b03813581169160208101359091169060400135610203565b610109600480360360408110156100f357600080fd5b506001600160a01b0381351690602001356103dc565b005b6101316004803603602081101561012157600080fd5b50356001600160a01b031661045f565b60408051918252519081900360200190f35b6100936004803603604081101561015957600080fd5b506001600160a01b038135169060200135610471565b6101316004803603604081101561018557600080fd5b506001600160a01b03813581169160200135166105a4565b3360008181526001602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b6001600160a01b038316600090815260016020908152604080832033845290915281205482811015610275576040805162461bcd60e51b8152602060048201526016602482015275185b1b1bddd85b98d9481a5b9cdd59999a58da595b9d60521b604482015290519081900360640190fd5b6001600160a01b03808616600090815260016020908152604080832033845282528083208786039055928716825281905220548084018111156102ff576040805162461bcd60e51b815260206004820152601a60248201527f6f766572666c6f772062616c616e636520726563697069656e74000000000000604482015290519081900360640190fd5b6001600160a01b038086166000908152602081905260408082208488019055918816815220548481101561037a576040805162461bcd60e51b815260206004820152601860248201527f756e646572666c6f772062616c616e63652073656e6465720000000000000000604482015290519081900360640190fd5b6001600160a01b0380881660008181526020818152604091829020898603905581518981529151938a16937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35060019695505050505050565b6001600160a01b03821660009081526020819052604090205481018181101561043f576040805162461bcd60e51b815260206004820152601060248201526f6f766572666c6f772062616c616e636560801b604482015290519081900360640190fd5b6001600160a01b0390921660009081526020819052604090209190915550565b60006020819052908152604090205481565b33600090815260208190526040812054828110156104cd576040805162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b604482015290519081900360640190fd5b3360009081526020819052604080822085840390556001600160a01b0386168252902054808401811115610548576040805162461bcd60e51b815260206004820152601a60248201527f726563697069656e742062616c616e6365206f766572666c6f77000000000000604482015290519081900360640190fd5b6001600160a01b0385166000818152602081815260409182902084880190558151878152915133927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92908290030190a3506001949350505050565b60016020908152600092835260408084209091529082529020548156fea26469706673582212202591ac7d476aa500dd6e2574694b2bc9173795b36379beedf36da10fda50557e64736f6c63430007060033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    amountToMint: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(amountToMint, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    amountToMint: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(amountToMint, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
