<template>
  <div
    :class="[
      'h-full flex flex-row justify-center items-center',
      `text-${props.size} font-normal tracking-widest`,
      'pl-8 border-white/30',
      `${props.type == 'primary' ? 'border-b backdrop-blur-sm' : ''}`,
    ]"
  >
    <span :class="`text-[${secondaryColor}] subpixel-antialiased legibility`">{{
      `<`
    }}</span>
    <span :class="`text-[${mainColor}] subpixel-antialiased legibility`">{{
      "ernesto"
    }}</span>
    <span :class="`text-[${secondaryColor}] subpixel-antialiased legibility`">{{
      "rangel"
    }}</span>
    <span :class="`text-[${mainColor}] subpixel-antialiased legibility`">{{
      ".dev"
    }}</span>
    <span :class="`text-[${secondaryColor}] subpixel-antialiased legibility`">{{
      "/>"
    }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["size", "type"]);

const mainColor = computed(() => {
  if (props.type == "primary") return "#00D957";
  if (props.type == "faded") return "#717171";
});

const secondaryColor = computed(() => {
  if (props.type == "primary") return "#BCBCBC";
  if (props.type == "faded") return "#505050";
});
</script>
