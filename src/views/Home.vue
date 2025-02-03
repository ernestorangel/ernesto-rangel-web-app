<template>
    <main class="flex flex-col gap-16">
        <section>
            <Carousel />
        </section>
        <section class="flex flex-row justify-center items-center gap-8">
            <Card 
                v-for="info in homeFeaturedInfo" 
                :title="info.title" 
                :image="info.image"
                :content="info.content" 
                :action="info.action"
                :mode="'vertical'"
            />
        </section>
    </main>
</template>

<script setup>
import Card from '../components/Card.vue';
import Carousel from '../components/Carousel.vue';

const homeFeaturedInfo = [
    {
        title: 'Experiência Profissional',
        image: 'https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: '3+ anos de experiência no mercado de trabalho.',
        action: {
            label: 'veja mais',
            path: '/about'
        }
    },
    {
        title: 'Formação Acadêmica',
        image: 'https://images.pexels.com/photos/2293019/pexels-photo-2293019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Graduado pela UNESP e pós-graduando pela PUC Minas.',
        action: {
            label: 'veja mais',
            path: '/about'
        }
    },
    {
        title: 'Certificados & Qualificações',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Certificado como Desenvolvedor Full-stack e mais.',
        action: {
            label: 'veja mais',
            path: '/about'
        }
    }
]
</script>