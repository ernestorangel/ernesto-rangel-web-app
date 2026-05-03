<template>
  <main class="blog-main">
    <!-- ── Header ── -->
    <div class="blog-header">
      <div class="section-label">
        <span class="label-text">{{ t.ui.blogPageTitle }}</span>
        <span class="label-index">0 5</span>
      </div>
      <h1 class="blog-headline">{{ t.ui.blogPageTitle }}</h1>
      <p class="blog-subhead">{{ t.ui.blogPageSubtitle }}</p>
    </div>

    <!-- ── Tag filter ── -->
    <div v-if="allTags.length" class="blog-filters" role="navigation" aria-label="Filter by tag">
      <button
        class="blog-filter-btn"
        :class="{ 'blog-filter-btn--active': activeTag === null }"
        @click="activeTag = null"
      >
        {{ t.ui.blogFilterAll }}
      </button>
      <button
        v-for="tag in allTags"
        :key="tag"
        class="blog-filter-btn"
        :class="{ 'blog-filter-btn--active': activeTag === tag }"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <!-- ── Loading skeleton ── -->
    <div v-if="loading" class="blog-status" role="status" aria-live="polite">
      <div class="blog-grid">
        <div
          v-for="n in 6"
          :key="n"
          class="blog-skeleton"
          aria-hidden="true"
        />
      </div>
      <span class="sr-only">{{ t.ui.blogLoading }}</span>
    </div>

    <!-- ── Error ── -->
    <div v-else-if="error" class="blog-status blog-status--error" role="alert">
      <p>{{ t.ui.blogError }}</p>
    </div>

    <!-- ── Empty ── -->
    <div v-else-if="!filteredPosts.length" class="blog-status" role="status">
      <p>{{ t.ui.blogEmpty }}</p>
    </div>

    <!-- ── Posts grid ── -->
    <div v-else class="blog-grid">
      <BlogCard
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        :locale="localeStore.locale"
        :reading-label="t.ui.blogReadingMin"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useLocaleStore } from "../stores/locale.js";
import { useBlogFeed } from "../composables/useBlogFeed.js";
import BlogCard from "../components/BlogCard.vue";

const localeStore = useLocaleStore();
const t = computed(() => localeStore.t);

const { posts, loading, error, fetch } = useBlogFeed();
const activeTag = ref(null);

const allTags = computed(() => {
  const tagSet = new Set();
  posts.value.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)));
  return [...tagSet];
});

const filteredPosts = computed(() => {
  if (!activeTag.value) return posts.value;
  return posts.value.filter((p) => p.tags.includes(activeTag.value));
});

onMounted(() => {
  // Switch source to 'devto' or 'rss' when ready to connect a real blog:
  // fetch('devto', { username: 'YOUR_USERNAME', perPage: 9 })
  // fetch('rss', { rssUrl: 'https://your-blog.hashnode.dev/rss.xml' })
  fetch("mock");
});
</script>

<style scoped>
.blog-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 64px 96px;
}

/* ── Header ── */
.blog-header {
  padding: 80px 0 48px;
  border-bottom: 1px solid var(--color-rule);
  margin-bottom: 0;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.label-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dimmed);
}

.label-index {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--color-text-dimmed);
  opacity: 0.5;
}

.blog-headline {
  font-family: "Instrument Serif", serif;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin: 0 0 16px;
}

.blog-subhead {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0;
  max-width: 480px;
}

/* ── Filters ── */
.blog-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-rule);
}

.blog-filter-btn {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  background: transparent;
  border: 1px solid var(--color-rule);
  border-radius: 100px;
  padding: 5px 14px;
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease, background 150ms ease;
}
.blog-filter-btn:hover {
  color: var(--color-text-primary);
  border-color: var(--color-text-dimmed);
}
.blog-filter-btn--active {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
}

/* ── Grid ── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--color-rule);
  border: 1px solid var(--color-rule);
}

/* ── Skeleton ── */
.blog-skeleton {
  height: 260px;
  background: var(--color-bg-primary);
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}

/* ── Status messages ── */
.blog-status {
  padding: 64px 0;
  color: var(--color-text-muted);
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  letter-spacing: 0.04em;
}

.blog-status--error {
  color: #e05252;
}

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* ── Responsive ── */
@media (max-width: 1023px) {
  .blog-main {
    padding: 0 40px 80px;
  }
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .blog-main {
    padding: 0 24px 64px;
  }
  .blog-header {
    padding: 56px 0 40px;
  }
}

@media (max-width: 639px) {
  .blog-main {
    padding: 0 16px 48px;
  }
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
