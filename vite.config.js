import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    ssr: true,
    rollupOptions: {
      input: "tw-arima.js",
      output: {
        format: "commonjs",
      },
    },
  },
});
