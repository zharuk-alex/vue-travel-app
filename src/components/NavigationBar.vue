<template>
  <nav id="nav">
    <base-link id="logo" to="/"> Travel App </base-link>
    <base-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </base-link>
    <base-link :to="{ name: 'protected' }"> Dashboard </base-link>
  </nav>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>