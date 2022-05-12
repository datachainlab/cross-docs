---
sidebar_position: 1
id: overview
---

# Overview

このチュートリアルにて [Hyperledgr Fabric](https://www.hyperledger.org/use/fabric) と [Tendermint](https://tendermint.com/) 基盤ブロックチェーン 間のアトミックスワップを実現するための `Cross-chain` アプリケーション をどのように開発するのか、について `Cross Framework` を用いた demo アプリケーションである [fabric-tendermint-cross-demo](https://github.com/datachainlab/fabric-tendermint-cross-demo) を通じて説明する。
ただし、既存のコードベースを流用することによって、全てをフルスクラッチすることは想定していない。  
独自の [Contract Module](../01-docs/03-architecture/01-overview.md#contract-module) をどのように開発し、どのように Application に組み込み、CLI でどのように操作するかに焦点を当てる。

また、このデモは[Atomic commit protocol](../01-docs/03-architecture/04-atomic-commit-protocol.md#atomic-commit-protocol)として[Simple commit protocol](../01-docs/03-architecture/04-atomic-commit-protocol.md#simple-commit-protocol)を採用している。
