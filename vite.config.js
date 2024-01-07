import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/api-task/",
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "index.html"),
      },
    },
  },
});

// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "/form-task/",
// });
