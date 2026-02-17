// @ts-check
import { Url } from "./src/constants/meta";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import playformInline from "@playform/inline";


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
    playformInline(),
  ],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
