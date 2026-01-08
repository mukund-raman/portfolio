---
title: "EcoSense"
subtitle: "IoT & ML"
date: "Nov 2025"
description: "Smart agriculture system using ESP32 sensors and TFlite for disease detection in crops."
tags: ["C++", "Python", "TensorFlow Lite"]
link: "/projects/ecosense"
image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop"
color: "gold"
isFeatured: true
---

## Project Overview

**EcoSense** is an IoT solution designed to help small-scale farmers monitor crop health and environmental conditions in real-time. By deploying a network of low-power ESP32 microcontrollers, the system collects data on soil moisture, temperature, and humidity, while a local camera module checks for early signs of leaf disease.

![IoT Setup](https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop)

## Architecture

The system consists of three main layers:

1.  **Edge Layer**: ESP32 + ESP32-CAM running TensorFlow Lite models.
2.  **Connectivity Layer**: MQTT protocol over WiFi/LoRaWAN.
3.  **Cloud Layer**: AWS IoT Core + Lambda for data processing.

## Machine Learning on the Edge

Running ML on a microcontroller with 520KB RAM was a significant challenge. I used **quantization** to reduce the model size.

```cpp
// Loading the quantized model on ESP32
#include "model_quantized.h"

void setup() {
    tflite::MicroErrorReporter micro_error_reporter;
    model = tflite::GetModel(g_model_quantized_data);
    
    // Define tensor arena
    constexpr int kTensorArenaSize = 60 * 1024;
    static uint8_t tensor_arena[kTensorArenaSize];
}
```

## Results

- **92% accuracy** in detecting Tomato Blight.
- **30% reduction** in water usage through smart irrigation triggers.
- Battery life extended to **6 months** using deep sleep cycles.
