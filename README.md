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
- [Usage](#usage)
  - [Adding it to your project](#adding-it-to-your-project)
  - [Login Plugin](#login-plugin)
  - [UserStatus Component](#userstatus-component)
  - [Fully working HTML example](#fully-working-html-example)
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

## Usage

### Adding it to your project
The library can be used in the browser, for example via jsDelivr: [![](https://data.jsdelivr.com/v1/package/npm/gbv-login-client-vue/badge?style=rounded)](https://www.jsdelivr.com/package/npm/gbv-login-client-vue) Note that it requires Vue 3 and login-client to be included as well. Please refer to the full HTML example [below](#fully-working-html-example).

If you are using it via Node (the preferred method), first install it via npm:

```bash
npm install gbv-login-client-vue
```

This library consists of two parts:
1. [Login plugin](#login-plugin)
2. [UserStatus component](#userstatus-component)

You can add one or both of these globally in `src/main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Add both
import * as LoginClientVue from "gbv-login-client-vue"
app.use(LoginClientVue)

// Alternative: Add individually
import { Login, UserStatus } from "gbv-login-client-vue"
app.use(Login)
app.use(UserStatus)

app.mount('#app')
```

### Login Plugin
[Source](https://github.com/gbv/login-client-vue/blob/main/src/login.js)

The `Login` plugin provides an object to interact with a Login Server instance as well as some properties for the current status of the connection. All properties in the exported object are either reactive, read-only Vue variables or methods to interact with the server.

There are two ways to access this object:
1. Add it globally (see above) and then use `inject` to access it:
    ```js
    import { defineComponent, inject, reactive } from "vue"

    export default defineComponent({
      // ...
      setup() {
        // Option 1: Import the whole plugin with all properties
        const login = reactive(inject("login"))
        // Option 2: Deconstruct particular properties (will be read-only refs)
        const { connected, user } = inject("login")
        // ...
      },
    })
    ```
2. Import it directly in the component:
    ```js
    import { defineComponent, reactive } from "vue"
    import { Login } from "gbv-login-client-vue"

    export default defineComponent({
      // ...
      setup() {
        // Option 1: Import the whole plugin with all properties
        const login = reactive(Login)
        // Option 2: Deconstruct particular properties (will be read-only refs)
        const { connected, user } = login
        // ...
      },
    })
    ```

Note that if you are not including individual properties, wrapping the object in `reactive` is recommended because you will be able to access the properties directly, both in the code and in the template.

The following properties are provided:
- `connected` - boolean whether the login server is connected
- `loggedIn` - boolean whether the user is logged in
- `user` - user object if logged in (`null` otherwise)
- `providers` - a list of providers available at the Login Server
- `about` - object with information about the Login Server
- `token` - the latest JWT that can be used to authenticate requests
- `errors` - a list of error types
  - `errors.NoInternetConnectionError`
  - `errors.ThirdPartyCookiesBlockedError`
  - `errors.ServerConnectionError`
- `lastError` - an error object of the last error (`null` if there has been no error)
- `events` - a list of possible events (usually not needed)
- `client` - direct access to the [login-client](https://github.com/gbv/login-client) instance (usually not needed)
- `connect(url, options)` - connect to a Login Server; for options, refer to the [login-client documentation](https://github.com/gbv/login-client) (LoginClient constructor)
- `disconnect()` - disconnects from the Login Server; usually not needed since `connect` will first disconnect before establishing the new connection
- `setName(name)` - updates the user's name at the Login Server
- `openBaseWindow()` - opens the Login Server's base page in a new window
- `openLoginWindow({ id: providerId, redirect = false } = {})` - opens the Login Server's login window, optionally for a certain provider ID and/or as a redirect in the same window
- `openLogoutWindow({ redirect = false } = {})` opens the Login Server's logout window, optionally with a redirect in the same window

It is recommended to establish the connection (via `connect()`) either in `main.js` or `App.vue`. If your application works with a single fixed Login Server instance, it should be sufficient to connect once since it will automatically reconnect if necessary.

Example:
```js
import { Login } from "gbv-login-client-vue"
Login.connect("localhost:3004", { ssl: false })
```

For a more extensive example, you can also refer to [this project's App.vue](https://github.com/gbv/login-client-vue/blob/main/src/App.vue).

### UserStatus Component
[Source](https://github.com/gbv/login-client-vue/blob/main/src/components/user-status/UserStatus.vue)

The `UserStatus` component provides a simple way of adding a login button to an application. It offers a sign in, either in a separate window or in the same window with a redirect back to the application, as well as some status information in a dropdown.

It requires the [Login plugin](#login-plugin) and depends on a successful connection (which can either be initiated in `main.js` or your `App.vue`, see above). If the connection is not successful, it will show an error in the dropdown.

There is only property `redirect` which is a boolean:
- `false` (default) opens a new window for the user to sign in/out, which is closed automatically as soon as the action is completed.
- `true` will redirect the current page to the Login Server instance and add the current URL to the `redirect_uri` parameter so that, after a successful login, the user is redirected back to your application.

If you don't want to add the component globally, you can include it individually where needed:

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

### Fully working HTML example
TODO

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
