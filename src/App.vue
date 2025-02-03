<template>
    <div class="bg-[#171717] text-white h-screen">
        <AppBar />
        <Transition>
            <AppContent />
        </Transition>
        <AppFooter />
    </div>
</template>

<script setup>
import AppBar from './layouts/AppBar.vue';
import AppContent from './layouts/AppContent.vue';
import AppFooter from './layouts/AppFooter.vue';
</script>

<style scoped>
.v-enter-active {
    transition: opacity 1s ease;
}

/* .v-leave-from {

} */

.v-enter-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
}
</style>