import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["gbv-login-client"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "LoginClientVue",
    },
    rollupOptions: {
      external: ["vue", "gbv-login-client"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "gbv-login-client": "LoginClient",
        },
      },
    },
  },
})
