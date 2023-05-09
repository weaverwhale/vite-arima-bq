import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import packageJson from "./package.json";

// https://stackoverflow.com/a/76176889
const dependencies = Object.keys({
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
});

const noExternal = process.env.NODE_ENV === "production" ? dependencies : [];

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
  ssr: {
    noExternal,
  },
});
