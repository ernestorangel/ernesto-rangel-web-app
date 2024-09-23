<template>
    <div class="flex flex-col gap-16">
        <div>
            <Carousel />
        </div>
        <div class="flex flex-row gap-8">
            <Card v-for="info in homeFeaturedInfo" :title="info.title" :content="info.content"
                :actions="info.actions" />
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import Carousel from '../components/Carousel.vue';

export default {
    name: 'Home',
    components: {
        Card,
        Carousel
    },
    data() {
        return {
            homeFeaturedInfo: [
                {
                    content: '2+ years of experience as a software developer'
                },
                {
                    content: 'Masters Degree as Mechanical Engineer by UNESP'
                },
                {
                    content: 'Post-graduate as Software Engineer by PUC Minas'
                }
            ]
        }
    }
}
</script>