<template>
  <a
    :href="post.url"
    target="_blank"
    rel="noopener noreferrer"
    class="blog-card-link"
    :aria-label="`${post.title} — opens in new tab`"
  >
    <article class="blog-card">
      <div v-if="post.coverImage" class="blog-card__cover">
        <img :src="post.coverImage" :alt="post.title" loading="lazy" />
      </div>

      <div class="blog-card__body">
        <div v-if="post.tags.length" class="blog-card__tags" aria-label="tags">
          <span v-for="tag in post.tags" :key="tag" class="blog-card__tag">
            {{ tag }}
          </span>
        </div>

        <h3 class="blog-card__title">{{ post.title }}</h3>
        <p class="blog-card__excerpt">{{ post.excerpt }}</p>

        <div class="blog-card__footer">
          <time class="blog-card__date" :datetime="post.publishedAt">
            {{ formattedDate }}
          </time>
          <span v-if="post.readingTime" class="blog-card__reading-time">
            · {{ post.readingTime }} {{ readingLabel }}
          </span>
          <span class="blog-card__arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: { type: Object, required: true },
  locale: { type: String, default: "en" },
  readingLabel: { type: String, default: "min read" },
});

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat(props.locale === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(props.post.publishedAt));
});
</script>

<style scoped>
.blog-card-link {
  display: block;
  text-decoration: none;
  background: var(--color-bg-primary);
  transition: background 150ms ease;
}
.blog-card-link:hover {
  background: var(--color-bg-secondary);
}

.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28px 24px;
  min-height: 220px;
}

.blog-card__cover {
  margin-bottom: 16px;
  border-radius: 3px;
  overflow: hidden;
  aspect-ratio: 16 / 7;
}
.blog-card__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
}

.blog-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.blog-card__tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-soft);
  padding: 3px 8px;
  border-radius: 100px;
}

.blog-card__title {
  font-family: "Instrument Serif", serif;
  font-size: 18px;
  line-height: 1.3;
  color: var(--color-text-primary);
  margin: 0;
  transition: color 150ms ease;
}
.blog-card-link:hover .blog-card__title {
  color: var(--color-accent);
}

.blog-card__excerpt {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0;
  flex: 1;
}

.blog-card__footer {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: 12px;
}

.blog-card__date,
.blog-card__reading-time {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--color-text-dimmed);
}

.blog-card__arrow {
  margin-left: auto;
  font-size: 14px;
  color: var(--color-text-dimmed);
  transition: color 150ms ease, transform 150ms ease;
}
.blog-card-link:hover .blog-card__arrow {
  color: var(--color-accent);
  transform: translate(2px, -2px);
}
</style>
