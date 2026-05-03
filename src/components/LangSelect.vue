<template>
  <div class="lang-ctrl">
    <select
      :value="localeStore.locale"
      @change="localeStore.setLocale($event.target.value)"
      aria-label="Language"
      class="lang-ctrl__select"
    >
      <option value="en">EN</option>
      <option value="pt">PT-BR</option>
    </select>
    <span class="lang-ctrl__sep" aria-hidden="true" />
    <span class="lang-ctrl__icon" aria-hidden="true">
      <Icon icon="world" size="xs" />
    </span>
  </div>
</template>

<script setup>
import { useLocaleStore } from '../stores/locale.js'
import Icon from './Icon.vue'
const localeStore = useLocaleStore()
</script>

<style scoped>
.lang-ctrl {
  display: inline-flex;
  align-items: center;
  height: 30px;
  border: 1px solid var(--color-rule);
  border-radius: 6px;
  gap: 0;
  flex-shrink: 0;
  transition: border-color 180ms ease;
  cursor: pointer;
}
.lang-ctrl:hover,
.lang-ctrl:focus-within {
  border-color: var(--color-accent);
}

.lang-ctrl__select {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text-muted);
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 0 10px;
  text-transform: uppercase;
  height: 100%;
  transition: color 180ms ease;
}
.lang-ctrl:hover .lang-ctrl__select,
.lang-ctrl:focus-within .lang-ctrl__select {
  color: var(--color-text-primary);
}
.lang-ctrl__select option {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.lang-ctrl__sep {
  width: 1px;
  height: 16px;
  background: var(--color-rule);
  flex-shrink: 0;
}

.lang-ctrl__icon {
  padding: 0 9px;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  pointer-events: none;
  transition: color 180ms ease;
}
.lang-ctrl:hover .lang-ctrl__icon {
  color: var(--color-text-primary);
}
</style>
