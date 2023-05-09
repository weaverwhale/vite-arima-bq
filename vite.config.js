import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    ssr: true,
    rollupOptions: {
      input: "tw-arima.js",
      output: {
        format: "commonjs",
      },
    },
    lib: {
      entry: "tw-arima.js",
      name: "tw-arima",
      fileName: "tw-arima",
    },
  },
});
