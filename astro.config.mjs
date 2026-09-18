import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kit-mrt.github.io',
  base: '/lanelet2-website',
  devToolbar: { enabled: false },
});
