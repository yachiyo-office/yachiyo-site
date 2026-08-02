import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: 本番ドメイン決定後に差し替えてください（canonical / OGP / sitemap に使われます）
  site: 'https://example.com',
  integrations: [sitemap()],
});
