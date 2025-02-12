<template>
    <div 
        :class="[
            'fixed top-0 h-[55px] z-50',
            'w-full',
            'flex flex-row items-center',
            'bg-[#242424] text-[#fafafa]'
        ]"
    >
        <Spacer w="hidden xl:flex xl:min-w-[100px]" ></Spacer>
        <Logo size="md" type="primary"></Logo>
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
