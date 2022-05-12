---
sidebar_position: 2
id: smart-contract
---

# Smart Contract

Smart contractとは、Blockchain上で実行可能なプログラムである。それらは状態をもち、提供される機能は関数として公開され、定められた条件に従い実行可能である。ユーザが生成したTransactionによって実行され、状態の更新を行う。EthereumやHyperledger fabricなど多くのブロックチェーンにおいて、単一のChain or Channelの処理を行うトランザクションのみがサポートされており、他のブロックチェーンとのInteroperabilityは考慮されていないものが多い。
## Cross-chain smart contract

Cross Frameworkでは、異なるChain間でSmart contractの機能や状態を相互に呼び出し、参照を行うsmart contract(Cross-chain smart contract)の開発が可能である。また、2つの独立したContractの呼び出しをアトミックに実行することも可能である。

これにより、より複雑な状態を持つアセットのChain間転送やスワップを実現可能となることに加え、新しくこのようなプロトコルを開発者が実装する場合にも安全に最小限のロジックの開発に集中できるようになる。

また、このようなSmart contractを実現するために([Cross-chain Transactions](./03-cross-chain-transaction.md))をサポートしている。これは複数の異なるブロックチェーン間で行う分散トランザクションを指す。データベースの分散トランザクションと同じく、Cross-chain Transactionsは、ACID特性で定義されているようなトランザクション処理の信頼性を保証する必要がある。Cross FrameworkではContractのAtomicな実行をサポートするために[複数のアトミックコミットプロトコル](./04-atomic-commit-protocol.md)を実装している。

開発者は、[Contract Module](./01-overview.md#contract-module)を実装することでこのようなContractを開発できる。

## Cross-chain calls

各Chainに実装されたContract関数は、それぞれ別のChainのContract関数を呼び出し可能である。これをCross-chain callsと呼んでいる。一方のChainのContractが他方のContractの呼び出しの結果を受け取ることが可能である。

これにより、Chain間の資産の移転などのより複雑なプロトコルを含むContractが開発可能である。

例えば、Chain A上のAliceがChain B上のBobの残高にトークン転送するコントラクトは次のようになる。簡単のため、Chain AとB上のトークンは等価である仮定をおく。

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

Deposit関数は単に残高をコントラクトアドレスにdepositするだけの関数であり、成功したかどうかの真偽値を返す。一方、Peg関数はChainA上のDeposit関数を`Call`で呼び出し、その戻り値を取得している。InitiateTx時に2つの関数呼び出しをLinkさせることでこのようなコントラクト間呼び出しが可能になる。なお、InitiateTxやLinkの仕様については[リンクの項](./03-cross-chain-transaction.md#link)で述べる。
