<template>
  <main class="site-main">
    <!-- ── Hero ── -->
    <section id="hero" class="hero">
      <div class="hero__left">
        <div class="hero__status">
          <span class="hero__pulse" />
          {{ t.ui.available }}
        </div>
        <h1 class="hero__headline">
          {{ t.ui.heroLead }}
          <em>{{ t.ui.heroAdj1 }}&nbsp;</em>
          <em>{{ t.ui.heroAdj2 }}&nbsp;</em>
          {{ t.ui.heroAndFast }}&nbsp;<em>{{ t.ui.heroAdj3 }}</em>
        </h1>
        <div class="hero__ctas">
          <a :href="`mailto:${t.email}`" class="btn-primary">{{
            t.ui.ctaContact
          }}</a>
          <a href="#work" class="btn-ghost">{{ t.ui.ctaWork }}</a>
        </div>
      </div>

      <div class="hero__right">
        <div class="hero__avatar-wrap">
          <img
            src="@/assets/images/pp-small.jpg"
            :alt="t.name"
            class="hero__avatar"
          />
        </div>
        <div class="hero__intro">
          <p class="hero__eyebrow">{{ t.ui.heroIntroEyebrow }}</p>
          <p class="hero__intro-name">{{ t.ui.heroIntroLine }}</p>
        </div>
        <p class="hero__subhead">{{ t.ui.subhead }}</p>
        <div class="hero__socials">
          <a
            :href="t.githubUrl"
            target="_blank"
            rel="noopener"
            class="hero__social-link"
            >↗ GitHub</a
          >
          <span class="hero__social-sep">·</span>
          <a
            :href="t.linkedinUrl"
            target="_blank"
            rel="noopener"
            class="hero__social-link"
            >↗ LinkedIn</a
          >
          <span class="hero__social-sep">·</span>
          <a :href="`mailto:${t.email}`" class="hero__social-link">↗ Email</a>
        </div>
      </div>
    </section>

    <!-- ── About ── -->
    <section id="about" class="section">
      <div class="section-header">
        <div class="section-label">
          <span class="label-text">{{ t.ui.sectionAbout }}</span>
          <span class="label-index">0 1</span>
        </div>
        <h2 class="section-headline">
          {{ t.ui.sectionAboutHeadline.pre }}
          <strong>{{ t.ui.sectionAboutHeadline.strong }}</strong
          >{{ t.ui.sectionAboutHeadline.post }}
        </h2>
      </div>
      <div class="section-grid">
        <div />
        <div class="about__bio">
          <p v-for="(para, i) in t.bio" :key="i" class="about__para">
            {{ para }}
          </p>
        </div>
        <div class="about__facts">
          <div v-for="(row, i) in miniFacts" :key="i" class="fact-row">
            <span class="fact-label">{{ row.label }}</span>
            <span class="fact-value">{{ row.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Experience ── -->
    <section id="work" class="section">
      <div class="section-header">
        <div class="section-label">
          <span class="label-text">{{ t.ui.sectionExp }}</span>
          <span class="label-index">0 2</span>
        </div>
        <h2 class="section-headline">
          {{ t.ui.sectionExpHeadline.pre }}
          <strong>{{ t.ui.sectionExpHeadline.strong }}</strong
          >{{ t.ui.sectionExpHeadline.post }}
        </h2>
      </div>

      <div class="exp-list">
        <div v-for="(job, i) in t.experience" :key="i" class="exp-row">
          <div class="exp-meta">
            <span class="exp-index">0{{ i + 1 }}</span>
            <span class="exp-period">{{ job.period }}</span>
            <span class="exp-sector">{{ job.sector }}</span>
          </div>
          <div class="exp-body">
            <div class="exp-role">
              <span class="exp-role-title">{{ job.role }}</span>
              <span class="exp-at">{{ t.ui.jobAtConnector }}</span>
              <span class="exp-company">{{ job.company }}</span>
            </div>
            <p class="exp-summary">{{ job.summary }}</p>
          </div>
          <div class="exp-details">
            <ul class="exp-bullets">
              <li v-for="(b, bi) in job.bullets" :key="bi" class="exp-bullet">
                {{ b }}
              </li>
            </ul>
            <div class="exp-stack">
              <span v-for="s in job.stack" :key="s" class="stack-pill">{{
                s
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Stack ── -->
    <section id="stack" class="section">
      <div class="section-header">
        <div class="section-label">
          <span class="label-text">{{ t.ui.sectionStack }}</span>
          <span class="label-index">0 3</span>
        </div>
        <h2 class="section-headline">
          {{ t.ui.sectionStackHeadline.pre }}
          <strong>{{ t.ui.sectionStackHeadline.strong }}</strong
          >{{ t.ui.sectionStackHeadline.post }}
        </h2>
      </div>
      <div class="stack-grid">
        <div v-for="(items, cat) in t.skills" :key="cat" class="stack-cat">
          <h3 class="stack-cat-name">{{ cat }}</h3>
          <div class="stack-pills">
            <span v-for="s in items" :key="s" class="stack-pill">{{ s }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Projects ── -->
    <section id="projects" class="section">
      <div class="section-header">
        <div class="section-label">
          <span class="label-text">{{ t.ui.sectionProjects }}</span>
          <span class="label-index">0 4</span>
        </div>
        <h2 class="section-headline">
          {{ t.ui.sectionProjectsHeadline.pre }}
          <strong>{{ t.ui.sectionProjectsHeadline.strong }}</strong>
          {{ t.ui.sectionProjectsHeadline.post }}
        </h2>
      </div>
      <div class="projects-grid">
        <a
          v-for="item in t.projects"
          :key="item.key"
          :href="item.url"
          target="_blank"
          rel="noopener"
          class="project-card"
          :class="{ 'project-card--soon': item.soon }"
        >
          <div class="project-card__head">
            <span class="project-tag">{{ item.tag }}</span>
            <span v-if="item.soon" class="project-badge">{{ t.ui.soonBadge }}</span>
          </div>
          <h3 class="project-title">{{ item.title }}</h3>
          <p class="project-blurb">{{ item.blurb }}</p>
          <span class="project-arrow">↗</span>
        </a>
      </div>
    </section>

    <!-- ── Contact ── -->
    <section id="contact" class="section section--contact">
      <div class="section-grid">
        <div class="section-label">
          <span class="label-text">{{ t.ui.sectionContact }}</span>
          <span class="label-index">0 5</span>
        </div>
        <div class="contact__body">
          <h2 class="contact__headline">
            {{ t.ui.contactHeadline.pre }}
            <br />{{ t.ui.contactHeadline.post
            }}<em>{{ t.ui.contactHeadline.strong }}</em>
          </h2>
          <p class="contact__blurb">{{ t.ui.contactBlurb }}</p>
          <div class="contact__links">
            <a :href="`mailto:${t.email}`" class="contact__link">
              <span class="contact__link-label">{{ t.ui.labelEmail }}</span>
              <span class="contact__link-value">{{ t.email }}</span>
              <span class="contact__link-arrow">↗</span>
            </a>
            <a
              :href="t.githubUrl"
              target="_blank"
              rel="noopener"
              class="contact__link"
            >
              <span class="contact__link-label">{{ t.ui.labelGithub }}</span>
              <span class="contact__link-value">{{ t.github }}</span>
              <span class="contact__link-arrow">↗</span>
            </a>
            <a
              :href="t.linkedinUrl"
              target="_blank"
              rel="noopener"
              class="contact__link"
            >
              <span class="contact__link-label">{{ t.ui.labelLinkedin }}</span>
              <span class="contact__link-value">{{ t.linkedin }}</span>
              <span class="contact__link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer class="site-footer">
      <span class="footer-left">{{ t.ui.footerLeft }}</span>
      <span class="footer-right">{{ t.ui.footerRight }}</span>
    </footer>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useLocaleStore } from "../stores/locale.js";

const localeStore = useLocaleStore();
const t = computed(() => localeStore.t);

const miniFacts = computed(() => {
  const ui = t.value.ui;
  return [
    { label: ui.miniBased, value: ui.miniBasedV },
    { label: ui.miniLanguages, value: ui.miniLanguagesV },
    { label: ui.miniCurrently, value: ui.miniCurrentlyV },
    { label: ui.miniBackground, value: ui.miniBackgroundV },
    { label: ui.miniEducation, value: ui.miniEducationV },
  ];
});
</script>

<style scoped>
/* ── Layout ── */
.site-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 64px;
}

/* ── Hero ── */
.hero {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 96px;
  padding: 120px 0 128px;
  align-items: start;
}

.hero__left {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-soft);
  border: 1px solid var(--color-accent);
  border-radius: 100px;
  padding: 6px 14px;
  width: fit-content;
}

.hero__pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.hero__headline {
  font-family: "Instrument Serif", serif;
  font-size: clamp(36px, 4vw, 56px);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin: 0;
  font-weight: 400;
}

.hero__headline em {
  font-style: italic;
  color: var(--color-accent);
}

.hero__ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: var(--color-accent);
  color: #00141d;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 150ms ease;
}
.btn-primary:hover {
  background: var(--color-accent-hover);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid var(--color-rule);
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  text-decoration: none;
  transition:
    border-color 150ms ease,
    color 150ms ease;
}
.btn-ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.hero__right {
  border-left: 1px solid var(--color-rule);
  padding-left: 64px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero__avatar-wrap {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 2px solid var(--color-accent);
  box-shadow: 0 0 24px var(--color-accent-soft);
  overflow: hidden;
  flex-shrink: 0;
}

.hero__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__intro {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.hero__eyebrow {
  font-family: "Instrument Serif", serif;
  font-style: italic;
  font-size: 22px;
  color: var(--color-text-muted);
  margin: 0;
}

.hero__intro-name {
  font-family: "Instrument Serif", serif;
  font-size: 22px;
  font-weight: 400;
  color: var(--color-text-primary);
  margin: 0;
}

.hero__subhead {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0;
}

.hero__socials {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.hero__social-link {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 150ms ease;
}
.hero__social-link:hover {
  color: var(--color-accent);
}

.hero__social-sep {
  color: var(--color-text-dimmed);
  font-size: 11px;
}

/* ── Section shared ── */
.section {
  padding: 96px 0;
  border-top: 1px solid var(--color-text-dimmed);
}

.section-grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  gap: 0 64px;
  align-items: start;
}

.section-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0 64px;
  margin-bottom: 56px;
  align-items: start;
}

.section-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 4px;
}

.label-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.label-index {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--color-accent);
}

