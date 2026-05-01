import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { I18N } from '../data/i18n.js'

const STORAGE_KEY = 'ernesto-rangel-locale'

export const useLocaleStore = defineStore('locale', () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  const browserLocale = navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  const locale = ref(saved ?? browserLocale)
  const t = computed(() => I18N[locale.value] ?? I18N.en)

  function setLocale(l) {
    locale.value = l
    localStorage.setItem(STORAGE_KEY, l)
  }

  function toggle() {
    setLocale(locale.value === 'en' ? 'pt' : 'en')
  }

  return { locale, t, setLocale, toggle }
})
