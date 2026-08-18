import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yachiyo-osaka.com',
  integrations: [sitemap()],
  redirects: {
    '/construction-permit-basic': '/construction-permit/basic/',
    '/service/construction-permit': '/construction-permit/',
  },
});
