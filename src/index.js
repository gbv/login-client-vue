import Login from "./login.js"
import UserStatus from "./components/user-status/index.js"

function install(app, options) {
  app.use(Login, options)
  app.use(UserStatus)
}

export {
  install,
  Login,
  UserStatus,
}
