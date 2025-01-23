<template>
    <div class="sticky top-0 bg-[#171717]">
        <div class="w-full flex flex-row items-center justify-between border-b border-[#272727] text-[#717171] px-12 py-2 text-sm">
            <Logo size="24" type="primary" />
            <div class="flex justify-center items-center gap-4">
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
                <!-- <select 
                    v-model="selectedLanguage" 
                    @input="emit('setLang', selectedLanguage)" 
                    class="rounded-full px-4 py-2 bg-[#838383] text-[#000000]"
                >
                    <option v-for="lang in languages" :value="lang.value">
                        {{ lang.label }}
                    </option>
                </select> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue';

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
