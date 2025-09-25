<template>
    <div 
        :class="[
            `${props.w} h-full`,
            'backdrop-blur-sm',
            'border-b border-white/30'
        ]"
    ></div>
</template>

<script setup>
const props = defineProps(['w'])
</script>