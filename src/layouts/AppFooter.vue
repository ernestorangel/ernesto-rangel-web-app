<template>
    <div 
        :class="[
            'flex flex-col items-center justify-center', 
            'sm:flex-row sm:justify-between',
            'px-8 lg:px-24 py-8',
            'bg-transparent text-[#fafafa]',
            'border-t border-[#272727]'
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