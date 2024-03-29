<template>
  <div class="user-status">
    <a
      href=""
      :class="{
        'user-status-disconnected': !login.connected,
      }"
      @click.prevent="login.connected && (login.loggedIn ? login.openBaseWindow() : login.openLoginWindow({ redirect }))">
      {{ login.loggedIn ? login.user.name : t("login") }}
      <span class="carret-down">&#9660;</span>
    </a>
    <div class="user-status-dropdown">
      <!-- Slot before -->
      <slot
        name="before"
        :connected="login.connected"
        :logged-in="login.loggedIn"
        :user="login.user" />
      <!-- login-client menu items -->
      <template v-if="!login.connected">
        <p>
          {{ t("error") }}:
          <template v-if="login.lastError instanceof login.errors.NoInternetConnectionError">
            {{ t("errorInternet") }}
          </template>
          <template v-else-if="login.lastError instanceof login.errors.ThirdPartyCookiesBlockedError">
            {{ t("errorCookies") }}
          </template>
          <template v-else-if="login.lastError instanceof login.errors.ServerConnectionError">
            {{ t("errorConnection") }}
          </template>
          <template v-else>
            {{ t("errorOther") }}
          </template>
        </p>
      </template>
      <template v-else-if="login.loggedIn">
        <p>
          {{ t("loggedIn") }} {{ login.user.name }}.
        </p>
        <hr>
        <ul>
          <li>
            <a
              href=""
              @click.prevent="login.openLogoutWindow()">
              {{ t("logout") }}
            </a>
          </li>
        </ul>
      </template>
      <template v-else>
        <p>
          {{ t("login") }} {{ t("via") }}
        </p>
        <ul>
          <li
            v-for="provider in login.providers"
            :key="provider.id">
            <a
              href=""
              @click.prevent="login.openLoginWindow({ id: provider.id, redirect })">
              <img
                v-if="provider.image"
                crossorigin=""
                :src="provider.image">
              {{ provider.name }}
            </a>
          </li>
        </ul>
      </template>
      <template v-if="login.client && login.client.about && login.client.about.baseUrl">
        <hr>
        <ul>
          <li style="overflow-wrap: break-word;">
            <a
              href=""
              @click.prevent="login.openBaseWindow()">
              {{ t("open") }}
              <small style="font-weight: normal;">
                <br>{{ t("at") }} {{ login.client.about.baseUrl }}
              </small>
            </a>
          </li>
        </ul>
      </template>
      <!-- Slot after -->
      <slot
        name="after"
        :connected="login.connected"
        :logged-in="login.loggedIn"
        :user="login.user" />
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, computed } from "vue"

// Localization
const locale = {
  en: {
    login: "Sign in",
    loggedIn: "Signed in as",
    logout: "Sign out",
    open: "Open Login Server",
    at: "at",
    via: "via",
    error: "Error",
    errorInternet: "Please check your internet connection.",
    errorCookies: "Third-party cookies are blocked in your browser which means that a connection to the server can't be established.",
    errorConnection: "There seems to be an issue with the server. Please try again later.",
    errorOther: "Unknown error. Please try again later.",
  },
  de: {
    login: "Einloggen",
    loggedIn: "Eingeloggt als",
    logout: "Ausloggen",
    open: "Öffne Login-Server",
    at: "auf",
    via: "via",
    error: "Fehler",
    errorInternet: "Bitte Internetverbindung prüfen.",
    errorCookies: "Konnte keine Verbindung zum Server herstellen, da Drittanbietercookies vom Browser blockiert sind.",
    errorConnection: "Es gibt einen Fehler mit dem Server. Bitte später noch einmal probieren.",
    errorOther: "Unbekannter Fehler. Bitte später noch einmal probieren.",
  },
}
// Determines current language from jskos.languagePreference and locale
import jskos from "jskos-tools"
const currentLanguage = computed(() => jskos.languagePreference.getLanguages().find(lang => locale[lang]) || "en")
const t = (prop) => locale[currentLanguage.value][prop]

export default defineComponent({
  name: "UserStatus",
  props: {
    redirect: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      login: inject("login"),
      t,
    }
  },
})
</script>

<style>
.user-status {
  position: relative;
  display: inline-block;
  font-size: 0.9em;
}
.user-status a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}
.user-status > a.user-status-disconnected {
  font-weight: normal;
  text-decoration: line-through;
  cursor: default;
}
.user-status > a, .user-status .user-status-dropdown li > a {
  display: block;
  padding: 5px 8px;
}
.user-status .carret-down {
  font-size: 0.7em;
}
.user-status img {
  height: 17px;
  margin-bottom: -3px;
}
.user-status .user-status-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  width: 200px;
  background: #fff;
  border: 1px solid #00000022;
  border-radius: 5px;
  padding: 5px 0;
  margin: 0;
  /* left: 0; */
  right: 0;
  text-align: left;
}
.user-status:hover .user-status-dropdown {
  display: block
}
.user-status .user-status-dropdown hr {
  border: none;
  border-top: 1px solid #00000022;
}
.user-status .user-status-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user-status .user-status-dropdown p {
  padding: 8px;
  margin: 0;
}
.user-status .user-status-dropdown ul li:hover {
  background: #f6f6f6
}
</style>
