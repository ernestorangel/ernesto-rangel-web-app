<template>
  <select
    :value="localeStore.locale"
    @change="localeStore.setLocale($event.target.value)"
    :aria-label="'Language'"
    class="lang-select"
  >
    <option value="en">EN</option>
    <option value="pt">PT-BR</option>
  </select>
</template>

<script setup>
import { useLocaleStore } from '../stores/locale.js'
const localeStore = useLocaleStore()
</script>

<style scoped>
.lang-select {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: 1px solid var(--color-rule);
  border-radius: 4px;
  color: var(--color-text-muted);
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 5px 10px;
  text-transform: uppercase;
  transition: border-color 180ms ease, color 180ms ease;
  outline: none;
}
.lang-select:hover {
  border-color: var(--color-accent);
  color: var(--color-text-primary);
}
.lang-select option {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
}
</style>
