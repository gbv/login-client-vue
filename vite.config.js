import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")
const pkg = require("./package.json")

// Get short Git commit hash
const commit = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString().trim()
// Get Git branch name
const branch = require("child_process")
  .execSync("git rev-parse --abbrev-ref HEAD")
  .toString().trim()

/**
 * Allow two different builds:
 * - `npm run build` builds the library
 * - `BUILD_MODE=app npm run build` builds the app (App.vue)
 *
 * Note that the destination folder `dist` will be emptied before each build.
 */
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
  // These values can be used anywhere and will be replaced by Vite with the respective values:
  define: {
    __PKG_VERSION__: `"${pkg.version}"`,
    __GIT_COMMIT__: `"${commit}"`,
    __GIT_BRANCH__: `"${branch}"`,
  },
})
