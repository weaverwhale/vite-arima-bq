import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: "tw-arima.js",
      output: {
        format: "commonjs",
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
      },
    },
  },
});
