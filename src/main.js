import { createApp } from "vue"
import App from "./App.vue"
import LoginClientVue from "."

createApp(App).use(LoginClientVue, { url: "localhost:3004", ssl: false }).mount("#app")
