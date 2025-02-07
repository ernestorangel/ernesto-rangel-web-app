<template>
    <div 
        :class="[
            `${props.drawer ? 'translate-x-0' : 'translate-x-80'}`,
            'fixed w-80 right-0 top-0 bottom-0',
            'rounded-l-lg border',
            'bg-[#171717] border-[rgb(39,39,39)]',
            'transition-all duration-300'
        ]"
    >
        <div class="flex p-4 border-b border-[#272727]">
            <button @click="emit('close')">
                <Icon icon="close" size="xs" color="#717171" />
            </button>
        </div>
        <slot name="content"></slot>
    </div>
</template>

<script setup>
import Icon from './Icon.vue';

const props = defineProps(['drawer'])
const emit = defineEmits(['open', 'close'])
</script>