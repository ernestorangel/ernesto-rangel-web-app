<template>
    <div class="flex flex-col gap-16">
        <div>
            <Carousel />
        </div>
        <div class="flex flex-row justify-between gap-16">
            <Card title="teste" content="teste" />
            <Card title="teste" content="teste" />
            <Card title="teste" content="teste" />
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
    }
}
</script>