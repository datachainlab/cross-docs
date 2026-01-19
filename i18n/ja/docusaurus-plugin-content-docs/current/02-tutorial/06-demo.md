---
sidebar_position: 6
id: demo
---

# Demo

ここでは、Cross-chain 環境の構築方法及び、シナリオに沿って Cross-chain transaction を実行する例について述べる。

---

## Tendermint and Hyperledger Fabric

[fabric-tendermint-cross-demo](https://github.com/datachainlab/fabric-tendermint-cross-demo) 上での Tendermint と Hyperledger Fabric によるデモについて述べる。

### Setup network
[Setup Network](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo#setup-network) の手順に従い環境を構築する。

### Execute Cross-chain demo
[実行サンプル script](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/demo/scripts/scenario/sample-scenario) が用意されているため、そちらを実行する。詳しい説明については、[About sample-scenario](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo#about-sample-scenario) の項を参照。

---

## Ethereum to Ethereum (Anvil)

[ethereum-cross-demo](https://github.com/datachainlab/ethereum-cross-demo) を利用した、2つのローカルな Ethereum ネットワーク（Anvil）間での ERC20 Atomic Swap の実行例について述べる。

### Execute Cross-chain demo
[demo script](https://github.com/datachainlab/ethereum-cross-demo#testing-the-demo) を実行することで、ERC20 トークンの Cross-chain atomic swap を実行できる。
