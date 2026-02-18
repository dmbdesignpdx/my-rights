/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    setupFiles: ["./src/tests/_setup.ts"],
    environment: "happy-dom",
    alias: {
      "@": "/src",
    },
  },
});
