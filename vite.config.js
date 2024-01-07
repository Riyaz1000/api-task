import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "Riyaz1000/api-task",
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "index.html"),
      },
    },
  },
});
