---
sidebar_position: 5
id: create-command-cli
---

# Create Command CLI

This part explains how to develop CLI to run Cross-chain transactions in atomic.
See README.md respectively.

- [Tendermint Comamand](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/alpha)
- [Fabric Command](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/beta)

## Cross Framework functionalities as CLI

As precondition, demo project works by [Simple commit protocol](../01-docs/03-architecture/04-atomic-commit-protocol.md#simple-commit-protocol) as [Atomic commit protocol](../01-docs/03-architecture/04-atomic-commit-protocol.md#atomic-commit-protocol).  
Required functionalities as CLI depend on Chain specific architecture. And the functionalities for Cross-chain are different between the `Coordinator/Participant` chain and the `Participant only` chain.

### Coordinator/Participant chain

`Coordinator/Participant` chain is in charge of `Transaction Initiator`. So CLI includes `create-initiate-tx` commnad to create [Initiate Transaction](../01-docs/03-architecture/03-cross-chain-transaction.md#initiate-transaction).

Tendermint Command reference in the demo is [here](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/alpha).

### Participant only chain

CLI includes `ibc-signtx` command to create [IBCSignTx](../01-docs/03-architecture/03-cross-chain-transaction.md) due to that [IBCSignTx](../01-docs/03-architecture/03-cross-chain-transaction.md) is used in demo.

Fabric Command reference in the demo is [here](https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/beta).

### Each of CLI source code for Cross Framework

- [Code for Tendermint](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/cmds/alpha/cmd/cross.go)
- [Code for Fabric](https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/cmds/beta/cmd/cross.go)
