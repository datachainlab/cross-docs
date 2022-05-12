---
sidebar_position: 3
id: create-contract-module
---

# Create contract modules

ここでは、[Contract Module](../01-docs/03-architecture/01-overview.md#contract-module) をどのように開発していくか、について述べる。
Demo アプリケーション [fabric-tendermint-cross-demo](https://github.com/datachainlab/fabric-tendermint-cross-demo) では、ERC20 の機能を `Contract Module` として実装している。

まず、Demo アプリケーションの [ERC20 Contract](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/contracts/erc20) を参照し、どのような機能が実装されているか確認する。

## Contract Module

追加する `Contract Module` は [ERC20 Contract](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/contracts/erc20#erc20-contract) の項でも説明されているように、特定の Interface を満たす必要がある。

Cross Framework として、Module は [ContractModule interface](../01-docs/03-architecture/01-overview.md#contract-module) の Interface を満たす必要がある。

```go
type ContractModule interface {
	OnContractCall(ctx context.Context, signers []authtypes.Account, callInfo txtypes.ContractCallInfo) (*txtypes.ContractCallResult, error)
}
```

実装については[こちら](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/contracts/erc20/modules/erc20contract/module.go)を参照。
