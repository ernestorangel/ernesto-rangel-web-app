<template>
    <div class="cursor-pointer">
        <Icon 
            @click="openDrawer()" 
            icon="hamburger-menu" 
            size="sm" 
            color="white" 
        />
        <div 
            :class="`w-80 ${drawer ? 'fixed' : 'hidden'} right-0 top-0 bottom-0 rounded-l-lg bg-red-500`"
        >
            <div class="p-4 border-b">
                <button @click="closeDrawer()">
                    close
                </button>
            </div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import Icon from './Icon.vue';

import { ref } from 'vue';

const drawer = ref(false);

function openDrawer() {
    drawer.value = true;
}

function closeDrawer() {
    drawer.value = false;
}
</script>