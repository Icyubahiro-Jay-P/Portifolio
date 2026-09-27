# DJ Pro Jay Portfolio.

Yo, what's good? This is the README for https://djprojay.vercel.app/ my slick ass Dual Portal Portfolio built to flex hard.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

---

# Overview

A modern, dark-themed, high-performance portfolio for the two sides of me: the dev who's out here building shit that slaps, and the DJ who's quite loud at night. Clean UI, smooth animations, mobile-first.
It's not just a portfolio it's a whole vibe.

Deployed on Vercel because speed and reliability matter, fam.

---

# Features

- **Dual Portal Design**  
  Land on the Portal and pick your realm: Dev or DJ. Two fire modes, one site.

- **Fully Responsive**  
  Looks elite on phone, tablet, or desktop.

- **Smooth Animations & Interactions**  
  Because static pages are for squares.

- **Project Showcase**  
  My best work front and center with tech stacks and links (live + GitHub).

- **Mixes & Sets**  
  The DJ realm got the mixes, the sets and the Imigongo-inspired visuals. Rwanda on the decks.

- **Contact & Socials**  
  Easy ways to link up, with a contact form in each realm.

- **Custom 404**  
  Lost? This track is not in the crate, but the page sends you right back.

- **Performance Optimized**  
  Lighthouse in the high 90s. Lazy-loaded pages, inlined CSS, self-hosted fonts, WebP images, SEO-friendly, plus an `llms.txt` for the AI crawlers.

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- React Router

## Build

- Vite 8

## Styling

- Tailwind CSS v4
- shadcn/ui pieces
- Custom animations and self-hosted variable fonts (Orbitron, Figtree, Archivo, Big Shoulders Display, JetBrains Mono)

## Animation

- Motion (Framer Motion) for that buttery movement, loaded lazily so it never slows the first paint

## Deployment & Analytics

- Vercel
- Vercel Analytics & Speed Insights

---

# Pages

## Portal (`/`)

The landing page. Big intro with the name and two doors: Dev or DJ.

## Dev Realm (`/dev`)

Hero, About Me, Skills, Projects, FAQ and Contact. My story as a dev, no cap.

## DJ Realm (`/dj`)

Hero, About, Skills, Sets/Mixes, FAQ and Contact for bookings. Soot, bone and terracotta vibes.

## 404

Anything else lands here, with links back to the Portal and both realms.

---

# Getting Started

Wanna run it locally? Easy.

```bash
git clone https://github.com/Icyubahiro-Jay-P/portifolio.git
cd portifolio
npm install
npm run dev
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server                  |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint                            |

---

# Project Structure

```
public/            static files (images, robots.txt, sitemap.xml, llms.txt)
src/
  pages/           Portal, DevRealm, DjRealm, NotFound
  components/
    dev/           Dev realm sections
    dj/            DJ realm sections
    shared/        shared nav
    ui/            buttons, dock, spinner, toasts
  assets/icons/    custom social icons
  lib/             utils and lazy motion features
```

---

# Why This Portfolio Slaps

- Stands out in a sea of basic templates.
- Shows I can actually design and code.
- Fast, accessible, and professional with personality.

---

# Contributing

Spotted a bug, a typo or something that could load faster? PRs are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

# Security

Found a vulnerability? Don't open a public issue. Check [SECURITY.md](SECURITY.md) for how to report it privately.

# License

[MIT](LICENSE) © Icyubahiro-Jay-P

---

# Author

Built with passion by **DJ PRO JAY** ([@Icyubahiro-Jay-P](https://github.com/Icyubahiro-Jay-P))  
(that's me, your favorite Black dev out here).

---

# Live Demo

## 🔗 Website

https://djprojay.vercel.app/

---

# Connect

Hit me on the socials/links in the site. Let's build something legendary.
