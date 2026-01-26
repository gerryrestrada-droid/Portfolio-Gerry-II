# My Portfolio (React + Vite)

Minimal React portfolio scaffolded for quick deployment.

## Quick start

Install dependencies then run dev server:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Email integration (contact form)

This project includes a small Node email server that accepts POST requests from the contact form and sends messages via SMTP.

1. Copy `.env.example` to `.env` and fill your SMTP credentials and `TO_EMAIL` recipient. You can use your work email `gerryr.estrada@urios.edu.ph` or personal `twodyestrada@gmail.com`.

2. Install dependencies and run the server:

```bash
npm install
npm run start:server
```

3. In another terminal run the frontend dev server:

```bash
npm run dev
```

4. Open http://localhost:5173 and submit the contact form. The server listens on port 4000 by default.

If you deploy, make sure to provide the same environment variables to your host (SMTP credentials and `TO_EMAIL`).

## Git & Deploy

1. Initialize git and push to a GitHub repo named `my-portfolio` (or your preferred name):

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/your-username/my-portfolio.git
git push -u origin main
```

2. On Vercel: import the GitHub repo and deploy (Vite/React auto-detected). Every push to `main` will trigger a redeploy.

## Files of interest

- `src/App.jsx` — Homepage content (Hero, Featured Projects, Currently Learning)
- `src/styles.css` — Simple styling

Replace placeholder content and project links with your real projects.
