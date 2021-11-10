---
sidebar_position: 3
id: cross-chain-transaction
---

# Cross-chain Transaction

Cross-chain Transaction is a distributed transaction executed between Chains connected by IBC channel.

Cross Framework supports multiple atomic commit protocols and provides a state store that supports state commit, rollback, and concurrency control.

A chain that receives a request from a user verifies the contents of the request and sends a packet containing a contract invocation request to the specified chain to initiate a transaction. The chain that receives the user's request to initiate a transaction is called the initiator chain. Once the initiator chain receives a request, it processes the approval by each Account and then executes the Atomic commit flow according to the specified format.

For example, the initiator chain acts as a coordinator when executing Two-phase commit. First, the coordinator requests each participant chain to execute the contract function. Next, the coordinator gets the result of each call and decides whether or not to commit. After receiving the final decision, each participant chain commits or aborts the change.

## Account

TODO