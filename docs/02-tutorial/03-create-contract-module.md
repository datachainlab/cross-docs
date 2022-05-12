---
sidebar_position: 3
id: create-contract-module
---

# Create contract modules

This part explains how to develop [Contract Module](../01-docs/03-architecture/01-overview.md#contract-module).  
In the demo, ERC20 functionalities are additional.
First, read about [ERC20 Contract](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/contracts/erc20) of [fabric-tendermint-cross-demo](https://github.com/datachainlab/fabric-tendermint-cross-demo).

## Contract Module

In general, modules need to satisfy specific interfaces as explained by [ERC20 Contract](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/contracts/erc20#erc20-contract).

As Cross Framework, modules need to satisfy [ContractModule interface](../01-docs/03-architecture/01-overview.md#contract-module).

```go
type ContractModule interface {
	OnContractCall(ctx context.Context, signers []authtypes.Account, callInfo txtypes.ContractCallInfo) (*txtypes.ContractCallResult, error)
}
```

Implementation in demo is [here](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/contracts/erc20/modules/erc20contract/module.go).
