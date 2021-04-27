import { createApp } from "vue"
import App from "./App.vue"
// import * as LoginClientVue from "."
// createApp(App).use(LoginClientVue).mount("#app")
import { Login, UserStatus } from "."
createApp(App).use(Login).use(UserStatus).mount("#app")
