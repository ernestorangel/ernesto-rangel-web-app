import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const STORAGE_KEY = 'ernesto-rangel-theme'

  const theme = ref(localStorage.getItem(STORAGE_KEY) ?? 'dark')

  const isDark = computed(() => theme.value === 'dark')

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(value) {
    theme.value = value
  }

  watch(
    theme,
    (newVal) => {
      if (newVal === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem(STORAGE_KEY, newVal)
    },
    { immediate: true },
  )

  return { theme, isDark, toggle, setTheme }
})
