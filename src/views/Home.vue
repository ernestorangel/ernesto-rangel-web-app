<template>
    <Transition>
        <main class="flex flex-col">
            <section 
                :class="[
                    'flex flex-row justify-center items-center', 
                    'pt-8 lg:pt-12 px-8'
                ]"
            >
                <ProfileCard />
            </section>
            <section 
                :class="[
                    'flex flex-col justify-center items-center',
                    'gap-8 py-12 px-8',
                    'md:flex-row md:px-8 lg:px-24 xl:px-54 2xl:px-72'
                ]"
            >
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
    </Transition>
</template>

<script setup>
import Card from '../components/Card.vue';
import ProfileCard from '../components/ProfileCard.vue';

const homeFeaturedInfo = [
    {
        title: 'Experiência Profissional',
        image: 'https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: '3 anos de experiência no mercado de trabalho.',
        action: {
            label: 'Veja mais',
            path: '/curriculum#professional-experience'
        }
    },
    {
        title: 'Formação Acadêmica',
        image: 'https://images.pexels.com/photos/2293019/pexels-photo-2293019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Graduado pela UNESP e pós-graduando pela PUC Minas.',
        action: {
            label: 'Veja mais',
            path: '/curriculum#academic-history'
        }
    },
    {
        title: 'Certificados & Qualificações',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Certificado como Desenvolvedor Full-stack pela DigitalHouse.',
        action: {
            label: 'Veja mais',
            path: '/curriculum#courses-and-certifications'
        }
    }
]
</script>

<style scoped>
.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>