.section-headline {
  font-family: "Instrument Serif", serif;
  font-size: clamp(32px, 3.5vw, 52px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin: 0;
}

.section-headline strong {
  font-style: italic;
  font-weight: 400;
  color: var(--color-accent);
}

/* ── About ── */
.about__bio {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about__para {
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

.about__facts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 4px;
}

.fact-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
}
.fact-row:last-child {
  border-bottom: none;
}

.fact-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.fact-value {
  font-size: 14px;
  color: var(--color-text-primary);
}

/* ── Experience ── */
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.exp-row {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  gap: 0 64px;
  padding: 40px 0;
  border-top: 1px solid var(--color-border);
  align-items: start;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.exp-index {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: var(--color-accent);
}

.exp-period {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: var(--color-text-muted);
}

.exp-sector {
  font-size: 12px;
  color: var(--color-text-dimmed);
  margin-top: 2px;
}

.exp-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-role {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}

.exp-role-title {
  font-family: "Instrument Serif", serif;
  font-size: 22px;
  font-weight: 400;
  color: var(--color-text-primary);
}

.exp-at {
  font-size: 13px;
  color: var(--color-text-muted);
}

.exp-company {
  font-family: "Instrument Serif", serif;
  font-style: italic;
  font-size: 22px;
  color: var(--color-accent);
}

.exp-summary {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0;
}

.exp-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.exp-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.exp-bullet {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  padding-left: 14px;
  position: relative;
}
.exp-bullet::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--color-text-dimmed);
}

