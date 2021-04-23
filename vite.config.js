import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")
const pkg = require("./package.json")
const commit = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString().trim()
const branch = require("child_process")
  .execSync("git rev-parse --abbrev-ref HEAD")
  .toString().trim()

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
  define: {
    __PKG_VERSION__: `"${pkg.version}"`,
    __GIT_COMMIT__: `"${commit}"`,
    __GIT_BRANCH__: `"${branch}"`,
  },
})
