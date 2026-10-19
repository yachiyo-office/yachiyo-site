import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yachiyo-osaka.com',
  integrations: [
    sitemap({
      // 未公開の国際業務セクションはサイトマップから除外（公開時にこの filter を外す）
      filter: (page) => !page.includes('/international/'),
    }),
  ],
  redirects: {
    '/construction-permit-basic': '/construction-permit/basic/',
    '/service/construction-permit': '/construction-permit/',
  },
});
