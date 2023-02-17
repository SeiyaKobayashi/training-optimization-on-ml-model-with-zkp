/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IVerifier {
  export type ModelStruct = {
    contentId: PromiseOrValue<BytesLike>;
    name: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    ownerAddress: PromiseOrValue<string>;
    isDisabled: PromiseOrValue<boolean>;
  };

  export type ModelStructOutput = [string, string, string, string, boolean] & {
    contentId: string;
    name: string;
    description: string;
    ownerAddress: string;
    isDisabled: boolean;
  };

  export type ModelArrayElementStruct = {
    contentId: PromiseOrValue<BytesLike>;
    name: PromiseOrValue<string>;
  };

  export type ModelArrayElementStructOutput = [string, string] & {
    contentId: string;
    name: string;
  };

  export type ZkpStruct = {
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ];
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    input: PromiseOrValue<BigNumberish>[];
  };

  export type ZkpStructOutput = [
    [BigNumber, BigNumber],
    [[BigNumber, BigNumber], [BigNumber, BigNumber]],
    [BigNumber, BigNumber],
    BigNumber[]
  ] & {
    a: [BigNumber, BigNumber];
    b: [[BigNumber, BigNumber], [BigNumber, BigNumber]];
    c: [BigNumber, BigNumber];
    input: BigNumber[];
  };

  export type ZkpWithValidityStruct = {
    zkp: IVerifier.ZkpStruct;
    isValid: PromiseOrValue<boolean>;
  };

  export type ZkpWithValidityStructOutput = [
    IVerifier.ZkpStructOutput,
    boolean
  ] & { zkp: IVerifier.ZkpStructOutput; isValid: boolean };
}

export interface VerifierInterface extends utils.Interface {
  functions: {
    "commit(bytes32,bytes32)": FunctionFragment;
    "disableModel(bytes32)": FunctionFragment;
    "getModel(bytes32)": FunctionFragment;
    "getModels(uint32,uint32)": FunctionFragment;
    "getModelsByOwnerAddress(address,uint32,uint32)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerModel(bytes32,string,string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reveal(bytes32,bytes32[],bool[],bytes32[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateChallenge(bytes32)": FunctionFragment;
    "updateChallengeLength(uint8)": FunctionFragment;
    "updateModel(bytes32,string,string)": FunctionFragment;
    "verify(uint256,(uint256[2],uint256[2][2],uint256[2],uint256[16])[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "commit"
      | "disableModel"
      | "getModel"
      | "getModels"
      | "getModelsByOwnerAddress"
      | "owner"
      | "registerModel"
      | "renounceOwnership"
      | "reveal"
      | "transferOwnership"
      | "updateChallenge"
      | "updateChallengeLength"
      | "updateModel"
      | "verify"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "commit",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "disableModel",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getModel",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getModels",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getModelsByOwnerAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerModel",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<boolean>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateChallenge",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateChallengeLength",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateModel",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [PromiseOrValue<BigNumberish>, IVerifier.ZkpStruct[]]
  ): string;

  decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getModel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getModels", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getModelsByOwnerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateChallenge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateChallengeLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "ChallengeUpdated(bytes32,address)": EventFragment;
    "CommitAdded(bytes32,address)": EventFragment;
    "CommitRevealed(bytes32,address)": EventFragment;
    "ModelDisabled(bytes32,address)": EventFragment;
    "ModelRegistered(bytes32,address)": EventFragment;
    "ModelUpdated(bytes32,address,string,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChallengeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CommitAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CommitRevealed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModelDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModelRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModelUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ChallengeUpdatedEventObject {
  commitId: string;
  proverAddress: string;
}
export type ChallengeUpdatedEvent = TypedEvent<
  [string, string],
  ChallengeUpdatedEventObject
>;

export type ChallengeUpdatedEventFilter =
  TypedEventFilter<ChallengeUpdatedEvent>;

export interface CommitAddedEventObject {
  commitId: string;
  proverAddress: string;
}
export type CommitAddedEvent = TypedEvent<
  [string, string],
  CommitAddedEventObject
>;

