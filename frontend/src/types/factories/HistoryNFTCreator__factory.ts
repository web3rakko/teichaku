/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  HistoryNFTCreator,
  HistoryNFTCreatorInterface,
} from "../HistoryNFTCreator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "daoId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "pollId",
        type: "int256",
      },
    ],
    name: "mintForSprint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "daoId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
    ],
    name: "mintForWholePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setDAOHistoryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setDAONftAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6111eb8061010d6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638e39a0501161005b5780638e39a050146100c6578063e216cea3146100e2578063f2fde38b146100fe578063fe812ed51461011a5761007d565b80636fa6a56814610082578063715018a61461009e5780638da5cb5b146100a8575b600080fd5b61009c60048036038101906100979190610893565b610136565b005b6100a661024f565b005b6100b0610263565b6040516100bd9190610930565b60405180910390f35b6100e060048036038101906100db9190610977565b61028c565b005b6100fc60048036038101906100f79190610977565b6102d8565b005b61011860048036038101906101139190610977565b610324565b005b610134600480360381019061012f91906109da565b6103a8565b005b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1663684805b785856040518363ffffffff1660e01b815260040161019a929190610ae0565b60006040518083038186803b1580156101b257600080fd5b505afa1580156101c6573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906101ef9190610fc7565b905060005b8151811015610248573373ffffffffffffffffffffffffffffffffffffffff1682828151811061022757610226611010565b5b602002602001015160800151505080806102409061106e565b9150506101f4565b5050505050565b6102576105b9565b6102616000610637565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102946105b9565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6102e06105b9565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61032c6105b9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561039c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039390611129565b60405180910390fd5b6103a581610637565b50565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1663684805b786866040518363ffffffff1660e01b815260040161040c929190610ae0565b60006040518083038186803b15801561042457600080fd5b505afa158015610438573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104619190610fc7565b905060005b81518110156105b1578382828151811061048357610482611010565b5b602002602001015160a001511480156104e557503373ffffffffffffffffffffffffffffffffffffffff168282815181106104c1576104c0611010565b5b60200260200101516080015173ffffffffffffffffffffffffffffffffffffffff16145b1561059e5760008282815181106104ff576104fe611010565b5b602002602001015190506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166340d097c3336040518263ffffffff1660e01b81526004016105699190610930565b600060405180830381600087803b15801561058357600080fd5b505af1158015610597573d6000803e3d6000fd5b5050505050505b80806105a99061106e565b915050610466565b505050505050565b6105c16106fb565b73ffffffffffffffffffffffffffffffffffffffff166105df610263565b73ffffffffffffffffffffffffffffffffffffffff1614610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90611195565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61076a82610721565b810181811067ffffffffffffffff8211171561078957610788610732565b5b80604052505050565b600061079c610703565b90506107a88282610761565b919050565b600067ffffffffffffffff8211156107c8576107c7610732565b5b6107d182610721565b9050602081019050919050565b82818337600083830152505050565b60006108006107fb846107ad565b610792565b90508281526020810184848401111561081c5761081b61071c565b5b6108278482856107de565b509392505050565b600082601f83011261084457610843610717565b5b81356108548482602086016107ed565b91505092915050565b6000819050919050565b6108708161085d565b811461087b57600080fd5b50565b60008135905061088d81610867565b92915050565b600080604083850312156108aa576108a961070d565b5b600083013567ffffffffffffffff8111156108c8576108c7610712565b5b6108d48582860161082f565b92505060206108e58582860161087e565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061091a826108ef565b9050919050565b61092a8161090f565b82525050565b60006020820190506109456000830184610921565b92915050565b6109548161090f565b811461095f57600080fd5b50565b6000813590506109718161094b565b92915050565b60006020828403121561098d5761098c61070d565b5b600061099b84828501610962565b91505092915050565b6000819050919050565b6109b7816109a4565b81146109c257600080fd5b50565b6000813590506109d4816109ae565b92915050565b6000806000606084860312156109f3576109f261070d565b5b600084013567ffffffffffffffff811115610a1157610a10610712565b5b610a1d8682870161082f565b9350506020610a2e8682870161087e565b9250506040610a3f868287016109c5565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a83578082015181840152602081019050610a68565b83811115610a92576000848401525b50505050565b6000610aa382610a49565b610aad8185610a54565b9350610abd818560208601610a65565b610ac681610721565b840191505092915050565b610ada8161085d565b82525050565b60006040820190508181036000830152610afa8185610a98565b9050610b096020830184610ad1565b9392505050565b600067ffffffffffffffff821115610b2b57610b2a610732565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b6000610b5e610b59846107ad565b610792565b905082815260208101848484011115610b7a57610b7961071c565b5b610b85848285610a65565b509392505050565b600082601f830112610ba257610ba1610717565b5b8151610bb2848260208601610b4b565b91505092915050565b600081519050610bca81610867565b92915050565b600067ffffffffffffffff821115610beb57610bea610732565b5b602082029050602081019050919050565b6000610c0f610c0a84610bd0565b610792565b90508083825260208201905060208402830185811115610c3257610c31610b3c565b5b835b81811015610c7957805167ffffffffffffffff811115610c5757610c56610717565b5b808601610c648982610b8d565b85526020850194505050602081019050610c34565b5050509392505050565b600082601f830112610c9857610c97610717565b5b8151610ca8848260208601610bfc565b91505092915050565b600081519050610cc08161094b565b92915050565b600081519050610cd5816109ae565b92915050565b600067ffffffffffffffff821115610cf657610cf5610732565b5b602082029050602081019050919050565b6000610d1a610d1584610cdb565b610792565b90508083825260208201905060208402830185811115610d3d57610d3c610b3c565b5b835b81811015610d665780610d528882610bbb565b845260208401935050602081019050610d3f565b5050509392505050565b600082601f830112610d8557610d84610717565b5b8151610d95848260208601610d07565b91505092915050565b600060408284031215610db457610db3610b41565b5b610dbe6040610792565b9050600082015167ffffffffffffffff811115610dde57610ddd610b46565b5b610dea84828501610d70565b6000830152506020610dfe84828501610bbb565b60208301525092915050565b600060e08284031215610e2057610e1f610b41565b5b610e2a60e0610792565b9050600082015167ffffffffffffffff811115610e4a57610e49610b46565b5b610e5684828501610b8d565b6000830152506020610e6a84828501610bbb565b602083015250604082015167ffffffffffffffff811115610e8e57610e8d610b46565b5b610e9a84828501610c83565b6040830152506060610eae84828501610bbb565b6060830152506080610ec284828501610cb1565b60808301525060a0610ed684828501610cc6565b60a08301525060c082015167ffffffffffffffff811115610efa57610ef9610b46565b5b610f0684828501610d9e565b60c08301525092915050565b6000610f25610f2084610b10565b610792565b90508083825260208201905060208402830185811115610f4857610f47610b3c565b5b835b81811015610f8f57805167ffffffffffffffff811115610f6d57610f6c610717565b5b808601610f7a8982610e0a565b85526020850194505050602081019050610f4a565b5050509392505050565b600082601f830112610fae57610fad610717565b5b8151610fbe848260208601610f12565b91505092915050565b600060208284031215610fdd57610fdc61070d565b5b600082015167ffffffffffffffff811115610ffb57610ffa610712565b5b61100784828501610f99565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110798261085d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156110ac576110ab61103f565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611113602683610a54565b915061111e826110b7565b604082019050919050565b6000602082019050818103600083015261114281611106565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061117f602083610a54565b915061118a82611149565b602082019050919050565b600060208201905081810360008301526111ae81611172565b905091905056fea2646970667358221220b65328e0c4bc3fa719e1a4861a67e288f59430fc924356881849629c9e56e04464736f6c63430008090033";

type HistoryNFTCreatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HistoryNFTCreatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HistoryNFTCreator__factory extends ContractFactory {
  constructor(...args: HistoryNFTCreatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HistoryNFTCreator> {
    return super.deploy(overrides || {}) as Promise<HistoryNFTCreator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HistoryNFTCreator {
    return super.attach(address) as HistoryNFTCreator;
  }
  override connect(signer: Signer): HistoryNFTCreator__factory {
    return super.connect(signer) as HistoryNFTCreator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HistoryNFTCreatorInterface {
    return new utils.Interface(_abi) as HistoryNFTCreatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HistoryNFTCreator {
    return new Contract(address, _abi, signerOrProvider) as HistoryNFTCreator;
  }
}