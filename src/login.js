import { ref, computed, readonly, reactive } from "vue"
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

const _lastError = ref(null)
export const lastError = readonly(_lastError)

export const events = LoginClient.events
export const errors = LoginClient.errors
export function setName(name) {
  client.value && client.value.setName(name)
}

export function connect(url, options = {}) {
  _client.value && _client.value.disconnect()
  _client.value = new LoginClient(url, options)
  _client.value.connect()
  // Add event listeners
  _client.value.addEventListener(null, event => {
    closeWindow(event.type)
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
      case events.error:
        _lastError.value = event.error
        break
    }
  })
}

export function disconnect() {
  _client.value && _client.value.connected && _client.value.disconnect()
}

const windowManager = {
  window: null,
  eventType: null,
}

export function openBaseWindow() {
  if (!client.value) return
  const about = client.value._about
  const url = about && about.baseUrl
  if (url) {
    window.open(url)
  }
}

export function openLoginWindow({ id: providerId, redirect = false } = {}) {
  if (!client.value || !client.value.connected) return
  const about = client.value._about
  const provider = providers.value.find(({ id }) => providerId === id)
  const url = (provider && provider.loginURL) || (about && about.baseUrl + "login/")
  if (url) {
    if (redirect) {
      window.location.href = `${url}?redirect_uri=${encodeURIComponent(window.location.href)}`
    } else {
      windowManager.window = window.open(url)
      windowManager.eventType = events.login
    }
  }
}
export function openLogoutWindow({ redirect = false } = {}) {
  if (!client.value || !client.value.connected) return
  const about = client.value._about
  const url = (about && about.baseUrl + "logout/")
  if (url) {
    if (redirect) {
      window.location.href = `${url}?redirect_uri=${encodeURIComponent(window.location.href)}`
    } else {
      windowManager.window = window.open(url)
      windowManager.eventType = events.logout
    }
  }
}

function closeWindow(eventType) {
  if (windowManager.window && windowManager.eventType == eventType) {
    setTimeout(() => {
      windowManager.window && windowManager.window.close()
      windowManager.window = null
    }, 100)
  }
}

const login = {
  connected,
  user,
  loggedIn,
  connect,
  disconnect,
  client,
  providers,
  about,
  token,
  events,
  errors,
  setName,
  openLoginWindow,
  openLogoutWindow,
  openBaseWindow,
  lastError,
}

const loginExported = reactive(login)
loginExported.install = (app, { url, ...options } = {}) => {
  if (url) {
    connect(url, options)
  }
  app.provide("login", readonly(login))
  app.provide("login-refs", login)
}

export default loginExported
