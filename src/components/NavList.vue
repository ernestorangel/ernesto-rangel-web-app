<template>
    <nav>
        <ul class="flex flex-col lg:flex-row items-center justify-center">
            <li 
                v-for="(route, index) in routes" 
                :key="index" 
                @click="forwardTo(route.path)"
                :class="[
                    'w-full h-full px-4 py-8 text-lg',
                    `${$route.path == route.path ? 'text-[#00D957] bg-[#555555]' : ''}`,
                    'hover:bg-[#1f1f1f] cursor-pointer'
                ]"
            >
                {{ route.label }}
            </li>
        </ul>
    </nav>
</template>



<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const routes = computed(() => (
    router.getRoutes()
    .filter((route) => route.name)
    .map((route) => (
        {
            name: route.name,
            path: `/${route.name}`,
            label: route.name
        }
    ))
))

function forwardTo(destination) {
    if (`${destination}`.includes('https://')) {
        window.open(destination);
    } else {
        router.push(destination);
    }
}
</script>