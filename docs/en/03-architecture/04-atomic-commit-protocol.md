---
sidebar_position: 4
id: atomic-commit-protocol
---

# Atomic commit protocol

Atomic commit protocol is a protocol that allows a set of multiple operations to be executed as a single operation. Typical examples include Two-phase commit and Three-phase commit. In our context, it refers to a protocol that allows multiple blockchain transactions to be executed as a single transaction.

Cross Framework currently supports two protocols, Simple commit protocol and Two-phase commit protocol, which can be specified when creating a transaction. In these protocols, there are two roles: the participants, or cohorts, who execute each process specified in the transaction and the coordinator who coordinates the participants to obtain a common decision.
Simple protocol is limited to two participants, and one of the participants is the coordinator. On the other hand, Two-phase commit protocol is not limited to participants and can use a coordinator who is not a participant. However, compared to Simple protocol, the number of steps in the flow is larger, and the completion time is longer. Details of each of these methods are described in [Two-phase commit protocol](#two-phase-commit-protocol) and [Simple commit protocol](#simple-commit-protocol). Also, details on transaction creation are described in [Cross-chain Transaction](. /03-architecture/03-cross-chain-transaction.md).

## Two-phase commit protocol

[Two-phase commit (2PC)](https://en.wikipedia.org/wiki/Two-phase_commit_protocol) is a commit protocol that executes a two-phase flow of commit request and commit between the coordinator and participants.

The protocol flow is shown in the figure below, where X is the coordinator, A, B, and C are the respective participants, and the arrows indicate the direction of the request for each step of the flow.

![Two-phase commit flow](https://paper-attachments.dropbox.com/s_FFE17AA1F4B82D88109B81BA32CA19757CCAC2E7BBE2D24C9CAD3FFEE992E8B9_1581565269084_Screenshot+from+2020-02-13+12-40-55.png)

1. Initiate step
    - `MsgInitiateTx` is submitted to the Initiator chain for validation and authentication. Note: This process is common to all commit protocols.
    - After authentication, the Initiator chain sends a `PacketPrepare`, a packet requesting `Prepare` to each participant chain specified in the `MsgInitiateTx` as coordinator.

2. Prepare step
    - Each Participant chain executes the contract function specified in `ResolvedContractTransaction` on receiving a `PacketPrepare`.
    - If the execution is successful, a lock is acquired to prevent conflicts between saving changes to the State store and concurrent transactions. This operation is available via [State store](./05-state-store.md). Finally, set the `Status` of the `PacketPrepareAcknowledgement` to `PREPARE_RESULT_OK` indicating success and send it to the coordinator
    - If the execution fails, the change operation on the State store is discarded, and the `Status` of `PacketPrepareAcknowledgement` is set to `PREPARE_RESULT_FAILED` indicating failure and sent to the coordinator.

3. Confirm step
    - The Coordinator chain receives the `PacketPrepareAcknowledgement` sent by each Participant chain and performs the following state transitions.

        (1) Wait for the next acknowledgement to be received

        (2) If the `Status` of the received acknowledgement is `PREPARE_RESULT_OK` and there is an unreceived `PacketPrepareAcknowledgement`, transit to (1). . If all acknowledgements are received, set `COMMIT` to `Status` of `PacketCommit` to send a commit request to each participant chain, and proceed to the commit step

        (3) If the `Status` of the received acknowledgement is `PREPARE_RESULT_FAILED`, set `ABORT` to the `Status` of the `PacketCommit` to request abort to each participant chain, send it, and proceed to the commit step

4. Commit step
    - When a commit request is received (`Status` of `PacketCommit` is `COMMIT`), each participant chain applies the change operation saved in the Prepare step to the State store, removes the lock, and sends a `PacketCommitAcknowledgement` to the coordinator chain indicating that it has been completed
    - When each participant chain receives an abort request (`Status` of `PacketCommit` is `ABORT`), it deletes the change operation and locks saved in the prepare step, and sends a `PacketCommitAcknowledgement` to the coordinator chain indicating that it has been completed.

## Simple commit protocol

Simple commit protocol is a commit protocol that allows non-coordinator participants to avoid locking during Atomic Commit between two parties. Therefore, in the Simple commit protocol, the Initiator chain also serves both the coordinator and participant roles.

![Simple commit flow](https://paper-attachments.dropbox.com/s_BF6A6C558FB10E2A2F4E74E9F7B342EF6228422735BC5F474C1D1BF9C0273659_1597826874435_Screenshot+from+2020-08-19+17-47-27.png)

1. Initiate step
    - `MsgInitiateTx` is submitted to the Initiator chain for validation and authentication. Note: This process is common to all commit protocols.

2. Prepare step(A)
    - Participant A executes the `ContractTransaction` specified in `MsgInitiateTx`.
    - If the execution is successful, a lock is acquired to save the changes to the state store and prevent conflicts with concurrent transactions. After that, it creates a packet `PacketDataCall` containing the information of participant B's contract function call, and sends it to the channel with B.
    - If the execution fails, the process of this transaction is terminated by abort.

3. Commit step(B)
    - B receives the `PacketDataCall` and executes the specified contract function.
    - If execution is successful, commit is performed. After that, set `Commit_OK` as `Status` in `PacketCallAcknowledgement` and send it to the channel with A.
    - If the execution fails, abort is performed. Then, set `COMMIT_FAILED` as `Status` in `PacketCallAcknowledgement` and send it to the channel with A.

4. Commit step(A)
    - A receives a `PacketCallAcknowledgement` and checks its `Status`.
    - If the `Status` is `COMMIT_OK`, A commits the state store change operation saved at Prepare and removes the lock.
    - If `Status` is `COMMIT_FAILED`, A discards the state store change operation saved at the prepare step and deletes the lock.
