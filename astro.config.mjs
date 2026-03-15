// @ts-check
import { Url } from "./src/constants/meta";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import critters from "@critters-rs/astro";
import normalize from "./plugins/normalize";
import netlify from "@astrojs/netlify";
import process from "node:process";
import purgecss from "astro-purgecss";


const prod = process.env.NODE_ENV === "production";


export default defineConfig({
  site: Url.BASE,
  vite: {
    // @ts-expect-error - Astro 6 type missmatch
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "never",
  },
  integrations: [
    react(),
    mdx(),
    critters({
      inlineFonts: false,
      preloadFonts: false,
      pruneSource: true,
    }),
    purgecss({
      variables: true,
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ["html"],
        },
      ],
    }),
  ],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [normalize],
    syntaxHighlight: "prism",
  },
  adapter: prod ? netlify() : undefined,
});
