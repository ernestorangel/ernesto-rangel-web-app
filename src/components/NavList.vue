<template>
  <nav class="flex flex-col lg:flex-row">
    <ul class="flex flex-col lg:flex-row items-center justify-center">
      <li
        v-for="(route, index) in routes"
        :key="index"
        @click="forwardTo(route.path)"
        :class="[
          'flex items-center justify-center',
          'py-4 lg:px-4 lg:py-0',
          'w-full h-full text-sm',
          'cursor-pointer',
          'transition duration-300 ease-in-out',
          'hover:bg-theme-surface-hover lg:backdrop-blur-sm',
          `lg:border-b ${isCurrentRouteCSS(route.path)}`,
        ]"
      >
        {{ capitalizeFirstLetter(route.label) }}
      </li>
    </ul>
    <div class="w-full flex pt-8 lg:pt-0 px-24 lg:px-0">
      <ul class="w-full flex flex-row items-center justify-center">
        <li
          v-for="(link, index) in socialLinks"
          :key="index"
          @click="forwardTo(link.href)"
          :class="[
            'flex items-center justify-center',
            'py-4 lg:px-4 lg:py-0',
            'w-full h-full text-sm',
            'cursor-pointer',
            'lg:border-b border-theme-border-lg lg:backdrop-blur-sm',
            'transition duration-300 ease-in-out',
            'hover:bg-theme-surface-hover',
            'text-theme-text',
          ]"
        >
          <Icon :icon="link.icon" size="sm" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import Icon from "./Icon.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const socialLinks = [
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/ernestorangel/",
  },
  {
    icon: "github",
    href: "https://github.com/ernestorangel",
  },
];

const emit = defineEmits(["closeDrawer"]);

const router = useRouter();

const routes = computed(() =>
  router
    .getRoutes()
    .filter((route) => route.name)
    .map((route) => ({
      name: route.name,
      path: route.path,
      label: route.meta?.title || route.name,
    })),
);

function forwardTo(destination) {
  if (`${destination}`.includes("https://")) {
    window.open(destination);
  } else {
    router.push(destination);
    emit("closeDrawer");
  }
}

function isCurrentRouteCSS(refPath) {
  if (router.currentRoute.value.path == refPath) {
    return "text-theme-accent !border-theme-accent";
  }
  return "!border-theme-border-lg";
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
</script>
