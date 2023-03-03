/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  VerifierFactory,
  VerifierFactoryInterface,
} from "../../../contracts/src/VerifierFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifierContract",
        type: "address",
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
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "IVerifier.Hash",
        name: "modelContentId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "modelOwnerAddress",
        type: "address",
      },
    ],
    name: "ChildContractCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "IVerifier.Hash",
        name: "_modelContentId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_modelName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_modelDescription",
        type: "string",
      },
    ],
    name: "createChildContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "IVerifier.Hash",
        name: "_modelContentId",
        type: "bytes32",
      },
    ],
    name: "getClonedVerifierContract",
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
    name: "getMasterVerifierContract",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_offset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_limit",
        type: "uint32",
      },
    ],
    name: "getModels",
    outputs: [
      {
        components: [
          {
            internalType: "IVerifier.Hash",
            name: "contentId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
        ],
        internalType: "struct IVerifierFactory.ModelArrayElement[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_offset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_limit",
        type: "uint32",
      },
    ],
    name: "getModelsByOwnerAddress",
    outputs: [
      {
        components: [
          {
            internalType: "IVerifier.Hash",
            name: "contentId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
        ],
        internalType: "struct IVerifierFactory.ModelArrayElement[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ca538038062001ca58339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b611b7b806200012a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063109656fb1461005c5780632a90bfd11461008c5780633c344166146100bc5780639d3a2407146100d8578063c459286314610108575b600080fd5b61007660048036038101906100719190610ecb565b610126565b60405161008391906110fa565b60405180910390f35b6100a660048036038101906100a19190611148565b61048d565b6040516100b39190611184565b60405180910390f35b6100d660048036038101906100d19190611204565b61056b565b005b6100f260048036038101906100ed9190611299565b6109df565b6040516100ff91906110fa565b60405180910390f35b610110610c44565b60405161011d9190611184565b60405180910390f35b6060836000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050036101ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a590611336565b60405180910390fd5b83600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600081111561024857808263ffffffff1610610243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023a906113c8565b60405180910390fd5b610292565b60008263ffffffff1614610291576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102889061145a565b60405180910390fd5b5b8460008163ffffffff161180156102b05750601e8163ffffffff1611155b6102ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e6906114c6565b60405180910390fd5b610480600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561047557838290600052602060002090600302016040518060600160405290816000820154815260200160018201805461038e90611515565b80601f01602080910402602001604051908101604052809291908181526020018280546103ba90611515565b80156104075780601f106103dc57610100808354040283529160200191610407565b820191906000526020600020905b8154815290600101906020018083116103ea57829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190610351565b505050508888610c6d565b9450505050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052790611592565b60405180910390fd5b6003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b83838383600084849050036105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac906115fe565b60405180910390fd5b600082829050036105fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f29061166a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360008b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461069d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610694906116d6565b60405180910390fd5b60006106c860008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610d83565b905080600360008c815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008190508073ffffffffffffffffffffffffffffffffffffffff1663b7b356d48c8c8c8c8c336040518763ffffffff1660e01b815260040161076496959493929190611741565b600060405180830381600087803b15801561077e57600080fd5b505af1158015610792573d6000803e3d6000fd5b50505050600060405180606001604052808d81526020018c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020018473ffffffffffffffffffffffffffffffffffffffff168152509050600181908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101908161085a919061197d565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101908161092c919061197d565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050503373ffffffffffffffffffffffffffffffffffffffff168c8473ffffffffffffffffffffffffffffffffffffffff167fb8481f7820258e43bb69cf9254ecc8227aa104a3a36a25e18fb0a0df08135bec60405160405180910390a4505050505050505050505050565b6060826001805490506000811115610a3e57808263ffffffff1610610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a30906113c8565b60405180910390fd5b610a88565b60008263ffffffff1614610a87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7e9061145a565b60405180910390fd5b5b8360008163ffffffff16118015610aa65750601e8163ffffffff1611155b610ae5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adc906114c6565b60405180910390fd5b610c396001805480602002602001604051908101604052809291908181526020016000905b82821015610c2e578382906000526020600020906003020160405180606001604052908160008201548152602001600182018054610b4790611515565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7390611515565b8015610bc05780601f10610b9557610100808354040283529160200191610bc0565b820191906000526020600020905b815481529060010190602001808311610ba357829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190610b0a565b505050508787610c6d565b935050505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606083518284610c7d9190611a7e565b63ffffffff161115610c9f578263ffffffff168451610c9c9190611ab6565b91505b60008263ffffffff1667ffffffffffffffff811115610cc157610cc0611798565b5b604051908082528060200260200182016040528015610cfa57816020015b610ce7610ded565b815260200190600190039081610cdf5790505b50905060005b8363ffffffff168163ffffffff161015610d7757858186610d219190611a7e565b63ffffffff1681518110610d3857610d37611aea565b5b6020026020010151828263ffffffff1681518110610d5957610d58611aea565b5b60200260200101819052508080610d6f90611b19565b915050610d00565b50809150509392505050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f092505050919050565b60405180606001604052806000801916815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e5c82610e31565b9050919050565b610e6c81610e51565b8114610e7757600080fd5b50565b600081359050610e8981610e63565b92915050565b600063ffffffff82169050919050565b610ea881610e8f565b8114610eb357600080fd5b50565b600081359050610ec581610e9f565b92915050565b600080600060608486031215610ee457610ee3610e27565b5b6000610ef286828701610e7a565b9350506020610f0386828701610eb6565b9250506040610f1486828701610eb6565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b6000610f5f82610f4a565b9050919050565b610f6f81610f54565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610faf578082015181840152602081019050610f94565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fd782610f75565b610fe18185610f80565b9350610ff1818560208601610f91565b610ffa81610fbb565b840191505092915050565b61100e81610e51565b82525050565b600060608301600083015161102c6000860182610f66565b50602083015184820360208601526110448282610fcc565b91505060408301516110596040860182611005565b508091505092915050565b60006110708383611014565b905092915050565b6000602082019050919050565b600061109082610f1e565b61109a8185610f29565b9350836020820285016110ac85610f3a565b8060005b858110156110e857848403895281516110c98582611064565b94506110d483611078565b925060208a019950506001810190506110b0565b50829750879550505050505092915050565b600060208201905081810360008301526111148184611085565b905092915050565b61112581610f4a565b811461113057600080fd5b50565b6000813590506111428161111c565b92915050565b60006020828403121561115e5761115d610e27565b5b600061116c84828501611133565b91505092915050565b61117e81610e51565b82525050565b60006020820190506111996000830184611175565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126111c4576111c361119f565b5b8235905067ffffffffffffffff8111156111e1576111e06111a4565b5b6020830191508360018202830111156111fd576111fc6111a9565b5b9250929050565b6000806000806000606086880312156112205761121f610e27565b5b600061122e88828901611133565b955050602086013567ffffffffffffffff81111561124f5761124e610e2c565b5b61125b888289016111ae565b9450945050604086013567ffffffffffffffff81111561127e5761127d610e2c565b5b61128a888289016111ae565b92509250509295509295909350565b600080604083850312156112b0576112af610e27565b5b60006112be85828601610eb6565b92505060206112cf85828601610eb6565b9150509250929050565b600082825260208201905092915050565b7f6d6f64656c206f776e6572206e6f7420666f756e640000000000000000000000600082015250565b60006113206015836112d9565b915061132b826112ea565b602082019050919050565b6000602082019050818103600083015261134f81611313565b9050919050565b7f6f6666736574206d757374206265203c206c656e677468206f66206c6973742060008201527f6f66206974656d73000000000000000000000000000000000000000000000000602082015250565b60006113b26028836112d9565b91506113bd82611356565b604082019050919050565b600060208201905081810360008301526113e1816113a5565b9050919050565b7f6f6666736574206d7573742062652030207768656e206e6f206974656d73206560008201527f7869737400000000000000000000000000000000000000000000000000000000602082015250565b60006114446024836112d9565b915061144f826113e8565b604082019050919050565b6000602082019050818103600083015261147381611437565b9050919050565b7f6c696d6974206d757374206265203e203020616e64203c3d2033300000000000600082015250565b60006114b0601b836112d9565b91506114bb8261147a565b602082019050919050565b600060208201905081810360008301526114df816114a3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061152d57607f821691505b6020821081036115405761153f6114e6565b5b50919050565b7f6d6f64656c207665726966696572206e6f7420666f756e640000000000000000600082015250565b600061157c6018836112d9565b915061158782611546565b602082019050919050565b600060208201905081810360008301526115ab8161156f565b9050919050565b7f656d707479206d6f64656c4e616d650000000000000000000000000000000000600082015250565b60006115e8600f836112d9565b91506115f3826115b2565b602082019050919050565b60006020820190508181036000830152611617816115db565b9050919050565b7f656d707479206d6f64656c4465736372697074696f6e00000000000000000000600082015250565b60006116546016836112d9565b915061165f8261161e565b602082019050919050565b6000602082019050818103600083015261168381611647565b9050919050565b7f6d6f64656c20766572696669657220616c726561647920657869737473000000600082015250565b60006116c0601d836112d9565b91506116cb8261168a565b602082019050919050565b600060208201905081810360008301526116ef816116b3565b9050919050565b6116ff81610f54565b82525050565b82818337600083830152505050565b600061172083856112d9565b935061172d838584611705565b61173683610fbb565b840190509392505050565b600060808201905061175660008301896116f6565b8181036020830152611769818789611714565b9050818103604083015261177e818587611714565b905061178d6060830184611175565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026118297fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826117ec565b61183386836117ec565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061187a6118756118708461184b565b611855565b61184b565b9050919050565b6000819050919050565b6118948361185f565b6118a86118a082611881565b8484546117f9565b825550505050565b600090565b6118bd6118b0565b6118c881848461188b565b505050565b5b818110156118ec576118e16000826118b5565b6001810190506118ce565b5050565b601f82111561193157611902816117c7565b61190b846117dc565b8101602085101561191a578190505b61192e611926856117dc565b8301826118cd565b50505b505050565b600082821c905092915050565b600061195460001984600802611936565b1980831691505092915050565b600061196d8383611943565b9150826002028217905092915050565b61198682610f75565b67ffffffffffffffff81111561199f5761199e611798565b5b6119a98254611515565b6119b48282856118f0565b600060209050601f8311600181146119e757600084156119d5578287015190505b6119df8582611961565b865550611a47565b601f1984166119f5866117c7565b60005b82811015611a1d578489015182556001820191506020850194506020810190506119f8565b86831015611a3a5784890151611a36601f891682611943565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a8982610e8f565b9150611a9483610e8f565b9250828201905063ffffffff811115611ab057611aaf611a4f565b5b92915050565b6000611ac18261184b565b9150611acc8361184b565b9250828203905081811115611ae457611ae3611a4f565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611b2482610e8f565b915063ffffffff8203611b3a57611b39611a4f565b5b60018201905091905056fea26469706673582212207e93b2714862d7e76882b7703da837643226c5de2b3ffe6e6b88659c3bc5c03e64736f6c63430008110033";

type VerifierFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifierFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifierFactory__factory extends ContractFactory {
  constructor(...args: VerifierFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _verifierContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifierFactory> {
    return super.deploy(
      _verifierContract,
      overrides || {}
    ) as Promise<VerifierFactory>;
  }
  override getDeployTransaction(
    _verifierContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_verifierContract, overrides || {});
  }
  override attach(address: string): VerifierFactory {
    return super.attach(address) as VerifierFactory;
  }
  override connect(signer: Signer): VerifierFactory__factory {
    return super.connect(signer) as VerifierFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierFactoryInterface {
    return new utils.Interface(_abi) as VerifierFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifierFactory {
    return new Contract(address, _abi, signerOrProvider) as VerifierFactory;
  }
}
