import { defineConfig } from "vite";

export default defineConfig({
  base: "./",

  server: {
    port: 5000,
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [],
      },
    },
  },
});
