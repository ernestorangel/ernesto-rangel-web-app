<template>
    <div>
        <Card 
            v-for="project in projects"
            :title="project.title"
            :image="project.image"
            :content="project.content" 
            :action="project.action"
            :mode="'horizontal'"
            :heigth="120"
            :width="120"
        />
    </div>
</template>

<script setup>
import Card from '../components/Card.vue'

const projects = [
    {
        title: "CT da Construção Website",
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: "Mussum Ipsum litro abertis",
        action: {
            label: 'Clique aqui',
            path: 'https://ctdaconstrucao.com'
        }
    }
]
</script>