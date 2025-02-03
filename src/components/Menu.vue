<template>
    <NavList class="hidden lg:flex flex-row" />
    <button @click="openDrawer" class="lg:hidden py-8">
        <Icon icon="hamburger-menu" size="lg" color="white" />
    </button>
    <Drawer 
        :drawer="drawer"
        @open="openDrawer"
        @close="closeDrawer"
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