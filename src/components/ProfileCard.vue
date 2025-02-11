<template>
    <div class="flex flex-col md:flex-row md:w-[790px] rounded-lg bg-[#242424] border border-[#454545]">
        <div class="w-full flex flex-col gap-2 p-4">
            <div class="flex flex-col gap-1">
                <div class="text-2xl font-bold">Ernesto Rangel</div>
                <div class="flex items-center gap-1">
                    <Icon icon="location" size="sm" color="#717171" />
                    <div class="text-md text-[#717171]">Brasil</div>
                </div>
            </div>
            <div class="text-sm font-light">
                Sou um desenvolvedor Front-end  
                com  mais de 3 anos de experiência 
                e tenho colaborado com equipes para 
                desenvolver aplicações web escaláveis 
                e funcionais combinando boas práticas de 
                desenvolvimento com criatividade 
                para entregar experiências 
                digitais impactantes.
            </div>
            <div class="flex flex-col gap-2">
                <div class="font-bold">Principais Competências</div>
                <span>
                    <ul class="flex gap-3 flex-wrap">
                        <li
                            v-for="item in proficiencies"
                            class="whitespace-nowrap py-1 px-4 rounded-lg text-sm text-[#AAC8E4] bg-gray-700"
                        >
                            {{ item.label }}
                        </li>
                    </ul>
                </span>
            </div>
        </div>
        <div class="md:w-[420px] flex items-center  justify-center p-4">
            <img width="100%" src="../assets/images/pp-small.jpg" />
        </div>
    </div>
</template>

<script setup>
import Icon from './Icon.vue';

const proficiencies = [
    {
        index: 0,
        label: 'Vue.js'
    },
    {
        index: 1,
        label: 'Tailwind CSS'
    },
    {
        index: 2,
        label: 'Javascript'
    },
    {
        index: 3,
        label: 'HTML'
    },
    {
        index: 4,
        label: 'CSS'
    }
]
</script>