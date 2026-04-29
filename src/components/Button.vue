<template>
    <button class="rounded-full p-2 text-theme-text text-2xl" :href="link">
        {{ label }}
    </button>
</template>

<script setup>
const { label, link } = defineProps(['label', 'link'])
</script>
