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
            <a
                v-if="props.action"
                :href="props.action.path"
                :class="flexProps[props.mode].action"
            >
                {{ props.action.label }}
        </a>
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
            'bg-theme-bg-2 border-theme-bg-4'
        ],
        imageContainer: ['w-full overflow-hidden'],
        image: ['rounded-l-lg'],
        infoContainer: ['w-full'],
        title: ['px-8 py-4 font-bold text-lg'],
        content: ['h-full px-8 py-4'],
        action: [
            'flex justify-end',
            'px-8 py-4',
            'cursor-pointer hover:text-theme-accent'
        ]
    },
    vertical: {
        container: [
            `w-[${props.width}px] h-[${props.heigth}px]`,
            'flex flex-col',
            'border rounded-lg',
            'bg-theme-bg-3 border-theme-border-md'
        ],
        imageContainer: ['w-full max-h-80 overflow-hidden'],
        image: ['rounded-t-lg'],
        infoContainer: ['w-full'],
        title: ['px-8 py-4 font-bold text-xl text-theme-accent'],
        content: ['px-8 py-4'],
        action: [
            'flex justify-end',
            'px-8 py-4',
            'cursor-pointer text-theme-tag-text hover:text-theme-accent'
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