/* ── Stack ── */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 64px;
  margin-left: 264px;
}

.stack-cat {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.stack-cat-name {
  font-family: "Instrument Serif", serif;
  font-style: italic;
  font-size: 20px;
  font-weight: 400;
  color: var(--color-text-primary);
  margin: 0;
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-pill {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  border: 1px solid var(--color-rule);
  border-radius: 4px;
  padding: 4px 10px;
}

/* ── Projects ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-left: 264px;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border: 1px solid var(--color-rule);
  border-radius: 8px;
  background: var(--color-surface);
  text-decoration: none;
  transition: border-color 150ms ease;
}
.project-card:hover {
  border-color: var(--color-accent);
}

.project-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.project-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.project-badge {
  font-family: "JetBrains Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-soft);
  border: 1px solid var(--color-accent);
  border-radius: 100px;
  padding: 3px 8px;
  line-height: 1;
}

.project-title {
  font-family: "Instrument Serif", serif;
  font-size: 28px;
  font-weight: 400;
  color: var(--color-text-primary);
  margin: 0;
}

.project-blurb {
  font-size: 14px;
  line-height: 1.65;
  color: var(--color-text-muted);
  margin: 0;
  flex: 1;
}

.project-arrow {
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  color: var(--color-text-dimmed);
  transition: color 150ms ease;
}
.project-card:hover .project-arrow {
  color: var(--color-accent);
}

/* ── Contact ── */
.section--contact {
  padding-bottom: 0;
}

.contact__body {
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact__headline {
  font-family: "Instrument Serif", serif;
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin: 0;
}

.contact__headline em {
  font-style: italic;
  color: var(--color-accent);
}

.contact__blurb {
  font-size: 16px;
  line-height: 1.65;
  color: var(--color-text-muted);
  max-width: 520px;
  margin: 0;
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
  transition:
    color 150ms ease,
    transform 150ms ease;
  display: inline-block;
}
.contact__link:hover .contact__link-arrow {
  color: var(--color-accent);
  transform: translate(2px, -2px);
}

/* ── Footer ── */
.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  margin-top: 80px;
  border-top: 1px solid var(--color-text-dimmed);
}

.footer-left,
.footer-right {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* ── Responsive ── */

/* below lg — 1024px */
@media (max-width: 1023px) {
  .site-main {
    padding: 0 40px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 72px 0 80px;
  }

  .hero__right {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--color-rule);
    padding-top: 40px;
  }

  .section {
    padding: 72px 0;
  }

  .section-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .section-header {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .exp-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stack-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
    gap: 32px 40px;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
  }

  .contact__body {
    grid-column: 1;
  }
}

/* below md — 768px */
@media (max-width: 767px) {
  .site-main {
    padding: 0 24px;
  }

  .hero {
    padding: 56px 0 64px;
    gap: 40px;
  }

  .section {
    padding: 56px 0;
  }

  .section-header {
    margin-bottom: 32px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .contact__link-value {
    font-size: 16px;
    word-break: break-all;
  }

  .site-footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
    margin-top: 48px;
  }
}

/* below sm — 640px */
@media (max-width: 639px) {
  .site-main {
    padding: 0 16px;
  }

  .hero {
    padding: 40px 0 56px;
  }

  .hero__headline {
    font-size: clamp(32px, 8vw, 44px);
  }

  .section {
    padding: 48px 0;
  }

  .stack-grid {
    grid-template-columns: 1fr;
  }

  .hero__ctas {
    flex-direction: column;
  }

  .btn-primary,
  .btn-ghost {
    justify-content: center;
  }
}
</style>
