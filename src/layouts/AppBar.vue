<template>
    <div 
        :class="[
            'fixed top-0 h-[55px]',
            'w-full',
            'flex flex-row items-center',
            'bg-[#171717] text-[#717171]'
        ]"
    >
        <div class="xl:min-w-[100px] h-full border-b border-[#272727]"></div>
        <Logo size="md" type="primary" class="pl-8 border-b border-[#272727]" />
        <div class="w-full h-full border-b border-[#272727]"></div>
        <Menu></Menu>
        <div class="xl:min-w-[100px] h-full border-b border-[#272727]"></div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
import Menu from '../components/Menu.vue';
</script>
