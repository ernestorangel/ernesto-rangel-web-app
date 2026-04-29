<template>
  <div
    :class="[
      'h-full flex flex-row justify-center items-center',
      `text-${props.size} font-normal tracking-widest`,
      'pl-8 border-theme-border-lg',
      `${props.type == 'primary' ? 'border-b backdrop-blur-sm' : ''}`,
    ]"
  >
    <span :style="{ color: secondaryColor }" class="subpixel-antialiased legibility">{{
      `<`
    }}</span>
    <span :style="{ color: mainColor }" class="subpixel-antialiased legibility">{{
      "ernesto"
    }}</span>
    <span :style="{ color: secondaryColor }" class="subpixel-antialiased legibility">{{
      "rangel"
    }}</span>
    <span :style="{ color: mainColor }" class="subpixel-antialiased legibility">{{
      ".dev"
    }}</span>
    <span :style="{ color: secondaryColor }" class="subpixel-antialiased legibility">{{
      "/>"
    }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["size", "type"]);

const mainColor = computed(() => {
  if (props.type == "primary") return "var(--color-accent)";
  if (props.type == "faded") return "var(--color-text-muted)";
});

const secondaryColor = computed(() => {
  if (props.type == "primary") return "var(--color-text-secondary)";
  if (props.type == "faded") return "var(--color-text-dimmed)";
});
</script>
