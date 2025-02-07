<template>
    <div :class="flexProps[props.mode].container" >
        <div
            v-if="props.image"
            :class="flexProps[props.mode].imageContainer" 
        >
            <img 
                :src="props.image" 
                :class="flexProps[props.mode].image" 
            />
        </div>
        <div :class="flexProps[props.mode].infoContainer">
            <div 
                v-if="props.title" 
                :class="flexProps[props.mode].title"
            >
                {{ props.title }}
            </div>
            <div 
                v-if="props.content" 
                :class="flexProps[props.mode].content"
            >
                <span>
                    {{ props.content }}
                </span>
            </div>
            <div 
                v-if="props.action" 
                @click="forwardTo(props.action.path)" 
                :class="flexProps[props.mode].action"
            >
                {{ props.action.label }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps([
    'title', 
    'image', 
    'content', 
    'action', 
    'mode',
    'heigth',
    'width'
])

const flexProps = {
    horizontal: {
        container: [
            `w-[${props.width}px] h-[${props.heigth}px]`,
            'flex flex-row',
            'border rounded-lg',
            'bg-[#171717] border-[#272727]'
        ],
        imageContainer: ['w-full overflow-hidden'],
        image: ['rounded-l-lg'],
        infoContainer: ['w-full'],
        title: ['px-8 py-4 font-bold text-lg'],
        content: ['h-full px-8 py-4'],
        action: [
            'flex justify-end',
            'px-8 py-4',
            'cursor-pointer hover:text-[#00D957]'
        ]
    },
    vertical: {
        container: [
            `w-[${props.width}px] h-[${props.heigth}px]`,
            'flex flex-col',
            'border rounded-md',
            'bg-[#171717] border-[#272727]',
            'hover:bg-[#272727] cursor-pointer'
        ],
        imageContainer: ['w-full max-h-80 overflow-hidden'],
        image: ['rounded-t-md'],
        infoContainer: ['w-full'],
        title: ['px-8 py-4 font-bold text-xl text-[#00D957]'],
        content: ['px-8 py-4'],
        action: [
            'flex justify-end',
            'px-8 py-4',
            'cursor-pointer text-[#AAC8E4] hover:text-[#00D957]'
        ]
    }
}


const router = useRouter()

function forwardTo(destination) {
    if (`${destination}`.includes('https://')) {
        window.open(destination);
    } else {
        router.push(destination);
    }
}
</script>