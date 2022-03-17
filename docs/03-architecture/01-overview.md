---
sidebar_position: 1
id: overview
---

# Overview

Cross Framework is composed of the following components:

![Fig. Architecture](https://user-images.githubusercontent.com/1170428/136157600-5f459aa6-a0d3-44df-9d16-31da4d4d1d4e.png)

### Tx Initiator

Tx Initiator accepts a transaction (MsgInitiateTx) submitted by an actor. After validating the transaction, it performs [Link processing](./cross-chain-transaction#link) between Contract Transactions for cross-chain calls.

It then generates a unique TxID for each submitted transaction, retrieves the Account required to authenticate the Contract Transaction contained in the transaction, and calls Authenticator. The transaction is blocked until the Authenticator completes all necessary authentications. After completion, Tx Runner initiates the transaction.

The details of submitting a Transaction are described in [Initiate Transaction](./cross-chain-transaction#initiate-transaction).

### Authenticator

Authenticator provides a transaction authentication process and manages its status. Several authentication methods are supported, including authentication on the execution chain and authentication on other chains using IBC.

Each authentication process is not only performed synchronously in the transaction submission chain but may also be processed asynchronously or by a packet from another chain.

Therefore, it is necessary to specify TxID to identify the target transaction at the authentication. The details of the authentication process are described in [Authentication](. /cross-chain-transaction#authentication).

### Tx Runner

Tx Runner executes transactions that Authenticator has successfully authenticated. Since transactions are executed on multiple chains, they must be able to be executed atomically. For this reason, it supports the [Atomic commit protocol](./03-architecture/04-atomic-commit-protocol.md). e.g. Two-phase commit protocol, Simple commit protocol

A commit protocol that a Transaction uses depends on the method specified by `MsgInitiateTx`. The submitting chain is the coordinator of the commit protocol and communicates with other chains via IBC Channel. It decides whether to commit or abort and requests the result to each participant.

### Contract Manager

Contract Manager manages Contract Module that implements a contract and [State Store](./05-state-store.md). It also provides API to commit and discard changes. These APIs are called by Tx Runner corresponding to the status of the commit protocol flow.

### Contract Module

Contract Module defines a smart contract. It is implemented by the developer who uses the framework.

A module must satisfy the following interfaces:

```go
type ContractModule interface {
	OnContractCall(ctx context.Context, signers []authtypes.Account, callInfo txtypes.ContractCallInfo) (*txtypes.ContractCallResult, error)
}
```

A contract is executed by TxRunner when `OnContractCall` is called with a call information and authentication information; A contract generally needs to validate that an authentication process of Account is specified in `signers`. You can find an example implementation of Contract Module [here](https://github.com/datachainlab/cross/blob/v0.2.0/simapp/samplemod/module.go).
