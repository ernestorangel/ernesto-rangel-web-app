<template>
    <NavList class="hidden lg:flex h-full" />
    <button @click="openDrawer" class="h-full lg:hidden">
        <Icon icon="hamburger-menu" size="sm" color="#fafafa" />
    </button>
    <Drawer 
        :drawer="drawer"
        @open="openDrawer"
        @close="closeDrawer"
    >
        <template v-slot:content>
            <NavList class="lg:hidden flex" @closeDrawer="closeDrawer" />
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
    drawer.value = true;
}

function closeDrawer() {
    drawer.value = false;
}
</script>