---
sidebar_position: 5
id: create-command-cli
---

# Create Command CLI

ここでは、Cross Framework を使ったトランザクション及び、追加した `Contract Module` 機能を実行するための `CLI`、について述べる。
まずは、Demo アプリケーションの `Tendermint`, `Fabric` の CLI について、それぞれの README を一読頂きたい。

- [Tendermint Comamand](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/alpha)
- [Fabric Command](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/beta)

## Cross Framework functionalities as CLI

前提条件として, Demo アプリケーションにおける `Atomic commit protocol` は、[Simple commit protocol](../01-docs/03-architecture/04-atomic-commit-protocol.md#simple-commit-protocol) を採用している。  
また、必要とされる CLI の機能はブロックチェーンのアーキテクチャーに依存する。そして、必要とされる `Cross Framework` の機能は `Coordinator/Participant` Chain と `Participant only` Chain によっても異なる。

### Coordinator/Participant chain

`Coordinator/Participant` chain は `Transaction Initiator`としての役割を持つため、この CLI は [Initiate Transaction](../01-docs/03-architecture/03-cross-chain-transaction.md#initiate-transaction) を作成するための `create-initiate-tx` コマンドを持つ。

Demo アプリケーションにおける、該当 CLI についてのリファレンスは [こちら](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/alpha)。

### Participant only chain

デモ環境においては、[IBCSignTx](../01-docs/03-architecture/03-cross-chain-transaction.md) が利用されているため、CLI は [IBCSignTx](../01-docs/03-architecture/03-cross-chain-transaction.md)を作成するための `ibc-signtx` コマンド を持つ。

Demo アプリケーションにおける、該当 CLI についてのリファレンスは [こちら](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/beta)。

### Target source code for Cross Framework

Cross Framework 機能を実行するための CLI 実装については以下のコードを参照。

- [Tendermint CLI](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/cmds/alpha/cmd/cross.go)
- [Fabric CLI](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/cmds/beta/cmd/cross.go)
