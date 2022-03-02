---
sidebar_position: 3
id: cross-chain-transaction
---

# Cross-chain Transaction

Cross-chain Transactionは、IBC channelで接続されたChain間で実行される分散Transactionである。

Cross Frameworkでは、複数のAtomic commit protocolをサポートし、また各Chainの状態のコミット、巻き戻し機能および並行制御のためのLock mechanismを提供するState storeを提供している。

Transactionはユーザからリクエストを受けたChainがその内容を検証し、指定されたChainに対してContract呼び出しリクエストを含むPacketを送信することで開始される。ユーザのTransaction開始のリクエストを受け取るChainをInitiator chainと呼ぶ。Initiator chainは、リクエストを受け取ると、各Accountによる承認を処理し、その後Atomic commitのフローを指定された形式に従い実行する。

例えば、Atomic commitとしてTwo phase commitを実行する場合、Initiator chainがCoordinatorの役割を担う。最初にCoordinatorは各Participant chainにContract関数の実行を要求する。次に、Coordinatorは、各Participant chainの関数の呼び出し結果を取得し、最終的なCommitの可否を決定する。最終的にその決定を受け取った各Participant chainsはCommitもしくはAbortを行う。

## Account

アカウントとは、ブロックチェーンに対してトランザクションを送信できるエンティティである。通常、それらはあるブロックチェーン内で一意に識別されることが求められる。また、一般的にあるチェーンでのアカウントは別チェーン上のアカウントとの相互運用性がない。これは、ブロックチェーンごとにアカウントの概念や表現方式が異なるためである。

