import UserStatus from "./UserStatus.vue"

UserStatus.install = (vue) => {
  vue.component(UserStatus.name, UserStatus)
}

export default UserStatus
