<template>
  <button
    @click="themeStore.toggle()"
    :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="theme-pill"
  >
    <span class="theme-pill__dot" :class="{ 'theme-pill__dot--dark': themeStore.isDark }" />
  </button>
</template>

<script setup>
import { useThemeStore } from '../stores/theme.js'
const themeStore = useThemeStore()
</script>

<style scoped>
.theme-pill {
  display: flex;
  align-items: center;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid var(--color-rule);
  background: transparent;
  cursor: pointer;
  padding: 3px;
  flex-shrink: 0;
  transition: border-color 200ms ease;
}
.theme-pill:hover {
  border-color: var(--color-accent);
}
.theme-pill__dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-text-primary);
  transform: translateX(0);
  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1), background 200ms ease;
}
.theme-pill__dot--dark {
  transform: translateX(18px);
}
</style>
