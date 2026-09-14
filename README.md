# Jahnvi Sinha — Portfolio

A single-page personal portfolio built with React, Framer Motion, and hand-written CSS.
Dark, code-editor-inspired aesthetic, balanced between Full-Stack and AI/ML identity.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## Editing content

- **Projects** — edit `src/data/projects.js`. Each project has a `filter` (`"Full-Stack"` or
  `"Frontend"`) used by the Projects section's filter tabs, an `image` field you can point at a
  real screenshot later, and a `status` (`"live" | "private" | "dev"`) that drives the badge color.
- **Skills** — edit `src/data/skills.js`. Four fixed categories, matching the brief exactly.
- **Contact links** — edit the email/LinkedIn/GitHub placeholders directly in
  `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **Contact form** — currently client-side only (shows a success state on submit, no backend).
  Wire it up to a real endpoint (API route, Formspree, etc.) inside `Contact.jsx`'s `onSubmit`.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    WorkProcess.jsx
    AISection.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx   (shared section header used across the page)
  data/
    projects.js
    skills.js
  lib/
    scroll.js
  App.jsx
  main.jsx
  index.css
```
