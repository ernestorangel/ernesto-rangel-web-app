<template>
    <div 
        :class="[
            'sticky top-0',
            'w-full px-12',
            'flex flex-row items-center justify-between',
            'border-b border-[#272727]',
            'bg-[#171717] text-[#717171]'
        ]"
    >
        <Logo size="4xl" type="primary" />
        <Menu />
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
import Menu from '../components/Menu.vue';
</script>
