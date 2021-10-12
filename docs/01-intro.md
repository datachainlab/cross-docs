---
sidebar_position: 1
---

# Introduction

Cross Frameworkは、複数のBlockchainに分散したデータの参照や機能の実行をAtomicに行う、[Cross-chain smart contract](./03-architecture/02-smart-contract.md) の開発を可能にするフレームワークである。

Blockchainは一般に他BlockchainとのInteroperabilityの能力は乏しく、トランザクションのサポートも単一のChain上の処理に特化しており、別のシステムの処理を含むトランザクションのサポートはされていないことが多い。それにより、各ブロックチェーンで形成されたネットワークのサイロ化が起こり、それぞれで立ち上がったエコシステムの発展を制限してしまうことになる。また、ブロックチェーンシステムのスケーリング面においても、(ブロックチェーンによる特性を保つためには)連携するアプリケーションは同一のブロックチェーン上にある必要性があることが厳しい制約となるケースがある。

Cross Frameworkは、このような制約を取り除き、複数のブロックチェーン間にまたがるコントラクトを実行することを可能にする。さらに各ブロックチェーン上での処理をアトミックに実行を可能にする。そのためには、各Chainのコントラクトが同じ結果にいたるためのAtomic commit protocolをサポートするトランザクションの仕組みとそれを実現するための通信プロトコルが必要である。前者のトランザクションの仕組みの概要は[Cross-chain Transaction](./03-architecture/03-cross-chain-transaction.md)で述べられる。また、後者の通信プロトコルには[IBC](https://github.com/cosmos/ibc)を利用する。IBCはクロスチェーンのメッセージングやリレーの仕様を定めており、検証方式については、IBC Clientとして抽象化され、チェーンごとに仕様が定められる。

現在、実装は[Go](https://github.com/datachainlab/cross)と[Solidity](https://github.com/datachainlab/cross-solidity)(現在一部機能のみ)が提供されている。Go実装はTendermintを用いるChainとHyperledger Fabricをサポートしている。Solidity実装は、Ethereum、Hyperledger Besu, GoQuorumをサポートする。

## Sections

- [Architecture](./03-architecture/01-overview.md): アーキテクチャの説明
- (WIP)[Getting started](./02-getting-started/01-install.md): Cross Frameworkを使ったSmart Contractを構築するための手順
