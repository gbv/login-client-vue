<template>
  <nav>
    <user-status
      style="float: right;" />
    <div style="clear: both;" />
  </nav>
  <main>
    <h1>
      login-client-vue
    </h1>
    <section>
      <p>
        <b>Connection:</b>
        <br>
        <input
          v-model="url"
          type="text"
          placeholder="Login Server URL (without protocol)">
        <br>
        <input
          id="sslCheckbox"
          v-model="ssl"
          type="checkbox">
        <label for="sslCheckbox">SSL</label>
        <br>
        <button @click="connect">
          Connect
        </button>
      </p>
      <p>
        <b>Status:</b>
        <br>
        Connected: {{ login.connected }}<br>
        Logged in: {{ login.loggedIn }}<br>
        User: {{ login.user && login.user.name }}<br>
        Token: {{ login.token ? "✅" : "❌" }}<br>
        <span v-if="login.loggedIn">
          <input
            v-model="name"
            type="text"
            placeholder="Name">
          <button @click="login.setName(name)">
            Set name
          </button><br>
          <button @click="login.openLogoutWindow()">
            Logout
          </button><br>
        </span>
        <span v-else>
          <button @click="login.openLoginWindow()">
            Login
          </button><br>
        </span>
        <span v-if="login.connected">
          <button @click="login.disconnect()">
            Disconnect
          </button>
        </span>
      </p>
    </section>
    <hr>
    <footer>
      login-client-vue version {{ version }} ({{ branch }} - {{ commit }})
    </footer>
  </main>
</template>

<script>
import { defineComponent, ref, inject, reactive, watch } from "vue"

const defaults = {
  url: import.meta.env.DEV ? "localhost:3004/" : "coli-conc.gbv.de/login/",
  ssl: import.meta.env.DEV ? false : true,
}

export default defineComponent({
  name: "App",
  setup() {
    // Get url and ssl from URL params
    const urlParams = new URLSearchParams(window.location.search)
    const url = ref(urlParams.get("server") || defaults.url)
    const ssl = ref(urlParams.has("ssl") ? urlParams.get("ssl") === "true" : defaults.ssl)
    const name = ref("")
    const login = reactive(inject("login"))
    login.connect(url.value, { ssl: ssl.value })
    watch(() => login.user, (user) => {
      name.value = (user && user.name) || ""
    })
    return {
      url,
      ssl,
      name,
      login,
      // eslint-disable-next-line no-undef
      version: __PKG_VERSION__,
      // eslint-disable-next-line no-undef
      commit: __GIT_COMMIT__,
      // eslint-disable-next-line no-undef
      branch: __GIT_BRANCH__,
      connect() {
        login.connect(url.value, { ssl: ssl.value })
        // Set URL params
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set("server", url.value)
        urlParams.set("ssl", ssl.value)
        window.history.replaceState({}, "", `${window.location.href.replace(window.location.search, "")}?${urlParams.toString()}`)
      },
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
