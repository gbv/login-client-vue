<template>
  <a>
    {{ login.user ? login.user.name : "login" }}
  </a>
</template>

<script>
import { defineComponent, inject, reactive } from "vue"

export default defineComponent({
  name: "UserStatus",
  setup() {
    const login = inject("login")
    return {
      login: reactive(login),
    }
  },
})
</script>
