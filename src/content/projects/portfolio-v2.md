---
title: "Portfolio v2"
subtitle: "Web Development"
date: "Jan 2026"
description: "A high-performance personal portfolio built with Astro, Tailwind v4, and a custom neon cyberpunk aesthetic."
tags: ["Astro", "Tailwind", "Vercel"]
link: "/projects/portfolio-v2"
viewLink: "https://github.com/mkraman/portfolio"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
color: "gold"
isFeatured: true
---

## Overview

This portfolio represents a complete redesign of my personal brand, moving from a standard React SPA to a high-performance static site generated with **Astro**. The goal was to achieve perfect Lighthouse scores while maintaining a rich, interactive user experience with a "Cyberpunk/Neon" aesthetic.

![Code Screenshot](https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop)

## Tech Stack

- **Astro**: For zero-JS by default and islands architecture.
- **Tailwind CSS v4**: For utility-first styling and JIT compilation.
- **TypeScript**: For type safety across the entire codebase.
- **Vercel**: for edge deployment and CI/CD.

## Key Features

### 1. Circuit Board Background
I implemented a custom procedural generation algorithm to create the background circuit lines that connect nodes dynamically.

```javascript
// Simplified circuit generation logic
function generateCircuit(width, height) {
    const grid = createGrid(width, height);
    const start = getRandomPoint();
    // ... pathfinding A* algorithm
    return path;
}
```

### 2. View Transitions
Using Astro's View Transitions API, page navigations feel like a native app, with elements morphing between states.

## Performance

The switch to Astro resulted in a **95% reduction in main-thread blocking time** compared to the previous Next.js version.

| Metric | Previous (Next.js) | Current (Astro) |
| :--- | :--- | :--- |
| LCP | 1.2s | 0.8s |
| TTI | 2.5s | 0.4s |
| Bundle Size | 450kb | 42kb |

## Future Improvements

- Add a 3D interactive element using Three.js.
- Implement a CMS backend for easier blog posting.
