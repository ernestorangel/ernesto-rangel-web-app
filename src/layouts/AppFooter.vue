<template>
    <div 
        :class="[
            'flex flex-col items-center justify-center', 
            'sm:flex-row sm:justify-between',
            'px-8 py-8',
            'bg-[#171717]',
            'border-t border-[#272727]'
        ]"
    >
        <Logo size="16" type="faded" class="hidden sm:flex" />
        <div class="text-[#717171]">
            © {{ new Date().getFullYear() }}
            Ernesto Rangel
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
</script>