<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <BaseImage :src="destination.image" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section id="top-experiences" class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            hash: '#top-experiences',
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script >
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    ExperienceCard,
    GoBack,
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id == this.id
      );
    },
    experiances() {
      return this.destination.experiances;
    },
  },
  methods: {},
};
</script>

<style>
</style>