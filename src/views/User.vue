<template>
  <div>
    <h1>User card</h1>
    <h2>user ID: {{ userId }}</h2>
    <div v-if="isDynamicRoute">
      <hr />
      <button class="btn" @click="removeRoute">Remove Dynamic Route</button>
    </div>

    <hr />
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint
      corrupti impedit nisi at excepturi! Adipisci quidem ipsa enim quam aut,
      fuga minima at ipsum quibusdam reiciendis consectetur, id mollitia!
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isDynamicRoute() {
      return this.$route.name == "dynamic";
    },
  },
  methods: {
    removeRoute() {
      const result = this.$router.removeRoute("dynamic");
      this.$router.back();
    },
  },
};
</script>
