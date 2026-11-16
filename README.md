# Portfolio — Diêgo Canafistula

Static site built with [Astro](https://astro.build), in English (`/en/`) and Portuguese (`/pt/`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Writing

- **Blog post or note:** add a Markdown file to `src/content/writing/en/` or `src/content/writing/pt/`.
  Use the same file name in both folders for a translation pair. Frontmatter: `title`, `date`,
  optional `description`, `category: post | note` (notes are reviews of books, travel and culture)
  and `draft: true` to keep it unpublished.
- **Project:** add a Markdown file to `src/content/projects/<lang>/` (see the existing ones for the fields).
- **Home, About and Experience text:** `src/data/`.
- **Colours, type and components:** `src/styles/global.css`.

Pushing to `main` deploys to Cloudflare Pages (build command `npm run build`, output directory `dist`,
both set in the Cloudflare dashboard).
