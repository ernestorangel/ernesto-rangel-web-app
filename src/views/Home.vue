<template>
    <div class="flex flex-col gap-16">
        <div>
            <DesktopWindow />
        </div>
        <div class="flex flex-row justify-center items-center gap-16">
            <Card 
                v-for="info in homeFeaturedInfo" 
                :title="info.title" 
                :content="info.content" 
                :action="info.action" 
            />
        </div>
    </div>
</template>

<script setup>
import Card from '../components/Card.vue';
import DesktopWindow from '../components/DesktopWindow.vue';

const homeFeaturedInfo = [
    {
        title: 'Mussum Ipsum',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    },
    {
        title: 'Mussum Ipsum',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    },
    {
        title: 'Mussum Ipsum',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    },
    {
        title: 'Mussum Ipsum',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    }
]
</script>