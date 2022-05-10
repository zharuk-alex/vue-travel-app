<template>
  <NavigationBar />
  <div class="container">
    <router-view name="LeftSidebar" class="view left-sidebar"></router-view>
    <router-view v-slot="{ Component }" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.params.id"></component>
      </transition>
    </router-view>
  </div>
</template>

<script >
import NavigationBar from "./components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
};
</script> 
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 100%;
}
</style>