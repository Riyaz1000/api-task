import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/api-task/",
  build: {
    rollupOptions: {
      input: {
        input: "src/main.js",
      },
    },
  },
});

// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "/form-task/",
// });

// rollup.config.js
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     rollupOptions: {
//       input: 'src/main.js', // This is just an example, adjust it according to your project structure
//     },
//   },
// });
