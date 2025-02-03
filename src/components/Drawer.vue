<template>
    <div 
        :class="[
            `${props.drawer ? 'fixed' : 'hidden'}`,
            'w-80 right-0 top-0 bottom-0',
            'rounded-l-lg border',
            'bg-[#171717] border-[#272727]'
        ]"
    >
        <div class="flex p-4 border-b border-[#272727]">
            <button @click="emit('close')">
                <Icon icon="close" size="sm" color="white" />
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