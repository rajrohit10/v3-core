/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SqrtPriceMathTest,
  SqrtPriceMathTestInterface,
} from "../../test/SqrtPriceMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount0Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount1Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetAmount0Delta",
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
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetAmount1Delta",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNextSqrtPriceFromInput",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNextSqrtPriceFromOutput",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromInput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromOutput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061084a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063af955e3b1161005b578063af955e3b146101cf578063d7cdaf7114610216578063e20f7ac01461025d578063fedf2b5f146102a057610088565b8063034d21e41461008d5780632c32d4b6146100e257806348a0c5bd14610129578063aa58276a14610170575b600080fd5b6100d0600480360360808110156100a357600080fd5b506001600160a01b03813516906001600160801b03602082013516906040810135906060013515156102e3565b60408051918252519081900360200190f35b6100d0600480360360808110156100f857600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610304565b6100d06004803603608081101561013f57600080fd5b506001600160a01b0381358116916020810135909116906001600160801b036040820135169060600135151561031b565b6101b36004803603608081101561018657600080fd5b506001600160a01b03813516906001600160801b0360208201351690604081013590606001351515610329565b604080516001600160a01b039092168252519081900360200190f35b6100d0600480360360808110156101e557600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610337565b6100d06004803603608081101561022c57600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610349565b6100d06004803603608081101561027357600080fd5b506001600160a01b03813516906001600160801b036020820135169060408101359060600135151561035b565b6101b3600480360360808110156102b657600080fd5b506001600160a01b03813516906001600160801b036020820135169060408101359060600135151561036d565b6000805a90506102f58686868661037b565b505a900390505b949350505050565b6000610312858585856103cc565b95945050505050565b600061031285858585610477565b60006103128585858561037b565b6000805a90506102f586868686610477565b6000805a90506102f5868686866103cc565b6000805a90506102f5868686866104e2565b6000610312858585856104e2565b600080856001600160a01b03161161039257600080fd5b6000846001600160801b0316116103a857600080fd5b816103bf576103ba858585600161052a565b610312565b610312858585600161060b565b6000836001600160a01b0316856001600160a01b031611156103ec579293925b600160601b600160e01b03606084901b166001600160a01b03868603811690871661041657600080fd5b8361044657866001600160a01b03166104398383896001600160a01b03166106ee565b8161044057fe5b0461046c565b61046c61045d8383896001600160a01b031661079e565b886001600160a01b03166107d8565b979650505050505050565b6000836001600160a01b0316856001600160a01b03161115610497579293925b816104bf576103ba836001600160801b03168686036001600160a01b0316600160601b6106ee565b610312836001600160801b03168686036001600160a01b0316600160601b61079e565b600080856001600160a01b0316116104f957600080fd5b6000846001600160801b03161161050f57600080fd5b81610521576103ba858585600061060b565b61031285858560005b6000811561059d5760006001600160a01b038411156105605761055b84600160601b876001600160801b03166106ee565b610578565b6001600160801b038516606085901b8161057657fe5b045b90506105956105906001600160a01b038816836107e3565b6107f9565b9150506102fc565b60006001600160a01b038411156105cb576105c684600160601b876001600160801b031661079e565b6105e2565b6105e2606085901b6001600160801b0387166107d8565b905080866001600160a01b0316116105f957600080fd5b6001600160a01b0386160390506102fc565b6000826106195750836102fc565b600160601b600160e01b03606085901b1682156106a7576001600160a01b0386168481029085828161064757fe5b041415610678578181018281106106765761066c83896001600160a01b03168361079e565b93505050506102fc565b505b61069e82610699878a6001600160a01b0316868161069257fe5b04906107e3565b6107d8565b925050506102fc565b6001600160a01b038616848102908582816106be57fe5b041480156106cb57508082115b6106d457600080fd5b80820361066c610590846001600160a01b038b168461079e565b6000808060001985870986860292508281109083900303905080610724576000841161071957600080fd5b508290049050610797565b80841161073057600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b60006107ab8484846106ee565b9050600082806107b757fe5b84860911156107975760001981106107ce57600080fd5b6001019392505050565b808204910615150190565b808201828110156107f357600080fd5b92915050565b806001600160a01b038116811461080f57600080fd5b91905056fea2646970667358221220b633276fdf467f148178cdfae8dac68af59361ea1d65455ad7284076c379a1a964736f6c63430007060033";

type SqrtPriceMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SqrtPriceMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SqrtPriceMathTest__factory extends ContractFactory {
  constructor(...args: SqrtPriceMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SqrtPriceMathTest> {
    return super.deploy(overrides || {}) as Promise<SqrtPriceMathTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SqrtPriceMathTest {
    return super.attach(address) as SqrtPriceMathTest;
  }
  override connect(signer: Signer): SqrtPriceMathTest__factory {
    return super.connect(signer) as SqrtPriceMathTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SqrtPriceMathTestInterface {
    return new utils.Interface(_abi) as SqrtPriceMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SqrtPriceMathTest {
    return new Contract(address, _abi, signerOrProvider) as SqrtPriceMathTest;
  }
}