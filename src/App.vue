<template>
  <div class="h-full bg-[#00141d] text-[#FAFAFA]">
    <AppBar />
    <Transition>
      <AppContent />
    </Transition>
    <AppFooter />
  </div>
</template>

<script setup>
import AppBar from "./layouts/AppBar.vue";
import AppContent from "./layouts/AppContent.vue";
import AppFooter from "./layouts/AppFooter.vue";
</script>

<style>
.v-enter-active {
  transition: opacity 1s ease;
}

.v-leave-from {
  transition: opacity 1s ease;
}

.v-enter-from {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
}

.legibility {
  text-rendering: optimizeLegibility;
}

.bg-img {
  /* background-image: url('./assets/images/bg-img.svg'); */
  background-color: #00141d;
}
</style>
