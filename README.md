# login-client-vue
[![Test and build](https://github.com/gbv/login-client-vue/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/gbv/login-client-vue/actions/workflows/test-and-build.yml)
[![GitHub package version](https://img.shields.io/github/package-json/v/gbv/login-client-vue.svg?label=version)](https://github.com/gbv/login-client-vue)
[![NPM package name](https://img.shields.io/badge/npm-@stefandesu/vite--test--library-blue.svg)](https://www.npmjs.com/package/gbv-login-client-vue)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

> Vue 3 wrapper for [login-client](https://github.com/gbv/login-client).

**Note: Still in development!**

## Table of Contents <!-- omit in toc -->
- [Development](#development)
  - [Build](#build)
- [Using the library](#using-the-library)
  - [Node](#node)
  - [Browser](#browser)
- [Publish](#publish)
- [License](#license)

## Development
```bash
git clone https://github.com/gbv/login-client-vue.git
cd login-client-vue
npm install
npm run dev # for Vite dev server
```

The dev server should then be running on http://localhost:3000. However, check the console output to see the actual port since it will increment it if it's not available.

Ideally, you should have an instance of [Login Server](https://github.com/gbv/login-server) running on `localhost:3004`. The example served by the dev server will automatically use this instance.

### Build
All builds will used the destination folder `dist`. Note that the folder will be emptied before each build.

```bash
npm run build # for Vite library build
BUILD_MODE=app npm run build # for Vite app build
BUILD_MODE=app npm run build -- --base=/base/ # for Vite app build with different base
```

## Using the library

### Node

1\. Add the library to your Vue project:
```bash
npm install gbv-login-client-vue
```

2a. Add all components globally (in `src/main.js` for your project):
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import * as LoginClientVue from "gbv-login-client-vue"
app.use(LoginClientVue)

app.mount('#app')
```

2b. Add individual components globally (tree-shakable):
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { UserStatus, Login } from "gbv-login-client-vue"
app.use(UserStatus)
app.use(Login)

app.mount('#app')
```

2c. Add individual components where needed (e.g. in some SFC, tree-shakable):
```js
import { defineComponent } from "vue"
import { UserStatus } from "gbv-login-client-vue"

export default defineComponent({
  // ...
  components: {
    UserStatus,
  },
  // ...
})
```

3\. Use `inject` to get access to the Login plugin:
```js
import { defineComponent, inject, reactive } from "vue"

export default defineComponent({
  // ...
  setup() {
    // Option 1: Import the whole plugin with all properties
    const login = reactive(inject("login"))
    // Option 2: Deconstruct particular properties (will be readonly refs)
    const { connected, user } = inject("login")
    // ...
  },
})
```

### Browser
The library can be used in the browser, for example via jsDelivr.

[![](https://data.jsdelivr.com/v1/package/npm/gbv-login-client-vue/badge?style=rounded)](https://www.jsdelivr.com/package/npm/gbv-login-client-vue)

Fully working HTML example: TODO

## Publish
Please work on the `dev` branch during development (or better yet, develop in a feature branch and merge into `dev` when ready).

When a new release is ready (i.e. the features are finished, merged into `dev`, and all tests succeed), run the included release script (replace "patch" with "minor" or "major" if necessary):

```bash
npm run release:patch
```

This will:
- Check that we are on `dev`
- Run tests and build to make sure everything works
- Make sure `dev` is up-to-date
- Run `npm version patch` (or "minor"/"major")
- **Ask you to confirm the version**
- Push changes to `dev`
- Switch to `main`
- Merge changes from `dev`
- Push `main` with tags
- Switch back to `dev`

After running this, GitHub Actions will **automatically publish the new version to npm**. It will also create a new GitHub Release draft. Please **edit and publish the release draft manually**.

## License
MIT Copyright (c) 2021 Verbundzentrale des GBV (VZG)
