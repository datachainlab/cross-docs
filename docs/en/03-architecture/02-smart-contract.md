---
sidebar_position: 2
id: smart-contract
---

# Smart Contract

Smart contract is a program that can be executed on Blockchain. They have a state, and the functions they provide are exposed as functions that can be executed according to defined conditions. It can also be executed by a transaction is created by a user.

Many blockchains, such as Ethereum and Hyperledger fabric, only support transactions that process a single chain or channel and often do not have interoperability with other blockchains.


## Cross-chain smart contract

In Cross Framework, it enables the development of a smart contract (C-chain smart contract) that invokes and references smart contracts' functions and states between different chains. It is also possible to invoke two independent contracts atomically. Thus, developers will only focus on developing business logic.

The framework also supports ([Cross-chain Transactions](./02-cross-chain-transaction.md)) to realize Cross-chain smart contract. It means distributed transactions between multiple different blockchains. Similar to distributed transactions in databases, Cross-chain Transactions need to guarantee transaction processing reliability as defined by the ACID property.

To realize it, Cross Framework implements [multiple atomic commit protocols](./03-atomic-commit-protocol.md) to support the atomic execution of contracts.

Developers can develop such a contract by implementing the [Contract Module](./overview#contract-module).

## Cross-chain calls

A contract function implemented in a chain can call a contract function o in another chain. It is called cross-chain calls. It allows one chain's contract to receive the results of the other chain's contract calls.

It enables the development of contracts that include more complex logics such as conditional asset transfer between chains.

For example, a contract in which Alice on chain A transfers a token to Bob's balance on chain B would be as follows: (for simplicity, let us assume that the tokens on chain A and B are equivalent)

```go
// ChainA
func Deposit(store Store, from Account, amount uint64) bool {
    balance := store.GetInt(from)
    if (balance < amount) {
        return false
    }
    store.SetInt(fromID, balance-amount)
    store.AddInt(contractAddress, amount)
    return true
}

// ChainB
func Peg(store Store, to Account, amount uint64) {
    ret := Call(
        ChannelInfo{
            Port: "transfer",
            Channel: "chainA",
        },
        ContractCallInfo{
            Func: ChainA::Deposit,
            Args: [ctx.SignerAccount, amount],
        })
    assert(ret == true)
    store.AddInt(to, amount)
}
```

Deposit function deposits the balance to the contract address and returns a boolean value of whether it is successful or not. Peg function calls the Deposit function on chainA with `Call` and gets its return value. Linking the two function calls in InitiateTx process enables such Cross-chain call. For more information on the specifications of InitiateTx and Link, please refer to [02](./cross-chain-transaction#link).
