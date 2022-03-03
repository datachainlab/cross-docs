---
sidebar_position: 4
id: atomic-commit-protocol
---

# Atomic commit protocol

Atomic commit protocolとは、複数の操作の集合を1つの処理として実行可能にするプロトコルである。代表的なものとしては、Two-phase commitやThree-phase commitなどがある。我々の文脈では、複数のブロックチェーンのトランザクションを1つのトランザクションとして実行するためのプロトコルを指す。

Cross Frameworkでは、現在、Simple commit protocol, Two-phase commit protocolの2種類のプロトコルをサポートしており、トランザクションの作成時に指定が可能である。これらのプロトコルでは、トランザクションで指定される各処理を実行する参加者と参加者が共通の決定を得るためのコーディネートを行うコーディネーターの2つのロールがある。
Simple protocolは、参加者が2つに限られることと参加者のうちの1つがコーディネーターを担う。一方、Two-phase commitは参加者に制約はなく、参加者ではないコーディネーターを利用することも可能である。しかし、Simple protocolと比較するとフロー中のステップ数が多くなっており、完了までの時間が長くなる。これらの各方式の詳細については、[Two-phase commit protocol](#two-phase-commit-protocol), [Simple commit protocol](#simple-commit-protocol)で述べる。また、トランザクションの作成に関する詳細は[Cross-chain Transaction](./03-cross-chain-transaction.md)で述べる。

## Two-phase commit protocol

[Two-phase commit(2PC)](https://en.wikipedia.org/wiki/Two-phase_commit_protocol)は、Commit要求とCommitの2 phaseのフローをCoordinatorと参加者の間で実行するコミットプロトコルである。

プロトコルは下図のようなフローとなる。XはCoordinator, A, B, Cは各Participant, 矢印はフローの各ステップのリクエストの向きを示している。

![Two-phase commitのフロー](https://paper-attachments.dropbox.com/s_FFE17AA1F4B82D88109B81BA32CA19757CCAC2E7BBE2D24C9CAD3FFEE992E8B9_1581565269084_Screenshot+from+2020-02-13+12-40-55.png)

1. Initiate step
    - Initiator chainに`MsgInitiateTx`が提出され、バリデーション・認証が行われる。注記: この処理はコミットプロトコル共通である。
    - 認証完了後、Initiator chainはCoordinatorとして`MsgInitiateTx`に指定された各Participant chainsに`Prepare`を要求するPacketである`PacketPrepare`を送信する

2. Prepare step
    - 各Participant chainsは、`PacketPrepare`を受け取ると、`ResolvedContractTransaction`で指定されるContract関数を実行する。
    - 実行に成功した場合、State storeに対しての変更の保存と並行するトランザクションとの競合を防ぐためのロックを取得する。この操作は[State store](./05-state-store.md)により提供される。最後に、`PacketPrepareAcknowledgement`の`Status`に成功を示す`PREPARE_RESULT_OK`をセットしてCoordinatorに送信する
    - 実行に失敗した場合、State storeに対しての変更操作を破棄して、`PacketPrepareAcknowledgement` の`Status`に失敗を示す`PREPARE_RESULT_FAILED`をセットしてCoordinatorに送信する。

3. Confirm step
    - Coordinator chainは、各Participant chainが送信した`PacketPrepareAcknowledgement`を受け取ると、次のような状態遷移をおこなう。

        (1) 次のAcknowlegementの受信待ち

        (2) 受信したAcknowlegementの`Status`が`PREPARE_RESULT_OK`かつ未受信の`PacketPrepareAcknowledgement`がある場合、(1)に遷移する。すべて受信した場合、各Participant chainにCommit要求をするために`PacketCommit`の`Status`に`COMMIT`をセットして送信し、Commit stepに進む

        (3) 受信したAcknowlegementの`Status`が`PREPARE_RESULT_FAILED`の場合、各Participant chainにAbort要求をするために`PacketCommit`の`Status`に`ABORT`をセットして送信し、Commit stepに進む

4. Commit step
    - 各Participant chainsは、Commit要求があった場合(`PacketCommit`の`Status`が`COMMIT`)、Prepare stepで保存していた変更操作をState storeに適用し、ロックを削除してCoordinator chainに完了済みを示す`PacketCommitAcknowledgement`を送信する
    - 各Participant chainsは、Abort要求があった場合(`PacketCommit`の`Status`が`ABORT`)、Prepare stepで保存していた変更操作とロックを削除してCoordinator chainに完了済みを示す`PacketCommitAcknowledgement`を送信する

## Simple commit protocol

Simple commit protocolは、2者間でのAtomic Commit時に非Coordinator側の参加者がロックを避けることができるCommit Protocolである。そのためSimple commit protocolでは、Initiator chainはCoordinatorとParticipantのロールを兼ねる。

![Simple commit flow](https://paper-attachments.dropbox.com/s_BF6A6C558FB10E2A2F4E74E9F7B342EF6228422735BC5F474C1D1BF9C0273659_1597826874435_Screenshot+from+2020-08-19+17-47-27.png)

1. Initiate step
    - Initiator chainに`MsgInitiateTx`が提出され、バリデーション・認証が行われる。注記: この処理はコミットプロトコル共通である。

2. Prepare step(A)
    - Aは`MsgInitiateTx`で指定された`ContractTransaction`を実行する。
    - 実行に成功した場合、State storeに対しての変更の保存と並行するトランザクションとの競合を防ぐためのロックを取得する。その後、BのContract関数の呼び出し情報を含む、Packet `PacketDataCall`を作成しBとのChannelに送信する。
    - 実行に失敗した場合、このTransactionの処理をAbortして終了する。

3. Commit step(B)
    - Bは`PacketDataCall`を受け取り、指定されたContract関数を実行する。
    - 実行に成功した場合、Commitを行う。その後、`PacketCallAcknowledgement`に`Status`として`COMMIT_OK`をセットして、AとのChannelに送信する。
    - 実行に失敗した場合、Abortを行う。その後、`PacketCallAcknowledgement`に`Status`として`COMMIT_FAILED`をセットして、AとのChannelに送信する。

4. Commit step(A)
    - Aは`PacketCallAcknowledgement`を受け取り、その`Status`を確認する。
    - `Status`が`COMMIT_OK`の場合、AはPrepare時に保存していたState storeの変更操作をコミットし、ロックを削除する。
    - `Status`が`COMMIT_FAILED`の場合、AはPrepare時に保存していたState storeの変更操作を破棄し、ロックを削除する。
