---
title: "The Pragmatic Programmer"
author: "Andrew Hunt & David Thomas"
cover: "https://m.media-amazon.com/images/I/71f743sOPoL._AC_UF1000,1000_QL80_.jpg"
rating: 5
dateRead: "2019-11-05"
tags: ["Software Engineering", "Career"]
---

## Review

While *Clean Code* focuses on the code, *The Pragmatic Programmer* focuses on the coder. It's a collection of tips and warnings that guide you towards becoming a simpler, more effective developer.

## Key Philosophies

### 1. DRY (Don't Repeat Yourself)
Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. This applies to code, documentation, and build scripts.

### 2. Orthogonality
Unrelated things should not affect each other. If I change the database schema, the UI rendering logic shouldn't break. Decoupled code is easier to test and modify.

### 3. Tracer Bullets
When exploring a new technology or architecture, build a thin slice of the application that works end-to-end (UI -> Logic -> DB). This validates the architecture early, unlike "prototypes" which are often thrown away.

### 4. Broken Windows
Fix bad designs, wrong decisions, and poor code when you see them. Ignoring them implies that no one cares, which accelerates rot.

## Quote

> "You can’t write perfect software. Did that hurt? It shouldn’t. Accept it as an axiom of life. Embrace it. Celebrate it. Because perfect software doesn’t exist."
