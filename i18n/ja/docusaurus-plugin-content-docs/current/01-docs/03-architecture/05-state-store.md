---
sidebar_position: 5
id: state-store
---

# State store

State storeは、各チェーン上のSmart Contractの状態を永続化する抽象的なKVSのクラスである。これは以下の要素をサポートする。

1. 状態の変更操作の保存
2. 保存した変更の適用もしくは破棄操作
3. 状態のアクセスへのロック機構

一般的に、単一のブロックチェーンにおいて逐次的にContract関数を実行する上では、更新操作のたびに変更をStoreに反映することができる。しかし、クロスチェーンにおいては、すべてのChainのContractの状態の更新をAtomicに行う必要があるため、いずれかのChainのContractが失敗した場合、他の全てのContractの実行を中断できる必要がある。そのため、State storeは(1)状態の変更操作の保存と(2)保存した変更の適用や破棄操作をサポートする。

また、Cross-chain transactionは、複数のブロックチェーン間で協調して実行されるため、あるチェーンの中で複数のトランザクションに分かれることになる。そのため、同じ状態に対して並行して操作するトランザクションが存在しうる。Cross Frameworkでは、トランザクションの[直列化可能性](https://en.wikipedia.org/wiki/Serializability)を保証するために(3)のロック機構を導入する。以下では、現在提供されている2種類のロック機構をサポートするState Storeの実装について述べる。

## Lock Store

Lock Storeは、Get, Setなどの単純なAPIを提供し、Read-Write Lockを取得することができるStoreである。

以下の操作がサポートされる:

- Get(K): `K`で指定したKeyに対応するValueを返す
- Set(K,V): `K`で指定したKeyに対して`V`で指定したValueをセットする
- Delete(K): `K`で指定したKeyと対応するValueを削除する

また、Storeは各操作に対して以下のようなロックを取得する。

| State storeへの操作 | 取得するロック  |
| --------------- | -------- |
| Get(K)          | Kへの共有ロック |
| Set(K, V)       | Kへの排他ロック |
| Delete(K)       | Kへの排他ロック |

## CDT(Conflict-free Data Types) Store

CDT Storeは、[CDT](https://github.com/datachainlab/cross-cdt)と呼ばれる特定の条件下で並行する操作を可能にするデータ構造を実装したStoreである。

CDTは複数のデータ型を定義しており、現在Integer, Grow-only Setがサポートされている。Integerは、Add, Sub, Compare関数がサポートされており、これを用いて並行する操作が可能なERC20を実装可能である。詳細はこちらを確認。https://github.com/datachainlab/cross-cdt
