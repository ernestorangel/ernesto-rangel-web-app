<template>
  <button
    class="theme-ctrl"
    @click="themeStore.toggle()"
    :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span class="theme-ctrl__icon">
      <Icon :icon="themeStore.isDark ? 'moon' : 'sun'" size="xs" />
    </span>
  </button>
</template>

<script setup>
import { useThemeStore } from '../stores/theme.js'
import Icon from './Icon.vue'
const themeStore = useThemeStore()
</script>

<style scoped>
.theme-ctrl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 1px solid var(--color-rule);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: border-color 180ms ease;
}
.theme-ctrl:hover {
  border-color: var(--color-accent);
}
.theme-ctrl__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: color 180ms ease;
}
.theme-ctrl:hover .theme-ctrl__icon {
  color: var(--color-text-primary);
}
</style>
