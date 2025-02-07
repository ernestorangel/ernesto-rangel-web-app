<template>
    <NavList class="hidden lg:flex flex-row h-full" />
    <button @click="openDrawer" class="h-full lg:hidden px-8 border-b border-[#272727]">
        <Icon icon="hamburger-menu" size="sm" color="#717171" />
    </button>
    <Drawer 
        :drawer="drawer"
        @open="openDrawer"
        @close="closeDrawer"
        class="lg:hidden"
    >
        <template v-slot:content>
            <NavList class="flex flex-col" />
        </template>
    </Drawer>
</template>

<script setup>
import Icon from './Icon.vue';
import Drawer from './Drawer.vue';
import NavList from './NavList.vue';
import { ref } from 'vue';

const drawer = ref(false);

function openDrawer() {
    console.log('open')
    drawer.value = true;
}

function closeDrawer() {
    console.log('close')
    drawer.value = false;
}
</script>