import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        search: resolve(__dirname, "src/search/index.html"),
        platform: resolve(__dirname, "src/platform/index.html"),
        "wish-list": resolve(__dirname, "src/wish-list/index.html"),
        favorites: resolve(__dirname, "src/favorites/index.html"),
        genres: resolve(__dirname, "src/genre/index.html"),
        /* ANY OTHER ROUTE WILL BE WRITTEN HERE */
      },
    },
  },
});
