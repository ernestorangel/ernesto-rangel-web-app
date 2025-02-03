<template>
    <div class="sticky top-0 bg-[#171717]">
        <div class="w-full flex flex-row items-center justify-between border-b border-[#272727] text-[#717171] px-12 py-4 text-sm">
            <Logo size="32" type="primary" />
            <HamburgerMenu
                class="lg:hidden"
            >
                <template v-slot:content>
                    <nav class="h-full">
                        <ul class="h-full flex flex-col items-center">
                            <li 
                                v-for="(route, index) in props.routes" 
                                :key="index" 
                                @click="$router.push(route.path)"
                                :class="`h-full flex flex-row items-center px-4 rounded text-lg ${$route.path == route.path ? 'text-[#00D957] bg-[#555555]' : ''}  hover:bg-[#1f1f1f] cursor-pointer`"
                            >
                                {{ route.label }}
                            </li>
                        </ul>
                    </nav>
                </template>
            </HamburgerMenu>
            <div class="hidden lg:flex justify-center items-center gap-4">
                <nav class="h-full">
                    <ul class="h-full flex flex-row items-center">
                        <li 
                            v-for="(route, index) in props.routes" 
                            :key="index" 
                            @click="$router.push(route.path)"
                            :class="`h-full flex flex-row items-center px-4 rounded text-lg ${$route.path == route.path ? 'text-[#00D957] bg-[#555555]' : ''}  hover:bg-[#1f1f1f] cursor-pointer`"
                        >
                            {{ route.label }}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';
import HamburgerMenu from '../components/HamburgerMenu.vue';

import { ref } from 'vue';

const languages = [
    {
        value: 'pt-BR',
        label: 'Português Brasileiro',
        icon: 'br-flag'
    },
    {
        value: 'en-US',
        label: 'English (US)',
        icon: 'us-flag'
    }
]

const selectedLanguage = ref('pt-BR')

const props = defineProps(['routes'])
const emit = defineEmits(['setLang'])
</script>
