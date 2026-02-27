// @ts-check
import { Url } from "./src/constants/meta";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import critters from "@critters-rs/astro";
import normalize from "./plugins/normalize";

export default defineConfig({
  site: Url.BASE,
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    mdx(),
    critters({
      inlineFonts: false,
      preloadFonts: false,
      pruneSource: true,
    }),
  ],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [normalize],
  },
});
