/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVerifier,
  IVerifierInterface,
} from "../../../contracts/src/IVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentModel",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "commitmentData",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "commitmentResults",
        type: "bytes32",
      },
    ],
    name: "commit",
    outputs: [
      {
        internalType: "uint256",
        name: "commitmentId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "challenge",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "IVerifier.Hash",
        name: "modelCommitment",
        type: "bytes32",
      },
    ],
    name: "getModelInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct IVerifier.Model",
        name: "modelInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "offset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "limit",
        type: "uint32",
      },
    ],
    name: "getModels",
    outputs: [
      {
        components: [
          {
            internalType: "IVerifier.Hash",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct IVerifier.ModelCommitment[]",
        name: "modelCommitments",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "IVerifier.Hash",
        name: "modelCommitment",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "modelName",
        type: "string",
      },
      {
        internalType: "string",
        name: "modelDescription",
        type: "string",
      },
    ],
    name: "registerModel",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct IVerifier.Model",
        name: "modelInfo",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commitmentId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "IVerifier.Hash",
            name: "leaf",
            type: "bytes32",
          },
          {
            internalType: "IVerifier.Hash[]",
            name: "proof",
            type: "bytes32[]",
          },
        ],
        internalType: "struct IVerifier.MerkleProof[]",
        name: "merkleProofs",
        type: "tuple[]",
      },
    ],
    name: "reveal",
    outputs: [
      {
        internalType: "IVerifier.Hash[]",
        name: "verifiedNodes",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commitmentId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256[2]",
            name: "a",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[2][2]",
            name: "b",
            type: "uint256[2][2]",
          },
          {
            internalType: "uint256[2]",
            name: "c",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[16]",
            name: "input",
            type: "uint256[16]",
          },
        ],
        internalType: "struct IVerifier.Zkp[]",
        name: "zkps",
        type: "tuple[]",
      },
    ],
    name: "verify",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[16]",
                name: "input",
                type: "uint256[16]",
              },
            ],
            internalType: "struct IVerifier.Zkp",
            name: "zkp",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IVerifier.ZkpWithValidity[]",
        name: "zkpVerifications",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IVerifierInterface {
    return new utils.Interface(_abi) as IVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVerifier {
    return new Contract(address, _abi, signerOrProvider) as IVerifier;
  }
}
