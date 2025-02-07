<template>
    <div 
        :class="[
            'z-50',
            `${props.drawer ? 'translate-x-0' : 'translate-x-80'}`,
            'fixed w-80 right-0 top-0 bottom-0',
            ' border',
            'bg-[#171717] border-[rgb(39,39,39)]',
            'transition-all duration-300'
        ]"
    >
        <div class="flex pl-4 py-4 items-center justify-between">
            <button @click="emit('close')" class="p-4 hover:bg-[#272727]">
                <Icon icon="close" size="xs" color="#717171" />
            </button>
        </div>
        <slot name="content"></slot>
    </div>
    <div 
        :class="[
            `${props.drawer ? 'fixed' : 'hidden'}`,
            'top-0 bottom-0 right-0 left-0',
            'z-40  bg-white opacity-30',
            'transition-all duration-300'
        ]"
    ></div>
</template>

<script setup>
import Icon from './Icon.vue';

const props = defineProps(['drawer'])
const emit = defineEmits(['open', 'close'])
</script>