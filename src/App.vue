<template>
    <div class="bg-[#171717] text-white h-screen">
        <AppBar :routes="routes" @setLang="setLanguage" />
        <AppContent />
        <AppFooter />
    </div>
</template>

<script setup>
import AppBar from './layouts/AppBar.vue';
import AppContent from './layouts/AppContent.vue';
import AppFooter from './layouts/AppFooter.vue';

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import { getLangPack } from './lang';

const router = useRouter();

const lang = ref({})

const routes = computed(() => (
    router.getRoutes()
    .filter((route) => route.name)
    .map((route) => (
        {
            name: route.name,
            path: `/${route.name}`,
            label: lang.appBar?.nav[`${route.name}`] || route.name
        }
    ))
))

console.log(routes.value)

function setLanguage(langCode) {
    lang.value = getLangPack(langCode)
}
</script>

<style></style>