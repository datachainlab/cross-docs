---
sidebar_position: 1
slug: /
---
<!-- This meta tag needs to be added to the root page -->
<head>
    <meta name="google-site-verification" content="WOO3lZv61a34McG2UBDokssGzsFQ8f-y8INVMqPAhr0" />
</head>

# Introduction

Cross Framework enables the development of cross-chain smart contracts that reference data and perform functions distributed across multiple Blockchains.

Blockchain generally lacks the ability to interoperate with other blockchains. It can process a transaction on a single blockchain and does not support a transaction involving processing on multiple blockchains. As a result, it can lead to network silos and limit ecosystem expansion. In addition, scaling issues occur due to the need for applications that integrate to be on the identical blockchain.

Cross Framework removes these constraints and allows for the execution of contracts across multiple blockchains. It also provides atomic transaction execution on each blockchain. A transaction mechanism that supports the atomic commit protocol is necessary to achieve this so that each chain's contract can reach the same decision. It also requires a communication protocol to build it on the multiple chains.

An overview of the transaction mechanism is described in [Cross-chain Transaction](./03-architecture/03-cross-chain-transaction.md). In addition, [IBC](https://github.com/cosmos/ibc) is used as the communication protocol. Also, IBC defines specifications for cross-chain messaging and relays, and verification methods are abstracted as IBC Client, and specifications are defined for each chain.

Currently, implementations [Go](https://github.com/datachainlab/cross) and [solidity](https://github.com/datachainlab/cross-solidity)(currently only partial functionality) are available. The Go implementation supports Cosmos-SDK chain and Hyperledger Fabric, and the solidity implementation supports Ethereum, Hyperledger Besu, and GoQuorum.

## Sections

- [Architecture](./03-architecture/01-overview.md): Architecture Overview
- (WIP)[Getting started](./02-getting-started/01-install.md): How to develop a smart contract using Cross Framework
