---
sidebar_position: 3
id: cross-chain-transaction
---

# Cross-chain Transaction

Cross-chain Transaction is a distributed transaction executed between chains connected by IBC channel.

Cross Framework supports multiple atomic commit protocols and provides a state store that supports state commit, rollback, and concurrency control.

A chain that receives a request from a user verifies the contents of the request and sends a packet containing a contract invocation request to the specified chain to initiate a transaction. The chain that receives the user's request to initiate a transaction is called the initiator chain. Once the initiator chain receives a request, it processes the approval by each Account and then executes the Atomic commit flow according to the specified format.

For example, the initiator chain acts as a coordinator when executing Two-phase commit. First, the coordinator requests each participant chain to execute the contract function. Next, the coordinator gets the result of each call and decides whether or not to commit. After receiving the final decision, each participant chain commits or aborts the change.

## Account

An account is an entity that can send transactions to a blockchain. Typically, they are required to be uniquely identified within a given blockchain. Also, accounts in one chain are generally not interoperable with accounts in another chain because each blockchain has a different concept of account and a different representation scheme.

Cross-chain contract authentication can support a variety of authentication methods by allowing accounts on any blockchain to be used. In Cross Framework, an account consists of an `ID`, which is an identifier of a user on each blockchain, and authentication information called `AuthType`. Thus, it is possible to identify accounts on different chains.
See [here](#authentication) for information on the authentication methods supported by Cross Framework.

```proto
message Account {
  bytes id = 1;
  AuthType auth_type = 2;
}

message AuthType {
  AuthMode mode = 1;
  google.protobuf.Any option = 2;
}

enum AuthMode {
  AUTH_MODE_UNSPECIFIED = 0;
  AUTH_MODE_LOCAL       = 1;
  AUTH_MODE_CHANNEL     = 2;
  AUTH_MODE_EXTENSION   = 3;
}
```

`AuthMode` is an identifier that refers to the authentication method, and `option` is the authentication information defined for each `AuthMode`. For `AUTH_MODE_CHANNEL`, the `option` contains the Channel information, and for `AUTH_MODE_EXTENSION`, the definition of the Extension protobuf.Any. Details of transaction authentication are described in [Authentication](#authentication).

## Initiate Transaction

A user creates a transaction defined as `MsgInitiateTx` below and submits it to a chain to initiate a transaction. The chain to which `MsgInitiateTx` is submitted is called the initiator chain.

```protobuf
message MsgInitiateTx {
  string chain_id = 1;
  uint64 nonce    = 2;
  cross.core.tx.CommitProtocol commit_protocol = 3;
  repeated cross.core.initiator.ContractTransaction contract_transactions = 4;
  repeated cross.core.auth.Account signers = 5;
  ibc.core.client.v1.Height timeout_height = 6;
  uint64 timeout_timestamp = 7;
}

message ContractTransaction {
  google.protobuf.Any cross_chain_channel = 1;
  repeated cross.core.auth.Account signers = 2;
  bytes call_info = 3;
  cross.core.tx.ReturnValue return_value = 4;
  repeated Link links = 5;
}
```

`MsgInitiateTx` consists mainly of the following elements:

- `contract_transactions`: an array of Contract Transactions that execute [Contract Module](./overview#contract-module) on each chain
- `commit_protocol`: The commit protocol for the transaction
- `timeout_height`, `timeout_timestamp`: Specify the timeout for the transaction. The transaction will not be executed if the timeout is exceeded

A Contract Transaction consists of the following elements:

- `cross_chain_channel`: The IBC channel between the initiator chain and the chain where the contract to be executed exists
- `signers`: An array of `Accounts` that need to be authenticated
- `callInfo`: Call information including contract identifier, function name, and arguments. The format is [Contract Module](./overview#contract-module) specification
- `return_value`: The return value expected from the execution of this contract (optional)
- `links`: Optional results of other contract calls that will be referenced when this contract is executed. See the [Link](#link) section for details

When a `MsgInitiateTx` is submitted, it is processed by the [Tx Initiator](./01-overview.md). The Tx Initiator then does the following:

- Generate a TxID from the `MsgInitiateTx`, verifies that it has not been submitted, and saves the TxID and the `MsgInitiateTx`
- Check if `commit_protocol` is supported by the initiator chain.
- Ensure that `timeout_height` and `timeout_timestamp` have not passed

After these processes, [Link processing](#link) is performed.

## Link

Link is functionality to associate contract transactions that make [cross-chain calls](./02-smart-contract.md). The initiator chain resolves each link to the corresponding result of the call using Linker when the `MsgInitiateTx` is submitted.

The following points should be considered when calling cross-chain contract functions:

1. Each contract function may be executed in parallel on each chain
2. The execution of an external contract function must be atomic to the execution of its caller function
3. the calling function can reference the return value from the execution of the external contract function

Point 1. is guaranteed to be serializable by the locking mechanism in [State store](./05-state-store.md), and point 2. is guaranteed by [Atomic commit protocol](./04-atomic-commit-protocol.md). Link is a functionality to realize point 3. and the submitter of a transaction can associate it by specifying the chain to be referred to as `links` in a `ContractTransaction` that performs a cross-chain call. Note that Link is represented as the index of the referenced `ContractTransaction` in `contract_transactions`.

The Contract Transaction (calleeTx) pointed to by Link and the Contract Transaction (callerTx) referring to Link are processed as follows:

1. The Linker generates a `CallResult` whose key is composed of `call_info` and `signers` of the calleeTx and whose value is `return_value`
2. The Linker resolves the `cross_chain_channel` of the calleeTx to an IBC channel available to the caller. Then, it sets the resolved to the `CallResult`
3. The TxInitiator generates a `ResolvedContractTransaction` from the callerTx's `ContractTransaction` and `CallResult`. The definition of `ResolvedContractTransaction` is as follows

```proto
message ResolvedContractTransaction {
  google.protobuf.Any cross_chain_channel = 1;
  repeated cross.core.auth.Account signers = 2;
  bytes call_info = 3;
  ReturnValue return_value = 4;
  repeated google.protobuf.Any call_results = 5; // List of CallResult
}
```

After resolving the link, the TxInitiator performs the [authentication process](#authentication) of the Transaction.

## Authentication

Transaction authentication is performed by the [Authenticator](./overview#authenticator). The Authenticator provides authentication methods for the initiator chain and other chains connected by the IBC channel.

Authentication of a transaction is performed by the accounts specified in `signers` of each contract transaction in `contract_transactions`. The execution is blocked until the authentication is completed.

The authentication must satisfy each account's method specified in `AuthType`. A corresponding Msg, where the target TxID is set, is defined for each authentication method, and authorization is possible by satisfying the specified one.

Currently, `SignTx`, `IBCSignTx`, and `ExtSignTx` are supported as authentication methods. The definitions of each method and their corresponding Msg are described below.

### SignTx

SignTx is a method that uses the authentication method of the chain in which the transaction is submitted. It can authenticate accounts with `AuthMode` specified as `AUTH_MODE_LOCAL`.

```proto
message MsgSignTx {
  bytes txID = 1;
  repeated bytes signers = 2; // List of Account IDs
}
```

### IBCSignTx

IBCSignTx is a method that uses the authentication method of the chain connected by the IBC channel to the chain where the transaction was submitted. It can authenticate accounts whose `AuthMode` are specified by `AUTH_MODE_CHANNEL`. Note that the accounts should have the information of the IBC channel to allow authentication as `option`.

```proto
message MsgIBCSignTx {
  google.protobuf.Any cross_chain_channel = 1;
  bytes txID = 2;
  repeated bytes signers = 3; // List of Account IDs
  ibc.core.client.v1.Height timeout_height = 4;
  uint64 timeout_timestamp = 5;
}
```

### ExtSignTx

ExtSignTx is a method that performs authentication according to a developer-defined authentication formula. It can authenticate accounts whose `AuthMode` are specified as `AUTH_MODE_EXTENSION`.

The corresponding account has to hold proto.Message that implements AuthExtensionVerifier as `option`.

```proto
message MsgExtSignTx {
  bytes txID = 1;
  repeated Account signers = 2;
}
```
```go
type AuthExtensionVerifier interface {
	proto.Message
	Verify(ctx sdk.Context, signer Account, signature signing.SignatureV2, tx sdk.Tx) error
}
```

See [here](https://github.com/datachainlab/cross/blob/v0.2.0/simapp/samplemod/types/auth.go) for an example of such an extended authentication implementation.

## Transaction Execution

After all authentication of the transaction is completed, `Tx Runner` starts the flow of Atomic Commit according to the `commit_protocol`. Each step of the flow sends a packet including the `ResolvedContractTransaction` corresponding to each chain; For more information on the different types of commit flows and the details of each, see [the Atomic commit protocol chapter](./04-atomic-commit-protocol.md).

On each chain, a contract is processed as follows:

- Process a `ResolvedContractTransaction` and returns it to [Contract Module](./overview#contract-module)
- If the contract contains cross-chain calls, verify that the arguments `ChannelInfo` and `ContractCallInfo` of the `Call` match the values of `CallResult` of the corresponding `ResolvedContractTransaction`
- After the contract is executed, call the Contract Manager's Precommit or CommitImmediately depending on the commit flow to save the status

Regardless of the type of Commit flow, it is guaranteed that the update will only be committed if all Contract Transactions included in `MsgInitiateTx` are successfully executed, and if any of them fail, all Contract Transactions will be aborted.
