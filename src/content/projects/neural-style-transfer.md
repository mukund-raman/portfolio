---
title: "Neural Style Transfer"
subtitle: "Computer Vision"
date: "Oct 2025"
description: "Implementation of artistic style transfer using VGG19 network."
tags: ["PyTorch", "Deep Learning"]
link: "/projects/neural-style-transfer"
image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=400&fit=crop"
color: "gold"
isFeatured: false
---

## Introduction

This project reproduces the results from the famous paper *A Neural Algorithm of Artistic Style* (Gatys et al.). By defining a content loss and a style loss, we can iteratively update a noise image to match the content of one photo and the artistic style of another.

![Artistic Style Transfer](https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000&auto=format&fit=crop)

## Loss Functions

The magic happens in how we define "style". The style representation is computed using the **Gram Matrix** of the feature maps from intermediate layers of a VGG-19 network.

### The Gram Matrix

$$
G_{ij}^l = \sum_k F_{ik}^l F_{jk}^l
$$

Where $F$ represents the feature map.

```python
def gram_matrix(input):
    a, b, c, d = input.size() 
    # a=batch size(=1)
    # b=number of feature maps
    # (c,d)=dimensions of a f. map (N=c*d)

    features = input.view(a * b, c * d)
    G = torch.mm(features, features.t())

    return G.div(a * b * c * d)
```

## Implementation Details

- **Framework**: PyTorch
- **Model**: Pre-trained VGG-19 (features only)
- **Optimizer**: L-BFGS (converges faster than Adam for this specific task)

## Gallery

I experimented with various style images, including *Starry Night* (Van Gogh) and *The Great Wave off Kanagawa*. The results show how the network captures textures—swirls, brush strokes, and geometric patterns—and applies them to photographs.
