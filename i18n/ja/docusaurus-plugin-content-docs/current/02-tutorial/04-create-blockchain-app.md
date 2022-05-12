---
sidebar_position: 4
id: create-blockchain-app
---

# Create Blockchain Applications

ここでは、Cross Framework 機能を持つブロックチェーンアプリケーションをどのように開発していくか、について述べる。
Demo アプリケーション [fabric-tendermint-cross-demo](https://github.com/datachainlab/fabric-tendermint-cross-demo) においては、`Tendermint基盤ブロックチェーン` と `Hyperledger Fabric` による`Cross-chain`を実現している。

それぞれのアプリケーション説明については以下を参照のこと。

- [Fabric](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric)
  - [Fabibc Application](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric/chaincode/fabibc)
- [Tendermint Application](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/tendermint)

## Features

これらのアプリケーションは[Cosmos SDK](https://github.com/cosmos/cosmos-sdk)のモジュールをベースに開発されている。
そのため、最初に `Cosmos SDK` の基幹となる [BaseApp](https://docs.cosmos.network/master/core/baseapp.html) についての理解が必要となる。

また、それぞれの README.md の [Fabric Application](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric/chaincode/fabibc) と [Tendermint Application](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/tendermint) を見てわかる通り、ブロックチェーンの仕様の差異によって、 `Contract Module` の組み込み方法が変わることはない。
