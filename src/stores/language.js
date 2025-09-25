import { defineStore } from 'pinia'
import useLanguageContent from '../utils/useLanguageContent'

const { DEFAULT_LANGUAGE } = useLanguageContent()

export const useLanguageStore = defineStore('language', {
  state: () => {
    return { currentLanguage: DEFAULT_LANGUAGE }
  },
  actions: {
    setLanguage(newLang) {
      this.currentLanguage = newLang
    },
  },
})