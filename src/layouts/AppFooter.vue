<template>
    <div 
        :class="[
            'flex flex-col items-center justify-center', 
            'sm:flex-row sm:justify-between',
            'h-[110px] px-8 lg:px-24',
            'bg-white/10 backdrop-blur-sm text-[#fafafa]',
            'border-t border-white/30 shadow xl'
        ]"
    >
        <Logo size="16" type="faded" class="hidden sm:flex" />
        <div>
            © {{ new Date().getFullYear() }}
            Ernesto Rangel
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
</script>