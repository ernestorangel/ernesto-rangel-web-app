<template>
  <div class="h-full bg-theme-bg text-theme-text">
    <!-- <AppBar /> -->
    <Transition>
      <AppContent />
    </Transition>
    <!-- <AppFooter /> -->
    <ThemeToggle class="fixed top-6 right-6 z-50" />
  </div>
</template>

<script setup>
import AppBar from "./layouts/AppBar.vue";
import AppContent from "./layouts/AppContent.vue";
import AppFooter from "./layouts/AppFooter.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
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
</style>
