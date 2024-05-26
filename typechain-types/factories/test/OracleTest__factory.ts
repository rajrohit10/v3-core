/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { OracleTest, OracleTestInterface } from "../../test/OracleTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "by",
        type: "uint32",
      },
    ],
    name: "advanceTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "advanceTimeBy",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct OracleTest.UpdateParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "batchUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cardinality",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cardinalityNext",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "getGasCostOfObserve",
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
        internalType: "uint16",
        name: "_cardinalityNext",
        type: "uint16",
      },
    ],
    name: "grow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "time",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct OracleTest.InitializeParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityCumulativeX128",
        type: "uint160",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "secondsPerLiquidityCumulativeX128s",
        type: "uint160[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tick",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "time",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "advanceTimeBy",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct OracleTest.UpdateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611599806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063761eb23e1161008c578063daf50f6b11610066578063daf50f6b146101eb578063dbffe9ad146101fe578063dd158c1814610206578063f7fd2cfa1461020e576100ea565b8063761eb23e146101a4578063883bdbfd146101b7578063d81740db146101d8576100ea565b80632986c0e5116100c85780632986c0e5146101455780633eaf5d9f1461015a57806365829dc51461016f57806374e69cef14610184576100ea565b806316ada547146100ef5780631a6865021461010d578063252c09d714610122575b600080fd5b6100f7610221565b6040516101049190611521565b60405180910390f35b61011561022e565b60405161010491906114f5565b6101356101303660046113f8565b610245565b6040516101049493929190611532565b61014d61028a565b6040516101049190611509565b61016261029a565b60405161010491906114ba565b61018261017d366004611394565b6102ab565b005b610197610192366004611316565b6103b9565b6040516101049190611518565b6101826101b23660046113d6565b610453565b6101ca6101c5366004611316565b61048e565b604051610104929190611434565b6101826101e63660046112a6565b610521565b6101826101f9366004611394565b610698565b61014d6107b8565b61014d6107c8565b61018261021c366004611410565b6107d8565b61ffff5463ffffffff1681565b61ffff54600160381b90046001600160801b031681565b60008161ffff811061025657600080fd5b015463ffffffff81169150600160201b810460060b90600160581b81046001600160a01b031690600160f81b900460ff1684565b61ffff8054600160b81b90041681565b61ffff54600160201b900460020b81565b6102bb61021c6020830183611410565b61ffff805461031191600091600160b81b810482169163ffffffff80831692600160201b810460020b926001600160801b03600160381b83041692600160c81b8304821692600160d81b9004909116906107fa16565b61ffff8054928116600160b81b0261ffff60b81b19928216600160c81b0261ffff60c81b1990941693909317919091169190911790556103576040820160208301611373565b61ffff805460029290920b62ffffff16600160201b0266ffffff000000001990921691909117905561038f60608201604083016113af565b61ffff60076101000a8154816001600160801b0302191690836001600160801b0316021790555050565b61ffff805460009163ffffffff821691600160201b810460020b916001600160801b03600160381b83041691600160b81b900416845a905061044385898980806020026020016040519081016040528093929190818152602001838360200280828437600092018290525061ffff805491969594508b93508992508a91600160c81b900416610996565b50505a9003979650505050505050565b61ffff805461046d91600091600160d81b90041683610af0565b61ffff8054918116600160d81b0261ffff60d81b1990921691909117905550565b60608061051661ffff60009054906101000a900463ffffffff16858580806020026020016040519081016040528093929190818152602001838360200280828437600092018290525061ffff80549196959450600160201b820460020b9350600160b81b8204811692506001600160801b03600160381b83041691600160c81b900416610996565b915091509250929050565b61ffff8054600160201b810460020b916001600160801b03600160381b83041691600160b81b8104821691600160c81b8204811691600160d81b81049091169063ffffffff1660005b878110156106015788888281811061057e57fe5b6105949260206060909202019081019150611410565b909101906105a8600086848a8a89896107fa565b90955093508888828181106105b957fe5b90506060020160200160208101906105d19190611373565b96508888828181106105df57fe5b90506060020160400160208101906105f791906113af565b955060010161056a565b5061ffff805463ffffffff90921663ffffffff19948216600160c81b0261ffff60c81b19968316600160b81b0261ffff60b81b196001600160801b03909916600160381b02600160381b600160b81b031960029b909b0b62ffffff16600160201b0266ffffff0000000019909616959095179990991693909317969096169690961793909316929092171691909117909155505050565b61ffff8054600160c81b900416156106cb5760405162461bcd60e51b81526004016106c2906114c8565b60405180910390fd5b6106d86020820182611410565b61ffff805463ffffffff191663ffffffff929092169190911790556107036040820160208301611373565b61ffff805460029290920b62ffffff16600160201b0266ffffff000000001990921691909117905561073b60608201604083016113af565b61ffff80546001600160801b0392909216600160381b02600160381b600160b81b031990921691909117905561077f6107776020830183611410565b600090610b96565b61ffff8054928116600160c81b0261ffff60c81b19928216600160d81b0261ffff60d81b19909416939093179190911691909117905550565b61ffff8054600160c81b90041681565b61ffff8054600160d81b90041681565b61ffff805463ffffffff19811663ffffffff9182169390930116919091179055565b6000806000898961ffff1661ffff811061081057fe5b60408051608081018252919092015463ffffffff808216808452600160201b8304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff16151560608301529092508916141561087f578885925092505061098a565b8461ffff168461ffff161180156108a057506001850361ffff168961ffff16145b156108ad578391506108b1565b8491505b8161ffff168960010161ffff16816108c557fe5b0692506108d481898989610be2565b8a8461ffff1661ffff81106108e557fe5b825191018054602084015160408501516060909501511515600160f81b026001600160f81b036001600160a01b03909616600160581b027fff0000000000000000000000000000000000000000ffffffffffffffffffffff60069390930b66ffffffffffffff16600160201b026affffffffffffff000000001963ffffffff90971663ffffffff19909516949094179590951692909217169290921792909216179055505b97509795505050505050565b60608060008361ffff16116109d6576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b865167ffffffffffffffff811180156109ee57600080fd5b50604051908082528060200260200182016040528015610a18578160200160208202803683370190505b509150865167ffffffffffffffff81118015610a3357600080fd5b50604051908082528060200260200182016040528015610a5d578160200160208202803683370190505b50905060005b8751811015610ae357610a8e8a8a8a8481518110610a7d57fe5b60200260200101518a8a8a8a610c85565b848381518110610a9a57fe5b60200260200101848481518110610aad57fe5b60200260200101826001600160a01b03166001600160a01b03168152508260060b60060b81525050508080600101915050610a63565b5097509795505050505050565b6000808361ffff1611610b2e576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b8261ffff168261ffff1611610b44575081610b8f565b825b8261ffff168161ffff161015610b8a576001858261ffff1661ffff8110610b6957fe5b01805463ffffffff191663ffffffff92909216919091179055600101610b46565b508190505b9392505050565b6040805160808101825263ffffffff9283168082526000602083018190529282019290925260016060909101819052835463ffffffff1916909117909116600160f81b17909155908190565b610bea611268565b600085600001518503905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b0288602001510160060b81526020016000856001600160801b031611610c3e576001610c40565b845b6001600160801b031663ffffffff60801b608085901b1681610c5e57fe5b048860400151016001600160a01b0316815260200160011515815250915050949350505050565b60008063ffffffff8716610d2b576000898661ffff1661ffff8110610ca657fe5b60408051608081018252919092015463ffffffff808216808452600160201b8304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff16151560608301529092508a1614610d1757610d14818a8988610be2565b90505b80602001518160400151925092505061098a565b868803600080610d408c8c858c8c8c8c610e0f565b91509150816000015163ffffffff168363ffffffff161415610d7257816020015182604001519450945050505061098a565b805163ffffffff84811691161415610d9a57806020015181604001519450945050505061098a565b8151815160208085015190840151918390039286039163ffffffff80841692908516910360060b81610dc857fe5b05028460200151018263ffffffff168263ffffffff1686604001518660400151036001600160a01b03160281610dfa57fe5b0485604001510196509650505050505061098a565b610e17611268565b610e1f611268565b888561ffff1661ffff8110610e3057fe5b60408051608081018252919092015463ffffffff8116808352600160201b8204600690810b810b900b6020840152600160581b82046001600160a01b031693830193909352600160f81b900460ff16151560608201529250610e9490899089611009565b15610ecc578663ffffffff16826000015163ffffffff161415610eb65761098a565b81610ec383898988610be2565b9150915061098a565b888361ffff168660010161ffff1681610ee157fe5b0661ffff1661ffff8110610ef157fe5b60408051608081018252929091015463ffffffff81168352600160201b8104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b90910416151560608201819052909250610fa657604080516080810182528a5463ffffffff81168252600160201b8104600690810b810b900b6020830152600160581b81046001600160a01b031692820192909252600160f81b90910460ff161515606082015291505b610fb588836000015189611009565b610fec576040805162461bcd60e51b815260206004820152600360248201526213d31160ea1b604482015290519081900360640190fd5b610ff989898988876110ca565b9150915097509795505050505050565b60008363ffffffff168363ffffffff161115801561103357508363ffffffff168263ffffffff1611155b1561104f578163ffffffff168363ffffffff1611159050610b8f565b60008463ffffffff168463ffffffff1611611076578363ffffffff16600160201b0161107e565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff16116110ae578363ffffffff16600160201b016110b6565b8363ffffffff165b64ffffffffff169091111595945050505050565b6110d2611268565b6110da611268565b60008361ffff168560010161ffff16816110f057fe5b0661ffff169050600060018561ffff16830103905060005b506002818301048961ffff8716828161111d57fe5b0661ffff811061112957fe5b60408051608081018252929091015463ffffffff81168352600160201b8104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b9091041615156060820181905290955061119357806001019250611108565b898661ffff1682600101816111a457fe5b0661ffff81106111b057fe5b60408051608081018252929091015463ffffffff81168352600160201b8104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b9091041615156060820152855190945060009061121a908b908b611009565b905080801561123357506112338a8a8760000151611009565b1561123e575061125b565b8061124e57600182039250611255565b8160010193505b50611108565b5050509550959350505050565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6000606082840312156112a0578081fd5b50919050565b600080602083850312156112b8578182fd5b823567ffffffffffffffff808211156112cf578384fd5b818501915085601f8301126112e2578384fd5b8135818111156112f0578485fd5b866020606083028501011115611304578485fd5b60209290920196919550909350505050565b60008060208385031215611328578182fd5b823567ffffffffffffffff8082111561133f578384fd5b818501915085601f830112611352578384fd5b813581811115611360578485fd5b8660208083028501011115611304578485fd5b600060208284031215611384578081fd5b81358060020b8114610b8f578182fd5b6000606082840312156113a5578081fd5b610b8f838361128f565b6000602082840312156113c0578081fd5b81356001600160801b0381168114610b8f578182fd5b6000602082840312156113e7578081fd5b813561ffff81168114610b8f578182fd5b600060208284031215611409578081fd5b5035919050565b600060208284031215611421578081fd5b813563ffffffff81168114610b8f578182fd5b604080825283519082018190526000906020906060840190828701845b8281101561147057815160060b84529284019290840190600101611451565b50505083810382850152845180825285830191830190845b818110156114ad5783516001600160a01b031683529284019291840191600101611488565b5090979650505050505050565b60029190910b815260200190565b602080825260139082015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604082015260600190565b6001600160801b0391909116815260200190565b61ffff91909116815260200190565b90815260200190565b63ffffffff91909116815260200190565b63ffffffff94909416845260069290920b60208401526001600160a01b03166040830152151560608201526080019056fea264697066735822122013fac08c50c0c0f3e5909bc13d826244a591f2a3183b5c399e098e56c6a79b5064736f6c63430007060033";

type OracleTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleTest__factory extends ContractFactory {
  constructor(...args: OracleTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleTest> {
    return super.deploy(overrides || {}) as Promise<OracleTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OracleTest {
    return super.attach(address) as OracleTest;
  }
  override connect(signer: Signer): OracleTest__factory {
    return super.connect(signer) as OracleTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleTestInterface {
    return new utils.Interface(_abi) as OracleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleTest;
  }
}
