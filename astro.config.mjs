import { defineConfig } from 'astro/config';

// On GitHub Pages the workflow passes SITE_URL / BASE_PATH from
// actions/configure-pages, so the build works on both the custom
// domain and the default <user>.github.io/<repo> address.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.diegocanafs.com.br',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'vesper' },
  },
});
