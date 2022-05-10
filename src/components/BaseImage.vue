<template>
  <img :src="`${imageUrl}images/${src}`" :alt="alt" />
</template>
<script>
export default {
  setup() {
    const imageUrl = import.meta.env.BASE_URL;

    return { imageUrl };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
};
</script>