export type CommitAddedEventFilter = TypedEventFilter<CommitAddedEvent>;

export interface CommitRevealedEventObject {
  commitId: string;
  proverAddress: string;
}
export type CommitRevealedEvent = TypedEvent<
  [string, string],
  CommitRevealedEventObject
>;

export type CommitRevealedEventFilter = TypedEventFilter<CommitRevealedEvent>;

export interface ModelDisabledEventObject {
  contentId: string;
  ownerAddress: string;
}
export type ModelDisabledEvent = TypedEvent<
  [string, string],
  ModelDisabledEventObject
>;

export type ModelDisabledEventFilter = TypedEventFilter<ModelDisabledEvent>;

export interface ModelRegisteredEventObject {
  contentId: string;
  ownerAddress: string;
}
export type ModelRegisteredEvent = TypedEvent<
  [string, string],
  ModelRegisteredEventObject
>;

export type ModelRegisteredEventFilter = TypedEventFilter<ModelRegisteredEvent>;

export interface ModelUpdatedEventObject {
  contentId: string;
  ownerAddress: string;
  name: string;
  description: string;
}
export type ModelUpdatedEvent = TypedEvent<
  [string, string, string, string],
  ModelUpdatedEventObject
>;

export type ModelUpdatedEventFilter = TypedEventFilter<ModelUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Verifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    commit(
      _modelContentId: PromiseOrValue<BytesLike>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disableModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [IVerifier.ModelStructOutput] & { model: IVerifier.ModelStructOutput }
    >;

    getModels(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IVerifier.ModelArrayElementStructOutput[]] & {
        paginatedModels: IVerifier.ModelArrayElementStructOutput[];
      }
    >;

    getModelsByOwnerAddress(
      ownerAddress: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IVerifier.ModelArrayElementStructOutput[]] & {
        paginatedModels: IVerifier.ModelArrayElementStructOutput[];
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reveal(
      _commitId: PromiseOrValue<BytesLike>,
      _merkleProofs: PromiseOrValue<BytesLike>[],
      _proofFlags: PromiseOrValue<boolean>[],
      _leaves: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateChallenge(
      _commitId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateChallengeLength(
      _challengeLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verify(
      commitmentId: PromiseOrValue<BigNumberish>,
      zkps: IVerifier.ZkpStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  commit(
    _modelContentId: PromiseOrValue<BytesLike>,
    _merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disableModel(
    modelContentId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getModel(
    modelContentId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IVerifier.ModelStructOutput>;

  getModels(
    offset: PromiseOrValue<BigNumberish>,
    limit: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVerifier.ModelArrayElementStructOutput[]>;

  getModelsByOwnerAddress(
    ownerAddress: PromiseOrValue<string>,
    offset: PromiseOrValue<BigNumberish>,
    limit: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVerifier.ModelArrayElementStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerModel(
    modelContentId: PromiseOrValue<BytesLike>,
    modelName: PromiseOrValue<string>,
    modelDescription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reveal(
    _commitId: PromiseOrValue<BytesLike>,
    _merkleProofs: PromiseOrValue<BytesLike>[],
    _proofFlags: PromiseOrValue<boolean>[],
    _leaves: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateChallenge(
    _commitId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateChallengeLength(
    _challengeLength: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateModel(
    modelContentId: PromiseOrValue<BytesLike>,
    modelName: PromiseOrValue<string>,
    modelDescription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verify(
    commitmentId: PromiseOrValue<BigNumberish>,
    zkps: IVerifier.ZkpStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    commit(
      _modelContentId: PromiseOrValue<BytesLike>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { commitId: string; challenge: string }>;

    disableModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IVerifier.ModelStructOutput>;

    getModels(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVerifier.ModelArrayElementStructOutput[]>;

    getModelsByOwnerAddress(
      ownerAddress: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVerifier.ModelArrayElementStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IVerifier.ModelStructOutput>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reveal(
      _commitId: PromiseOrValue<BytesLike>,
      _merkleProofs: PromiseOrValue<BytesLike>[],
      _proofFlags: PromiseOrValue<boolean>[],
      _leaves: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateChallenge(
      _commitId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    updateChallengeLength(
      _challengeLength: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      commitmentId: PromiseOrValue<BigNumberish>,
      zkps: IVerifier.ZkpStruct[],
      overrides?: CallOverrides
    ): Promise<IVerifier.ZkpWithValidityStructOutput[]>;
  };

  filters: {
    "ChallengeUpdated(bytes32,address)"(
      commitId?: PromiseOrValue<BytesLike> | null,
      proverAddress?: PromiseOrValue<string> | null
    ): ChallengeUpdatedEventFilter;
    ChallengeUpdated(
      commitId?: PromiseOrValue<BytesLike> | null,
      proverAddress?: PromiseOrValue<string> | null
    ): ChallengeUpdatedEventFilter;

    "CommitAdded(bytes32,address)"(
      commitId?: PromiseOrValue<BytesLike> | null,
      proverAddress?: PromiseOrValue<string> | null
    ): CommitAddedEventFilter;
    CommitAdded(
      commitId?: PromiseOrValue<BytesLike> | null,
      proverAddress?: PromiseOrValue<string> | null
    ): CommitAddedEventFilter;

    "CommitRevealed(bytes32,address)"(
      commitId?: PromiseOrValue<BytesLike> | null,
      proverAddress?: PromiseOrValue<string> | null
    ): CommitRevealedEventFilter;
    CommitRevealed(
      commitId?: PromiseOrValue<BytesLike> | null,
      proverAddress?: PromiseOrValue<string> | null
    ): CommitRevealedEventFilter;

    "ModelDisabled(bytes32,address)"(
      contentId?: PromiseOrValue<BytesLike> | null,
      ownerAddress?: PromiseOrValue<string> | null
    ): ModelDisabledEventFilter;
    ModelDisabled(
      contentId?: PromiseOrValue<BytesLike> | null,
      ownerAddress?: PromiseOrValue<string> | null
    ): ModelDisabledEventFilter;

    "ModelRegistered(bytes32,address)"(
      contentId?: PromiseOrValue<BytesLike> | null,
      ownerAddress?: PromiseOrValue<string> | null
    ): ModelRegisteredEventFilter;
    ModelRegistered(
      contentId?: PromiseOrValue<BytesLike> | null,
      ownerAddress?: PromiseOrValue<string> | null
    ): ModelRegisteredEventFilter;

    "ModelUpdated(bytes32,address,string,string)"(
      contentId?: PromiseOrValue<BytesLike> | null,
      ownerAddress?: PromiseOrValue<string> | null,
      name?: null,
      description?: null
    ): ModelUpdatedEventFilter;
    ModelUpdated(
      contentId?: PromiseOrValue<BytesLike> | null,
      ownerAddress?: PromiseOrValue<string> | null,
      name?: null,
      description?: null
    ): ModelUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    commit(
      _modelContentId: PromiseOrValue<BytesLike>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disableModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getModels(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getModelsByOwnerAddress(
      ownerAddress: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reveal(
      _commitId: PromiseOrValue<BytesLike>,
      _merkleProofs: PromiseOrValue<BytesLike>[],
      _proofFlags: PromiseOrValue<boolean>[],
      _leaves: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateChallenge(
      _commitId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateChallengeLength(
      _challengeLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verify(
      commitmentId: PromiseOrValue<BigNumberish>,
      zkps: IVerifier.ZkpStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    commit(
      _modelContentId: PromiseOrValue<BytesLike>,
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disableModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getModel(
      modelContentId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getModels(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getModelsByOwnerAddress(
      ownerAddress: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reveal(
      _commitId: PromiseOrValue<BytesLike>,
      _merkleProofs: PromiseOrValue<BytesLike>[],
      _proofFlags: PromiseOrValue<boolean>[],
      _leaves: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateChallenge(
      _commitId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateChallengeLength(
      _challengeLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateModel(
      modelContentId: PromiseOrValue<BytesLike>,
      modelName: PromiseOrValue<string>,
      modelDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      commitmentId: PromiseOrValue<BigNumberish>,
      zkps: IVerifier.ZkpStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
