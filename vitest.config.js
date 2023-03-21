import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
});
