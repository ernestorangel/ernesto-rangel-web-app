<template>
    <div 
        :class="[
            'h-full flex flex-row justify-center items-center',
            `text-${props.size} font-normal tracking-widest`,
            'pl-8 border-[#454545]',
            `${props.type == 'primary' ? 'border-b' : ''}`
        ]"
    >
        <span :class="`text-[${secondaryColor}]`">{{ `<`  }}</span>
        <span :class="`text-[${mainColor}]`">{{ 'ernesto' }}</span>
        <span :class="`text-[${secondaryColor}]`">{{ 'rangel' }}</span>
        <span :class="`text-[${mainColor}]`">{{ '.dev' }}</span>
        <span :class="`text-[${secondaryColor}]`">{{ '/>' }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['size', 'type'])

const mainColor = computed(() => {
    if (props.type == 'primary') return '#00D957'
    if (props.type == 'faded') return '#717171'
})

const secondaryColor = computed(() => {
    if (props.type == 'primary') return '#BCBCBC'
    if (props.type == 'faded') return '#505050'
})
</script>