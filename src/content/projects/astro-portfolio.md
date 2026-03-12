---
title: "Astro Portfolio"
description: "A personal portfolio and blog built using Astro, Tailwind CSS v4, and minimal JavaScript for lightning-fast performance."
tags: ["Astro", "TailwindCSS", "TypeScript"]
image: "/thumbnails/portfolio.png"
githubUrl: "https://github.com/jonsensa/jonash-portfolio"
liveUrl: "https://jonash-portfolio.vercel.app"
---

## Building a Next-Generation Portfolio

I had avoided building my portfolio for so long that the universe starting giving me signs to do so. I finally decided to build it with **Astro**. I wanted something that was insanely fast, customizable and genuinely fun. 

By pushing almost zero JavaScript to the client (Island Architecture), the initial loads are snappy, leading to perfect Lighthouse scores immediately out of the box.

### The Stack I used
- **Framework:** Astro 
- **Styling:** Tailwind CSS V4
- **Deployment:** Vercel

### Glassmorphism Theme
I iterated multiple times over the design. First starting with a minimal layout, I quickly reframed the entire site using an expansive "Cosmic Midnight" glassmorphism aesthetic. By feeding dynamic CSS `blur`s and `backdrop-blur`s atop shifting abstract gradients, the entire interface behaves like a floating frosted-glass layer over a neon void. 

### Content Collections
I am using Zod schema verifications under the hood. All projects, blog posts, and artwork grids are purely data-driven. Writing a new blog or new project like this one is as simple as opening a new `.md` file in my editor!
