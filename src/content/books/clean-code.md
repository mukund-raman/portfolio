---
title: "Clean Code"
author: "Robert C. Martin"
cover: "https://m.media-amazon.com/images/I/51E2055ZGUL._SY445_SX342_.jpg"
rating: 5
dateRead: "2020-05-10"
tags: ["Software Engineering", "Best Practices"]
---

## Review

*Clean Code* is arguably the most influential book for software developers. "Uncle Bob" Martin presents a school of thought that prioritizes readability and maintainability above cleverness. While some examples (Java) feel dated, the principles are timeless.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

## Key Takeaways

1.  **Meaningful Names**: Variables should answer *why* they exist, *what* they do, and *how* they are used. `int d; // elapsed time in days` is bad. `int daysSinceModification` is good.
2.  **Functions**: Should do one thing, do it well, and do it only. If a function contains sections (e.g., declarations, initializations, logic), it's probably doing too much.
3.  **Comments**: The goal is to express yourself in code. Comments are often a failure to make the code clear enough. "Don't comment bad code—rewrite it."
4.  **Formatting**: Code is communication. Vertical openness between concepts and vertical density within concepts affect readability heavily.
5.  **Error Handling**: Create clean boundaries between application logic and error handling. Prefer exceptions to return codes.

## Personal Impact

Reading this book early in my career changed my mindset from "getting it to work" to "crafting it to last." I apply the **Boy Scout Rule** (Leave the campground cleaner than you found it) to every pull request I submit.
