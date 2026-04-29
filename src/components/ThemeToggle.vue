<template>
  <button
    @click="themeStore.toggle()"
    :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="flex items-center justify-center w-10 h-10 rounded-full border border-theme-border-lg bg-theme-surface hover:bg-theme-surface-hover"
  >
    <span v-if="themeStore.isDark" class="text-slate-400">
      <Icon icon="sun" size="sm" />
    </span>
    <span v-else class="text-slate-500">
      <Icon icon="moon" size="sm" />
    </span>
  </button>
</template>

<script setup>
import { useThemeStore } from '../stores/theme.js'
import Icon from './Icon.vue'

const themeStore = useThemeStore()
</script>
