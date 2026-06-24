import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://puthvang.dev',
  integrations: [tailwind()],
});
