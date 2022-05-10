<template>
  <div>
    <h1>Greetings, {{ username }}</h1>

    <router-link :to="{ name: 'invoices' }">
      <button class="btn">Invoces</button>
    </router-link>
    <span> | </span>
    <button class="btn" @click="logout">Logout</button>
    <span> | </span>
    <button class="btn" @click="triggerRouterError">
      Trigger Router Error
    </button>
    <span> | </span>
    <button class="btn" @click="addDynamicRoute">Add Dynamic Route</button>
  </div>
</template>

<script>
import { isNavigationFailure, NavigationFailureType } from "vue-router";

export default {
  data: () => ({
    username: window.USER,
  }),
  methods: {
    logout() {
      window.USER = null;
      this.$router.push({ name: "Home", hash: "#logout" });
    },
    async triggerRouterError() {
      const result = await this.$router.push("/protected");

      if (isNavigationFailure(result, NavigationFailureType.duplicated)) {
        // went wrong
        console.log(result.to);
        console.log(result.from);
      } else {
        // is well
      }
    },
    addDynamicRoute() {
      this.$router.addRoute({
        name: "dynamic",
        path: "/dynamic/:id",
        component: () => import("@/views/User.vue"),
        props: (route) => ({
          ...route.params,
          userId: parseInt(route.params.id),
        }),
      });

      this.$router.push({
        name: "dynamic",
        params: { id: Math.floor(Math.random() * 100) },
      });
    },
  },
};
</script>