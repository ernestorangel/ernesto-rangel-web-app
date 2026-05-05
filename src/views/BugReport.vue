<template>
  <div class="bug-report">
    <main class="bug-report__main">
      <div class="bug-report__inner">
        <div class="bug-report__header">
<h1 class="bug-report__headline">{{ t.bugReport.headline }} <em>{{ t.bugReport.cta }}.</em></h1>
        </div>
        <div class="contact__links">
          <a :href="`mailto:${t.email}`" class="contact__link">
            <span class="contact__link-label">{{ t.ui.labelEmail }}</span>
            <span class="contact__link-value">{{ t.email }}</span>
            <span class="contact__link-arrow">↗</span>
          </a>
          <a :href="t.githubUrl" target="_blank" rel="noopener" class="contact__link">
            <span class="contact__link-label">{{ t.ui.labelGithub }}</span>
            <span class="contact__link-value">{{ t.github }}</span>
            <span class="contact__link-arrow">↗</span>
          </a>
          <a :href="t.linkedinUrl" target="_blank" rel="noopener" class="contact__link">
            <span class="contact__link-label">{{ t.ui.labelLinkedin }}</span>
            <span class="contact__link-value">{{ t.linkedin }}</span>
            <span class="contact__link-arrow">↗</span>
          </a>
        </div>
      </div>
    </main>
    <footer class="bug-report__footer">
      <span class="footer-left">{{ t.ui.footerLeft }}</span>
      <span class="footer-right">{{ t.ui.footerRight }}</span>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '../stores/locale.js'

const localeStore = useLocaleStore()
const t = computed(() => localeStore.t)
</script>

<style scoped>
.bug-report {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.bug-report__main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.bug-report__inner {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.bug-report__header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bug-report__cta {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0;
}

.bug-report__headline {
  font-family: "Instrument Serif", serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin: 0;
}

.bug-report__headline em {
  font-style: italic;
  color: var(--color-accent);
}

.contact__links {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
}

.contact__link {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  transition: color 150ms ease;
  color: var(--color-text-primary);
}
.contact__link:hover {
  color: var(--color-accent);
}

.contact__link-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dimmed);
  min-width: 80px;
}

.contact__link-value {
  font-family: "Instrument Serif", serif;
  font-style: italic;
  font-size: 20px;
  flex: 1;
}

.contact__link-arrow {
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  color: var(--color-text-muted);
  transition: color 150ms ease, transform 150ms ease;
  display: inline-block;
}
.contact__link:hover .contact__link-arrow {
  color: var(--color-accent);
  transform: translate(2px, -2px);
}

.bug-report__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  border-top: 1px solid var(--color-text-dimmed);
  font-size: 13px;
  color: var(--color-text-muted);
}

@media (max-width: 639px) {
  .bug-report__footer {
    padding: 20px 24px;
  }
}
</style>
