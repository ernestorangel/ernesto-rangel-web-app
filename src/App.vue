<template>
    <div class="bg-[#171717] text-white h-screen">
        <AppBar />
        <AppContent />
        <AppFooter />
    </div>
</template>

<script>
import AppBar from './layouts/AppBar.vue';
import AppContent from './layouts/AppContent.vue';
import AppFooter from './layouts/AppFooter.vue';
    
export default {
    name: 'App',
    components: {
        AppBar,
        AppContent,
        AppFooter,
    }
}
</script>

<style></style>