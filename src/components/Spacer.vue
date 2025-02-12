<template>
    <div 
        :class="[
            `${props.w} h-full`,
            'bg-[#242424]',
            'border-b border-[#454545]'
        ]"
    ></div>
</template>

<script setup>
const props = defineProps(['w'])
</script>