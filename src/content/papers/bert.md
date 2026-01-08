---
title: "BERT: Pre-training of Deep Bidirectional Transformers"
authors: ["Devlin et al."]
conference: "NAACL 2019"
link: "https://arxiv.org/abs/1810.04805"
tags: ["NLP", "BERT"]
---

## Abstract

We introduce a new language representation model called **BERT**, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models (ELMo, GPT), BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.

## Key Innovation: Bidirectionality

Previous models were unidirectional.
- **GPT (OpenAI)**: Left-to-Right. It predicts the next word based on previous words.
- **ELMo**: Shallow concatenation of Left-to-Right and Right-to-Left.

BERT uses the **Masked Language Model (MLM)** objective.
It randomly masks 15% of the input tokens and trains the model to predict them based on context from *both* sides simultaneously.

```
Input:  the man went to the [MASK] to buy a [MASK] of milk
Target: store, gallon
```

## Setup

- **Encoder-only architecture**: Uses the Transformer encoder stack.
- **Next Sentence Prediction (NSP)**: Also trained to predict if sentence B follows sentence A, helping it understand relationships between sentences (useful for QA tasks).

## Impact

BERT smashed the leaderboards on 11 NLP tasks, including GLUE, SQuAD, and SWAG. Ideally, it marked the beginning of the "ImageNet moment" for NLP, where pre-trained models could be fine-tuned for specific tasks with minimal data.

> "BERT is the first fine-tuning based representation model that achieves state-of-the-art performance on a large suite of sentence-level and token-level tasks, outperforming many task-specific architectures."
