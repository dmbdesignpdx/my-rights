// @ts-check
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import astro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-better-tailwindcss";
import astroParser from "astro-eslint-parser";

export default defineConfig([
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".astro/",
      "coverage/",
      ".vercel/",
      ".netlify/",
      "src/components/ui/",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    extends: [
      tailwind.configs.recommended,
    ],
    settings: {
      "better-tailwindcss": {
        entryPoint: "./src/styles/global.css",
      },
    },
  },
  {
    files: ["**/*.astro"],
    extends: [
      tailwind.configs.recommended,
    ],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "./src/styles/global.css",
      },
    },
  },
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/quotes": [2, "double"],
      "@stylistic/semi": 2,
      "@stylistic/eol-last": 2,
      "@stylistic/comma-dangle": [2, "always-multiline"],
      "@stylistic/no-mixed-spaces-and-tabs": 2,
      "@stylistic/no-multi-spaces": 2,
      "@stylistic/no-multiple-empty-lines": 2,
      "@stylistic/no-tabs": 2,
      "@stylistic/no-trailing-spaces": 2,
      "@stylistic/no-whitespace-before-property": 2,
      "@stylistic/quote-props": [2, "consistent-as-needed"],
      "@stylistic/rest-spread-spacing": [2, "never"],
      "@stylistic/semi-spacing": 2,
      "@stylistic/semi-style": [2, "last"],
    },
  },
]);
