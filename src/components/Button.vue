<template>
    <button class="rounded-full p-2 text-white text-2xl" :href="link">
        {{ label }}
    </button>
</template>

<script setup>
const { label, link } = defineProps(['label', 'link'])
</script>