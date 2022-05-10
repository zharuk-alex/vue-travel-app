<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        v-model="username"
        pattern="[A-Za-z0-9]+"
        type="text"
        name="username"
        id="username"
        class="input"
        required
      />
      <label for="password">Password</label>
      <input
        v-model="password"
        type="text"
        name="password"
        id="password"
        class="input"
        required
        style="-webkit-text-security: circle"
      />
      <button class="btn">login</button>
      <small style="color: red; margin-top: 20px">
        * type any login & password in input fields
      </small>
    </form>
  </div>
</template>
<script >
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const route = useRoute();
    const router = useRouter();

    const login = () => {
      window.USER = username.value;
      const redirectPath = route.query.redirect || { name: "protected" };
      router.push(redirectPath);
    };

    return { username, password, login };
  },
};
</script>