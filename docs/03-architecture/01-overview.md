---
sidebar_position: 1
id: overview
---

# Overivew

Cross Frameworkは次のようなコンポーネントから構成される。

![Fig. Architecture](https://user-images.githubusercontent.com/1170428/136157600-5f459aa6-a0d3-44df-9d16-31da4d4d1d4e.png)

### Tx Initiator

Tx InitiatorはClientから提出されたTransaction(MsgInitiateTx)を受け付ける。提出後、基本的なバリデーションの後に、Cross-chain callsのためにContract Transaction間の[Link処理](./cross-chain-transaction#link)を行う。

次に、提出トランザクションごとにユニークなTxIDを生成し、Transactionに含まれるContract Transactionの認証に必要なAccountを取り出し、Authenticatorを呼び出す。トランザクションは、Authenticatorにより全ての必要な認証が完了するまでブロックされる。完了後、Tx Runnerによりトランザクションは開始される。

Transactionの提出の詳細は[Inititate Transaction](./cross-chain-transaction#initiate-transaction)でも述べられる。

### Authenticator

Authenticatorはトランザクションの認証処理の提供とその状態の管理を行う。認証方式は、実行チェーン上の認証の他、IBCを用いた他チェーン上での方式など複数サポートされる。

各認証処理はトランザクションの提出チェーンで同期的に行われるだけでなく、非同期での処理や別チェーンからのPacketにより処理される場合がある。

そのため、認証時には対象のトランザクションを識別するためにTxIDを指定する必要がある。認証方式の詳細は[Authentication](./cross-chain-transaction#authentication)で述べる。

### Tx Runner

Tx Runnerは、Authenticatorにより認証が成功したトランザクションを実行する。トランザクションは複数チェーン上で実行されるため、それらをAtomicに実行できなければならない。そのため、[Atomic commit protocol](./03-architecture/04-atomic-commit-protocol.md)をサポートしている。e.g. Two-phase commit protocol, Simple commit protocol

TransactionがどのCommit protocolを用いるかは、`MsgInitiateTx`で指定された方式に従う。提出ChainはそのCommit protocolのcoordinatorとなり、他チェーンとIBC Channelを通してメッセージングを行う。そして、Commit or Abortの決定を行い、各参加者にその結果をリクエストする。

### Contract Manager

Contract Managerは、Contractを実装するContract Moduleと[State Store](./05-state-store.md)を管理し、その状態変更を操作するAPIを実装する。これらのAPIは、Commit protocolのフローの状態に応じてTx Runnerにより呼び出される。

### Contract Module

Contract Moduleは、Frameworkを利用する開発者が実装するModuleである。

開発者は以下のInterfaceを実装するModuleを実装する。

```go
type ContractModule interface {
	OnContractCall(ctx context.Context, signers []authtypes.Account, callInfo txtypes.ContractCallInfo) (*txtypes.ContractCallResult, error)
}
```

TxRunnerにより、呼び出し情報、認証情報とともに`OnContractCall`が呼ばれることでContractは実行される。Contractは一般的には、`signers`で指定されたAccountの認証方式が期待したものであることを確認する必要がある。Contract Moduleの実装例は[ここ](https://github.com/datachainlab/cross/blob/v0.2.0/simapp/samplemod/module.go)で確認できる。
