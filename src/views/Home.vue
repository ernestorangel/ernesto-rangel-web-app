<template>
    <div class="flex flex-col gap-16">
        <div>
            <Carousel />
        </div>
        <div class="flex flex-row justify-center items-center gap-16">
            <Card 
                v-for="info in homeFeaturedInfo" 
                :title="info.title" 
                :image="info.image"
                :content="info.content" 
                :action="info.action"
                :mode="'vertical'"
            />
        </div>
    </div>
</template>

<script setup>
import Card from '../components/Card.vue';
import Carousel from '../components/Carousel.vue';

const homeFeaturedInfo = [
    {
        title: 'Mussum Ipsum',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    },
    {
        title: 'Mussum Ipsum',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    },
    {
        title: 'Mussum Ipsum',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    },
    {
        title: 'Mussum Ipsum',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Mussum Ipsum, cacilds vidis litro abertis.',
        action: {
            label: 'litro abertis',
            path: '/about'
        }
    }
]
</script>