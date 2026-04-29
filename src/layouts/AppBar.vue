<template>
    <div
        :class="[
            'sticky top-0 h-[85px] z-50',
            'w-full',
            'flex flex-row items-center',
            'bg-theme-surface text-theme-text backdrop-blur-sm',
            'border-b border-theme-border-lg',
        ]"
    >
        <Spacer w="hidden xl:flex xl:min-w-[100px]" ></Spacer>
        <Logo size="xl" type="primary"></Logo>
        <Spacer w="w-full"></Spacer>
        <Menu></Menu>
        <Spacer w="hidden xl:flex xl:min-w-[100px]"></Spacer>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
import Menu from '../components/Menu.vue';
import Spacer from '../components/Spacer.vue';
</script>
