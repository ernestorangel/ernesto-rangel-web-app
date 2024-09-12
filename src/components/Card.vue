<template>
    <div class="w-full rounded-lg bg-[#171717]">
        <div class="border-b border-[#272727] px-8 py-4">
            {{ title }}
        </div>
        <div class="px-8 py-4">
            {{ content }}
        </div>
        <div class="border-t border-[#272727] px-8 py-4">
            actions
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['title', 'content']
    }
</script>