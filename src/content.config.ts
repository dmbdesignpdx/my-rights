import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";


const content = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content" }),
});


export const collections = { content };
