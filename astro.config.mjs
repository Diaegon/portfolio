import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are only needed when the site is served from
// somewhere other than the custom domain root (e.g. a sub-path).
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.diegocanafs.com.br',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'vesper' },
  },
});
