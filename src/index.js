import { ref, computed, readonly } from "vue"
import LoginClient from "gbv-login-client"

const _connected = ref(false)
export const connected = readonly(_connected)
const _user = ref(null)
export const user = readonly(_user)
export const loggedIn = computed(() => user.value !== null)

const _client = ref(null)
export const client = readonly(_client)

const _providers = ref([])
export const providers = readonly(_providers)

const _about = ref(null)
export const about = readonly(_about)

const _token = ref(null)
export const token = readonly(_token)
let tokenExpiredTimeoutID

export const events = LoginClient.events
export const errors = LoginClient.errors
export function setName(name) {
  client.value && client.value.setName(name)
}

export function connect(url, options = {}) {
  _client.value && _client.value.connected && _client.value.disconnect()
  _client.value = new LoginClient(url, options)
  _client.value.connect()
  // Add event listeners
  _client.value.addEventListener(null, event => {
    switch (event.type) {
      case events.connect:
        _connected.value = true
        break
      case events.disconnect:
        _connected.value = false
        break
      case events.login:
        _user.value = event.user
        break
      case events.logout:
        _user.value = null
        _token.value = null
        break
      case events.update:
        _user.value = event.user
        break
      case events.providers:
        _providers.value = event.providers
        break
      case events.about:
        _about.value = event
        break
      case events.token:
        _token.value = event.token
        clearTimeout(tokenExpiredTimeoutID)
        tokenExpiredTimeoutID = setTimeout(() => {
          _token.value = null
        }, event.expiresIn * 1000)
        break
    }
  })
}

const login = {
  connected,
  user,
  loggedIn,
  connect,
  client,
  providers,
  about,
  token,
  events,
  errors,
  setName,
}

import UserStatus from "./components/user-status"

export default {
  install: (app, { url, ...options } = {}) => {
    if (url) {
      connect(url, options)
    }
    app.provide("login", login)
    app.use(UserStatus)
  },
  ...login,
}
