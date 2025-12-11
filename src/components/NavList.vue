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
          'hover:bg-white/20',
          `border-b ${isCurrentRouteCSS(route.path)}`,
        ]"
      >
        {{ capitalizeFirstLetter(route.label) }}
      </li>
    </ul>
    <div class="w-full flex pt-8 lg:pt-0 px-24 lg:px-0">
      <!-- TODO: Implementar toggle de dark mode e select de linguagem -->
      <ul class="w-full flex flex-row items-center justify-center">
        <li
          v-for="(link, index) in socialLinks"
          :key="index"
          @click="forwardTo(link.href)"
          :class="[
            'flex items-center justify-center',
            'py-4 lg:px-4 lg:py-0',
            'w-full h-full text-sm ',
            'cursor-pointer',
            'border-b border-white/30',
            'transition duration-300 ease-in-out',
            'hover:bg-white/20',
          ]"
        >
          <Icon :icon="link.icon" size="sm" color="#fafafa" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import Icon from "./Icon.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useLanguageStore } from "../stores/language";

function toggleLang() {
  useLanguageStore().setLanguage("PT-BR");
}

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
      path: `/${route.name}`,
      label: route.name,
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
    return "text-[#00D957] !border-[#00D957]";
  }
  return "!border-white/30";
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
</script>
