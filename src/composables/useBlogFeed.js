import { ref, readonly } from "vue";
import axios from "axios";
import { BLOG_MOCK_POSTS } from "../data/blogMockData.js";

// Module-level cache — survives component remounts, resets after TTL
let _cache = null;
let _cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function fetchMock() {
  await new Promise((r) => setTimeout(r, 600));
  return BLOG_MOCK_POSTS;
}

async function fetchDevTo(username, perPage = 6) {
  const { data } = await axios.get("https://dev.to/api/articles", {
    params: { username, per_page: perPage },
    timeout: 8000,
  });
  return data.map((a) => ({
    id: String(a.id),
    title: a.title,
    excerpt: (a.description ?? "").slice(0, 160),
    url: a.url,
    publishedAt: a.published_at,
    tags: (a.tag_list ?? []).slice(0, 3),
    readingTime: a.reading_time_minutes ?? null,
    coverImage: a.cover_image ?? null,
  }));
}

async function fetchRss2Json(rssUrl) {
  const { data } = await axios.get("https://api.rss2json.com/v1/api.json", {
    params: { rss_url: rssUrl },
    timeout: 8000,
  });
  if (data.status !== "ok") throw new Error(data.message);
  return data.items.slice(0, 6).map((item, i) => ({
    id: item.guid ?? String(i),
    title: item.title,
    excerpt: stripHtml(item.description ?? "").slice(0, 160),
    url: item.link,
    publishedAt: item.pubDate,
    tags: (item.categories ?? []).slice(0, 3),
    readingTime: null,
    coverImage: item.thumbnail ?? null,
  }));
}

export function useBlogFeed() {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetch(source = "mock", options = {}) {
    const now = Date.now();
    if (_cache && now - _cacheTimestamp < CACHE_TTL_MS) {
      posts.value = _cache;
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      let result;
      if (source === "devto") {
        result = await fetchDevTo(options.username, options.perPage);
      } else if (source === "rss") {
        result = await fetchRss2Json(options.rssUrl);
      } else {
        result = await fetchMock();
      }
      _cache = result;
      _cacheTimestamp = Date.now();
      posts.value = result;
    } catch (e) {
      error.value = e.message ?? "fetch_error";
    } finally {
      loading.value = false;
    }
  }

  return {
    posts: readonly(posts),
    loading: readonly(loading),
    error: readonly(error),
    fetch,
  };
}
