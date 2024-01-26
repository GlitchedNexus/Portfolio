import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), react(), sitemap()]
});