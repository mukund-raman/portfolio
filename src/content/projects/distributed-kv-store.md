---
title: "Distributed KV Store"
subtitle: "Systems"
date: "Aug 2025"
description: "Fault-tolerant key-value store using Raft consensus algorithm."
tags: ["Go", "Distributed Systems"]
link: "/projects/distributed-kv-store"
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
color: "gold"
isFeatured: false
---

## What is it?

A distributed, sharded Key-Value store inspired by DynamoDB and Etcd. It is capable of handling node failures transparently and maintaining strict consistency guarantees using the **Raft Consensus Algorithm**.

## System Design

The system is composed of several components:

1.  **Gateway Service**: Routes client requests to the correct shard.
2.  **Shard Masters**: Maintain the mapping of keys to shards.
3.  **Data Nodes**: Store the actual data and replicate logs.

### Leader Election

One of the most complex parts of Raft is Leader Election. When a follower doesn't hear from a leader within a randomized timeout, it becomes a candidate.

```go
func (rf *Raft) ticker() {
    for !rf.killed() {
        // Check if we received a heartbeat
        if time.Since(rf.lastHeartbeat) > rf.electionTimeout {
            rf.startElection()
        }
        time.Sleep(10 * time.Millisecond)
    }
}
```

## Features

- **Sharding**: Consistent hashing ring for even data distribution.
- **Replication**: 3x replication factor for fault tolerance.
- **Strong Consistency**: Linearizability for all read/write operations.

## Challenges

Debugging distributed systems is notoriously difficult due to non-determinism. I built a discrete-event simulator to test network partitions, packet drops, and random node crashes to verify the correctness of the consensus logic.