Cross-chain上のコントラクトの認証において、任意のブロックチェーン上のアカウントを利用できるようにすることで、多様な認証方式をサポートできるようになる。Cross Frameworkでは、Accountは各ブロックチェーン上でのユーザの識別子を示す`ID`と`AuthType`と呼ばれる認証情報から構成される。これにより、異なるチェーン上のアカウントを識別可能にしている。
なお、Cross Frameworkがサポートする各認証方式については[こちら](#authentication)を参照。

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

`AuthMode`とは、認証方式を指す識別子であり、`option`とは`AuthMode`ごとに定義される認証情報である。`AUTH_MODE_CHANNEL`の場合はChannelの情報、`AUTH_MODE_EXTENSION`の場合はExtensionのprotobuf.Anyの定義が`option`に含まれる。Transactionの認証の詳細は[Authentication](#authentication)で述べる。

## Initiate Transaction

Transactionを開始するために、ユーザは以下の`MsgInitiateTx`として定義されるトランザクションを作成し、Chainに提出する。`MsgInitiateTx`が提出されたChainをInitiator chainと呼ぶ。

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

`MsgInitiateTx`は、主に次の要素から構成される:

- `contract_transactions`: 各Chain上の[Contract Module](./overview#contract-module)を実行するContract Transactionの配列。
- `commit_protocol`: トランザクションのコミットプロトコル
- `timeout_height`, `timeout_timestamp`: トランザクションのタイムアウトを指定。これを過ぎた場合、実行されない。

また、Contract Transactionは、次の要素から構成される:

- `cross_chain_channel`: Initiator Chainと実行対象のコントラクトが存在するChainとのIBC Channel
- `signers`: 認証が必要な`Account`の配列
- `callInfo`: Contractの識別子、関数名、引数などを含む呼び出し情報。フォーマットは[Contract Module](./overview#contract-module)の仕様で定められる
- `return_value`: このContractの実行により期待される戻り値(オプション)
- `links`: このContractの実行時に参照される他のContract呼び出し結果(オプション)。詳細は[Link](#link)の項を参照

`MsgInitiateTx`が提出されると、[Tx Initiator](./01-overview.md)により処理される。Tx Initiatorは、次に以下の処理を行う:

- `MsgInitiateTx`からTxIDを生成し、未提出であることを確認したうえで、TxIDと`MsgInitiateTx`を保存する
- `commit_protocol`をInitiator Chainがサポートしているかを確認する
- `timeout_height`, `timeout_timestamp`が過ぎていないことを確認する

これらの処理の後、[Link処理](#link)を行う。

## Link

Linkは、[Cross-chain calls](./02-smart-contract.md)を行うContract Transaction間の関連付けを行う機能である。LinkerによりLinkは`MsgInitiateTx`の提出時にInitiator Chainにより呼び出し結果に解決される。

Cross-chainのContract関数呼び出しには、以下の点を考慮する必要がある:

1. 各Contract関数はそれぞれのChain上で並行して実行される場合がある
2. 外部のContract関数の実行はその呼び出し元の関数の実行とAtomicに行われる必要がある
3. 外部のContract関数の実行による返り値を呼び出し元関数で参照できる

1.は、[State store](./05-state-store.md)のLocking mechanismで直列化可能性が保証され、2.は、[Atomic commit protocol](./04-atomic-commit-protocol.md)により保証される。Linkは、3の要素を実現するための機能であり、Transaction提出者はCross-chain callを行う`ContractTransaction`の`links`として参照先のChainを指定することで関連付けることが可能となる。なお、Linkは、`contract_transactions`内の参照先の`ContractTransaction`のインデックスとして表される。

Linkが指すContract Transaction(calleeTx)と、Linkを参照するContract Transaction(callerTx)は以下のように処理される:

1. Linkerは、calleeTxの`call_info`と`signers`から構成されるものをキーとし、`return_value`を値とする`CallResult`を生成する
2. Linkerは、calleeTxの`cross_chain_channel`をcallerが利用可能なIBC Channelに解決し、それを`CallResult`にセットする
3. TxInitiatorは、callerTxの`ContractTransaction`と`CallResult`から`ResolvedContractTransaction`を生成する。`ResolvedContractTransaction`は以下のような定義となる。

```proto
message ResolvedContractTransaction {
  google.protobuf.Any cross_chain_channel = 1;
  repeated cross.core.auth.Account signers = 2;
  bytes call_info = 3;
  ReturnValue return_value = 4;
  repeated google.protobuf.Any call_results = 5; // List of CallResult
}
```

TxInitiatorは、Linkの解決後、Transactionの[認証処理](#authentication)を行う。

## Authentication

Transactionの認証は、[Authenticator](./overview#authenticator)により行われる。Authenticatorは、Initiator Chainでの認証方式のほか、IBC Channelで接続される他チェーンでの認証方式を提供する。

Transactionの認証は、`contract_transactions`の各Contract Transactionの`signers`に指定されたAccountにより行われる。また、認証が完了するまで実行はブロックされる。

認証は各Accountの`AuthType`で指定された方式を満たす必要がある。各方式ごとに対応するMsgが定義されており、対象のTxIDを指定し、決められた方式を満たすことで承認が可能である。

現在、認証方式として、`SignTx`, `IBCSignTx`, `ExtSignTx`がサポートされている。各方式とそれらに対応するMsgの定義を以下で述べる。

### SignTx

SignTxは、Transactionが提出されたチェーンの認証方式にしたがって認証を行う方式である。これは、`AuthMode`が`AUTH_MODE_LOCAL`で指定されたAccountの認証が可能である。

```proto
message MsgSignTx {
  bytes txID = 1;
  repeated bytes signers = 2; // List of Account IDs
}
```

### IBCSignTx

IBCSignTxは、Transactionが提出されたチェーンとIBC Channelで接続されたチェーンの認証方式にしたがって認証を行う方式である。これは、`AuthMode`が`AUTH_MODE_CHANNEL`で指定されたAccountの認証が可能である。なお、そのAccountは、`option`として認証を許可するIBC Channelの情報を保持する必要がある。

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

ExtSignTxは、開発者定義の認証式にしたがって認証を行う方式である。これは、`AuthMode`が`AUTH_MODE_EXTENSION`で指定されたAccountの認証が可能である。

これに対応するAccountは`option`としてAuthExtensionVerifierを実装するproto.Messageを保持する必要がある。

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

このような拡張認証の実装例は[ここ](https://github.com/datachainlab/cross/blob/v0.2.0/simapp/samplemod/types/auth.go)を参照。

## Transaction Execution

トランザクションの全ての認証が完了した後に、`Tx Runner`は、`commit_protocol`に従いAtomicなCommitを行うフローを開始する。フローの各ステップでは、各Chainと対応する`ResolvedContractTransaction`を含めたPacketを送信する。Commitのフローの種類とそれぞれの詳細については、[Atomic commit protocolの章](./04-atomic-commit-protocol.md)で説明する。

各Chain上で次のようにContractは処理される:

- `ResolvedContractTransaction`を処理し、[Contract Module](./overview#contract-module)で定義されるContract関数を呼び出す
- ContractがCross-chain callsを含む場合、`Call`の引数`ChannelInfo`と`ContractCallInfo`が対応する`ResolvedContractTransaction`の`CallResult`の値と一致することを検証する
- Contractの実行後、コミットフローに応じて[Contract Manager](./overview#contract-manager)のPrecommitもしくはCommitImmediatelyを呼び出し状態を保存する

Commitフローの種類にかかわらず、`MsgInitiateTx`に含まれる全てのContract Transactionの実行が成功した場合のみ更新はコミットされ、いずれかが失敗した場合は全てのContract Transactionは中止されることが保証されている。
