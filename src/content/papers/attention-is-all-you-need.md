---
title: "Attention Is All You Need"
authors: ["Vaswani et al."]
conference: "NIPS 2017"
link: "https://arxiv.org/abs/1706.03762"
tags: ["NLP", "Transformer"]
---

## Abstract

The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the **Transformer**, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.

## Key Contribution

This paper introduced the **Transformer** model, which replaced RNNs/LSTMs as the state-of-the-art for NLP tasks.

### The Problem with RNNs
Recurrent networks process data sequentially ($t, t+1, t+2...$). This means:
1.  **No Parallelization**: You can't compute step 100 before step 99. Training is slow.
2.  **Long-term Memory Loss**: Information from step 1 dilutes by step 1000, despite LSTM gates.

### The Solution: Self-Attention
The authors proposed a mechanism where every token in the sequence looks at *every other token* simultaneously to determine context.

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

## Impact

This paper is arguably the most impactful AI paper of the decade. It is the foundation for:
- **BERT** (Bidirectional Encoder Representations from Transformers)
- **GPT** (Generative Pre-trained Transformer) series
- **AlphaFold 2** (Protein Structure Prediction)

> "We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data."
