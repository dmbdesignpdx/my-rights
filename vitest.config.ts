import { getViteConfig } from "astro/config";
import { type InlineConfig } from "vitest/node";

const test = {
  setupFiles: ["./src/tests/_setup.ts"],
  environment: "node",
  alias: {
    "@": "/src",
  },
} satisfies InlineConfig;

const config: Parameters<typeof getViteConfig>[0] & { test: InlineConfig } = { test };

export default getViteConfig(config);
