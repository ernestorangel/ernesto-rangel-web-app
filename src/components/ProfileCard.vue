<template>
  <div
    :class="[
      'flex flex-col',
      'md:flex-row lg:w-[790px]',
      'lg:bg-gray-800/60 lg:border border-white/30 lg:rounded-xl',
      'lg:backdrop-blur-sm',
    ]"
  >
    <div class="w-full flex flex-col gap-8 p-16">
      <div class="flex flex-col gap-1">
        <div class="text-6xl font-bold">{{ textContent.name }}</div>
        <div class="flex items-center gap-1">
          <Icon icon="location" size="sm" color="#ffffff" />
          <div class="text-lg text-[#ffffff]">{{ textContent.location }}</div>
        </div>
      </div>
      <div
        class="text-lg font-light text-[#ffffff] subpixel-antialiased legibility"
      >
        <strong class="text-[#1ad367]">{{ textContent.ocupation }}</strong>
        {{ textContent.description }}
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-bold text-lg">{{ textContent.highlightTitle }}</div>
        <span>
          <ul class="flex gap-3 flex-wrap">
            <li
              v-for="item in proficiencies"
              class="whitespace-nowrap py-1 px-4 rounded-lg text-lg text-[#AAC8E4] bg-gray-700/60"
            >
              {{ item.label }}
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { computed } from "vue";
import { useLanguageStore } from "../stores/language";
import useLanguageContent from "../utils/useLanguageContent";

const { getContent } = useLanguageContent();

const textContent = computed(() =>
  getContent(useLanguageStore().currentLanguage, "profileCard"),
);

console.log(textContent.value);

const proficiencies = [
  {
    index: 0,
    label: "Vue.js",
  },
  {
    index: 1,
    label: "Tailwind CSS",
  },
  {
    index: 2,
    label: "Javascript",
  },
  {
    index: 3,
    label: "HTML",
  },
  {
    index: 4,
    label: "CSS",
  },
];
</script>
