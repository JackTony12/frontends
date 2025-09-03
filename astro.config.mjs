// @ts-check
import { defineConfig } from 'astro/config';
import icon  from 'astro-icon'
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
   },
  integrations: [icon(), react()]
});