<template>
    <div class="flex justify-between px-12 py-8 bg-[#171717] border-t border-[#272727]">
        <Logo size="16" type="faded" />
        <div>
            © {{ new Date().getFullYear() }}
            Desenvolvido por Ernesto Rangel
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
</script>