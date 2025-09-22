import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  integrations: [
    react(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  output: 'static',
  site: 'https://netherguard.com',
});
