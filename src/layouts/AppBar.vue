<template>
  <header class="site-nav">
    <a href="#hero" class="site-nav__logo">Ernesto Rangel</a>
    <nav class="site-nav__links">
      <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" class="site-nav__link">
        {{ item.label }}
      </a>
    </nav>
    <div class="site-nav__controls">
      <ThemeToggle />
      <LangSelect />
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '../stores/locale.js'
import ThemeToggle from '../components/ThemeToggle.vue'
import LangSelect from '../components/LangSelect.vue'

const localeStore = useLocaleStore()
const nav = computed(() => localeStore.t.nav)

const navItems = computed(() => [
  { id: 'about',   label: nav.value.about },
  { id: 'work',    label: nav.value.work },
  { id: 'stack',   label: nav.value.stack },
  { id: 'soon',    label: nav.value.soon },
  { id: 'contact', label: nav.value.contact },
])
</script>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 64px;
  height: 64px;
  background-color: color-mix(in srgb, var(--color-bg-primary) 82%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-rule);
}

.site-nav__logo {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 20px;
  color: var(--color-text-primary);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.site-nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
  justify-content: center;
}

.site-nav__link {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 150ms ease;
}
.site-nav__link:hover {
  color: var(--color-text-primary);
}

.site-nav__controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* below lg — tablet */
@media (max-width: 1023px) {
  .site-nav {
    padding: 0 40px;
    gap: 20px;
  }
  .site-nav__links {
    gap: 20px;
  }
}

/* below md — hide nav links, keep logo + controls */
@media (max-width: 767px) {
  .site-nav {
    padding: 0 24px;
    justify-content: space-between;
  }
  .site-nav__links {
    display: none;
  }
}

/* below sm */
@media (max-width: 639px) {
  .site-nav {
    padding: 0 16px;
    height: 56px;
  }
}
</style>
