<template>
    <div class="w-[320px] rounded-lg bg-[#171717] border border-[#272727]">
        <div 
            v-if="props.title" 
            class="border-b border-[#272727] px-8 py-4"
        >
            {{ props.title }}
        </div>
        <div 
            v-if="props.content" 
            class="px-8 py-4 text-[32px] font-bold text-center"
        >
            <span>
                {{ props.content }}
            </span>
        </div>
        <div 
            v-if="props.action" 
            @click="router.push(props.action.path)" 
            class="flex justify-end border-t border-[#272727] px-8 py-4"
        >
            {{ props.action.label }}
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['title', 'content', 'action'])

const router = useRouter()
</script>