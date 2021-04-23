import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

let build
if (process.env.BUILD_MODE !== "app") {
  build = {
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
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["gbv-login-client"],
  },
  build,
})
