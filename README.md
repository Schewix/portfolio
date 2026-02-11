# Ondřej Ševčík — Portfolio & Notes

Modern personal site built with Next.js App Router, TypeScript, Tailwind CSS, and MDX. Designed for Vercel deployment.

## Local development

```bash
npm install
npm run dev
```

The site runs on `http://localhost:3000`.

## Content workflow

### Projects
- Add a new file in `content/projects/` (MDX).
- Frontmatter fields: `title`, `slug`, `date`, `tags`, `summary`, `repoUrl?`, `liveUrl?`, `featured`.

### Notes
- Add a new file in `content/notes/` (MDX).
- Frontmatter fields: `title`, `slug`, `date`, `tags`, `summary`.

MDX files are parsed at build/runtime using `gray-matter` and rendered with
`next-mdx-remote` (App Router RSC).

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Set environment variables from `.env.example` as needed.
4. Deploy.

## Analytics

Optional analytics provider:
- `NEXT_PUBLIC_ANALYTICS=vercel` enables Vercel Analytics.
- `NEXT_PUBLIC_ANALYTICS=plausible` enables Plausible (requires `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`).
- Any other value disables analytics.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – lint
- `npm run typecheck` – type-check
