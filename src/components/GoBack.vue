<template>
  <span class="go-back">
    <button @click="$router.back()">go back</button>
  </span>
</template>
<style scoped>
.go-back button {
  cursor: pointer;
}
</style>