import Login from "./login"
import UserStatus from "./components/user-status"

function install(app, options) {
  app.use(Login, options)
  app.use(UserStatus)
}

export {
  install,
  Login,
  UserStatus,
}
