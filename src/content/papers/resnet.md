---
title: "Deep Residual Learning for Image Recognition"
authors: ["He et al."]
conference: "CVPR 2016"
link: "https://arxiv.org/abs/1512.03385"
tags: ["CV", "ResNet"]
---

## Abstract

Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.

## The Problem: Degradation

Common wisdom held that deeper networks extract better features. However, empirically, as network depth increased, accuracy got saturated and then degraded rapidly. This wasn't just overfitting; training error increased too.

## The Solution: Residual Blocks

Instead of trying to learn the underlying mapping $H(x)$, He et al. proposed to fit a residual mapping $F(x) := H(x) - x$.

Thus, the original mapping becomes $F(x) + x$.

![Residual Block](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*D0F3UitQ2l5Q0AkmWzxMQg.png)

This **Skip Connection** allows gradients to flow through the network without vanishing, enabling the training of networks with 100+ layers.

## Results

- Won ILSVRC 2015 classification task.
- ResNet-152 (152 layers) achieved 3.57% top-5 error on ImageNet.
- Theoretically proved that it's easier to optimize the residual mapping than the original, unreferenced mapping.

> "Our extremely deep residual nets are easy to optimize, but the counterpart 'plain' nets (that simply stack layers) exhibit higher training error when the depth increases."
