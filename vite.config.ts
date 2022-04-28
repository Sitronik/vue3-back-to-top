import { fileURLToPath, URL } from "url";
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import path from 'path';

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'BackToTop'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        inlineDynamicImports: true, // <== here the entry
        globals: {
          vue: "Vue"
        }
      },
    }
  },
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
});
