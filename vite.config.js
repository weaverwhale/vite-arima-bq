import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [
    ...VitePluginNode({
      appPath: "./main.ts",
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        format: "commonjs",
        manualChunks: {},
      },
    },
  },
});
