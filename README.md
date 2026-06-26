# portfolio

![Deploy](https://img.shields.io/github/actions/workflow/status/Unalphabetical/portfolio/deploy.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=Deploy) ![GitHub last commit](https://img.shields.io/github/last-commit/Unalphabetical/portfolio?style=for-the-badge&logo=github) ![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Quick Start](#quick-start)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [License](#license)

## Description

My personal portfolio as a full-stack developer. Built with Astro and hosted at [puthvang.com](https://puthvang.com).

## Tech Stack

- **Astro** 5 - static site generation
- **Tailwind CSS** 3 + **DaisyUI** 4 - styling
- **JavaScript** - no TypeScript
- **Inter** - variable font
- **Node.js** 22+

## Features

- Light/dark theme toggle with localStorage
- Scroll animations via IntersectionObserver
- Responsive layout with sticky nav
- Accessible semantic HTML
- Auto-deployed via GitHub Actions

## Quick Start

```bash
git clone https://github.com/Unalphabetical/portfolio.git
cd portfolio
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build to dist/ |
| `npm run preview` | Preview production build |

## Project Structure

```
.
├── astro.config.mjs
├── tailwind.config.mjs
├── public/                  # images, .nojekyll
├── src/
│   ├── components/          # Contact, Footer, Header, Hero, Projects, Skills, ThemeToggle
│   ├── data/                # projects.js, socials.js
│   ├── layouts/             # BaseLayout.astro
│   ├── pages/               # index.astro
│   └── styles/              # global.css
└── .github/workflows/       # deploy.yml
```

## License

[GNU GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)
