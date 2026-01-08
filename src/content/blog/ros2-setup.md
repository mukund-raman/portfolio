---
title: "Getting Started with ROS 2"
subtitle: "Robotics"
date: "Oct 10, 2024"
description: "A comprehensive guide to setting up your first robot simulation with ROS 2 Humble."
tags: ["Robotics", "ROS 2", "Ubuntu"]
link: "/blog/ros2-setup"
image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
color: "purple"
category: "Guide"
---

The Robot Operating System (ROS) is the standard middleware for robotic software development. **ROS 2** is the modern version, redesigned from the ground up to support real-time systems, improved security, and production environments.

In this guide, we will set up **ROS 2 Humble Hawksbill** on Ubuntu 22.04 and run a simple simulation.

![Robot Simulation](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop&v=1)

## Prerequisites

- Ubuntu 22.04 LTS (Jammy Jellyfish)
- Basic terminal knowledge

## Installation

First, we need to ensure our locale supports UTF-8, which is critical for ROS 2.

```bash
locale  # check for UTF-8

sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

### Adding Repositories

```bash
sudo apt install software-properties-common
sudo add-apt-repository universe

sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### Install ROS 2 Base

We will install the `desktop` version which includes tools like RViz (visualization) and demos.

```bash
sudo apt update
sudo apt upgrade
sudo apt install ros-humble-desktop
```

## Running the Demo

Now for the fun part. Open two terminal windows. Source the setup script in both:

```bash
source /opt/ros/humble/setup.bash
```

In **Terminal 1** (The Talker):
```bash
ros2 run demo_nodes_cpp talker
```

In **Terminal 2** (The Listener):
```bash
ros2 run demo_nodes_py listener
```

You should see messages being published in T1 and received in T2!

## Key Concepts

- **Nodes**: Executables that perform computation.
- **Topics**: Named buses over which nodes exchange messages.
- **Services**: Request/response communication.
- **Actions**: Long-running goal-oriented tasks.

## Next Steps

Now that you have the environment running, try installing the `turtlesim` package to control a virtual turtle using your keyboard!
