<template>
    <nav>
        <ul class="flex flex-col lg:flex-row items-center justify-center">
            <li 
                v-for="(route, index) in routes" 
                :key="index" 
                @click="forwardTo(route.path)"
                :class="[
                    'flex items-center justify-center',
                    'py-4 lg:px-4 lg:py-0',
                    'w-full h-full text-sm lg:border-b border-[#272727]',
                    'hover:bg-[#1f1f1f] cursor-pointer',
                    'transition duration-300 ease-in-out',
                    `${isCurrentRouteCSS(route.path)}`
                ]"
            >
                {{ capitalizeFirstLetter(route.label) }}
            </li>
        </ul>
        <div class="w-full flex">
            <button 
                :class="[
                    'flex items-center justify-center',
                    'w-full py-4 lg:px-4 lg:py-0',
                    'hover:bg-[#1f1f1f]',
                    'lg:border-l lg:border-r lg:border-b border-[#272727]'
                ]"
            >
                <Icon icon="moon" size="sm" color="#717171" />
            </button>
            <ul class="w-full flex flex-row items-center justify-center">
                <li 
                    v-for="(link, index) in socialLinks" 
                    :key="index"
                    @click="forwardTo(link.href)"
                    :class="[
                        'flex items-center justify-center',
                        'py-4 lg:px-4 lg:py-0',
                        'w-full h-full text-sm lg:border-b border-[#272727]',
                        'hover:bg-[#1f1f1f] cursor-pointer'
                    ]"
                >
                    <Icon :icon="link.icon" size="sm" color="#717171" />
                </li>
            </ul>
        </div>
    </nav>
</template>



<script setup>
import Icon from './Icon.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const socialLinks = [
    {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/ernestorangel/'
    },
    {
        icon: 'github',
        href: 'https://github.com/ernestorangel'
    }
]

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

function isCurrentRouteCSS(refPath) {
    if (router.currentRoute.value.path == refPath) {
        return 'text-[#00D957] border-[#00D957]'
    }
    return ''
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
</script>