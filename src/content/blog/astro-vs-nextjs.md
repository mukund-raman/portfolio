---
title: "Astro vs Next.js: My Take"
subtitle: "Web Dev"
date: "Nov 28, 2024"
description: "Why I migrated my personal website from Next.js to Astro and never looked back."
tags: ["Astro", "Next.js", "React"]
link: "/blog/astro-vs-nextjs"
image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2000&auto=format&fit=crop&v=4"
color: "purple"
category: "Opinion"
---

For years, **Next.js** has been the undisputed king of React frameworks. It introduced Server-Side Rendering (SSR) and Static Site Generation (SSG) to the masses. However, for content-heavy sites like blogs and portfolios, it often ships more JavaScript than necessary.

Enter **Astro**.

![Astro Performance Graph](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop&v=2)

## The "Islands Architecture"

The killer feature of Astro is its **Islands Architecture**. In a traditional React SPA/Next.js app, the entire page is hydrated into an interactive React application. This is expensive (hydration cost).

Astro treats the page as static HTML by default. You can then *sprinkle* interactivity into specific "islands" of the page.

### Code Comparison

In Next.js, everything is a component potentially adding to the bundle.

```jsx
// Next.js (pages/index.js)
// This whole page (header, footer, content) typically gets hydrated
export default function Home() {
  return (
    <Layout>
      <HeavyComponent /> {/* Hydrated */}
      <StaticContent />  {/* Also part of React tree */}
    </Layout>
  )
}
```

In Astro, you explicitly opt-in:

```astro
---
// Astro (pages/index.astro)
import HeavyComponent from '../components/HeavyComponent.jsx';
---

<!-- 100% Static HTML -->
<Header />

<!-- Hydrated on load (standard) -->
<HeavyComponent client:load />

<!-- Hydrated only when visible in viewport! -->
<HeavyComponent client:visible />

<Footer />
```

## Performance Wins

After migrating this portfolio:

- **JS Bundle Size**: Reduced by **92%** (from 240kB to 19kB).
- **Time to Interactive (TTI)**: Dropped from 1.8s to 0.4s.
- **Lighthouse Score**: Consistently 100/100.

## When to use what?

| Feature | Astro | Next.js |
| :--- | :--- | :--- |
| **Content Sites (Blog, Portfolio)** | Best Choice 🏆 | Overkill |
| **Marketing Sites** | Excellent | Good |
| **Complex Dashboards (SaaS)** | Good (improving) | Best Choice 🏆 |
| **E-commerce** | Great (for storefronts) | Excellent |

## Conclusion

If you are building a dashboard behind a login, Next.js (or Remix) is still robust. But for almost everything else—marketing pages, documentation, blogs, portfolios—Astro is simply superior in performance and developer experience.
