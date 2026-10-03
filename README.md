# Rakha Dhifiargo — Developer Portfolio

**[View the live app](https://rakha-portfolio-azure.vercel.app)**

A personal portfolio built with React and Vite, featuring a clean light design, subtle motion, and actual screenshots of projects across Web3, AI, and software development.

## Features

- Responsive desktop and mobile layouts.
- Animated mathematical network with pause/resume and reduced-motion support.
- Ten projects with contribution details and verified demo/repository links where available.
- Actual application previews for Evergreen, AgentPay, APEX, and FedLang, plus published repository screenshots for other projects.
- Experience, education, technical skills, achievements, and contact links.

Preview sources and project attribution are documented in [PROJECT-SOURCES.md](PROJECT-SOURCES.md). Blockchain demos are labeled Testnet, and local prototypes are identified as such.

## Run locally

Requires Node.js 24.x.

```bash
npm ci
npm run dev
```

Open [localhost:5173](http://127.0.0.1:5173/).

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Vercel

The live application is hosted at **https://rakha-portfolio-azure.vercel.app**.

`vercel.json` selects the Vite framework, runs `npm run build`, and publishes `dist/`. No application environment variables or backend services are required.

```bash
npx vercel login
npx vercel --prod
```

Local credentials, Vercel project metadata, dependencies, and build output are excluded from Git. `.vercelignore` also controls which local files are uploaded for deployment.

## Project structure

| File | Purpose |
| --- | --- |
| `src/data.js` | Profile, projects, previews, links, skills, and experience |
| `src/App.jsx` | Page sections and project dialogs |
| `src/ProjectPreview.jsx` | Project screenshots |
| `src/styles.css` | Layout, typography, and responsive styles |
| `src/Constellation.jsx` | Animated hero network |
| `src/motion.js` | Shared animation settings |
| `public/projects/` | Original project preview assets |
| `PROJECT-SOURCES.md` | Preview provenance and project sources |

Built with React, Vite, Motion, Lucide, and locally hosted Manrope/Space Grotesk fonts.
