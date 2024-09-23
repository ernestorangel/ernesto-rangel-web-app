<template>
    <div class="w-full rounded-lg bg-[#171717]">
        <div v-if="title" class="border-b border-[#272727] px-8 py-4">
            {{ title }}
        </div>
        <div v-if="content" class="px-8 py-4 text-[32px] font-bold text-center">
            <span>{{ content }}</span>
        </div>
        <div v-if="actions" class="border-t border-[#272727] px-8 py-4">
            {{ actions }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['title', 'content', 'actions'],
    }
</script>