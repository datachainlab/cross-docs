---
sidebar_position: 5
id: state-store
---

# State store

State store is an abstract KVS, or key-value store, class that persists the state of smart contracts on each chain. It supports the following elements:

1. Saving operations that change state
2. Applying or discarding saved changes
3. Locking mechanism for state access

In general, executing contract functions sequentially in a single blockchain can reflect the changes in the store after each update operation. However, the state of contracts in chains needs to be updated atomically in a cross-chain application. If any contracts in one chain fail, the execution of all other related contracts must be interrupted. Therefore, the State store supports (1) the storage of state change operations and (2) the application and destruction of stored changes.

In addition, cross-chain transactions are executed cooperatively among blockchains, which means that they are divided into multiple transactions within a given chain. Therefore, there can be transactions operating in parallel in the same state. Cross Framework introduces the locking mechanism in (3) to guarantee the [serializability](https://en.wikipedia.org/wiki/Serializability) of transactions. The following describes a state store implementation that supports the currently provided two types of locking mechanisms.

## Lock Store

Lock Store is a store that provides simple APIs such as Get, Set, etc., to obtain Read-Write lock.

The following operations are supported:

- Get(K): Returns the value corresponding to the Key specified by `K`
- Set(K,V): Set the value specified by `V` to the key specified by `K`
- Delete(K): Deletes a Key and its corresponding Value specified by `K`

The store also acquires the following locks for each operation.

| State store operations | locks to be acquired |
| --------------- | -------- |
| Get(K) | Shared lock on K |
| Set(K, V) | Exclusive lock on K |
| Delete(K) | Exclusive lock to K |

## CDT(Conflict-free Data Types) Store

CDT Store is a store that implements a data structure called [CDT](https://github.com/datachainlab/cross-cdt) that allows concurrent operations under certain conditions.

CDT defines multiple data types and currently supports Integer, Grow-only Set; Integer supports Add, Sub, and Compare functions, which can be used to implement ERC20 with concurrent operations. For more information, check here: https://github.com/datachainlab/cross-cdt
