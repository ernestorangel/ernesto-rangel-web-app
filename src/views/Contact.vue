<template>
    <div class="py-12 px-8">
        <section class="flex flex-col border border-[#272727] rounded-lg p-8 gap-8">
            <ul class="flex flex-col gap-8">
                <li 
                    v-for="contact in contactOptions"
                    class="flex flex-col md:flex-row items-center gap-4"
                >
                    <Icon :icon="contact.icon" size="sm" color="#717171" />
                    <span class="text-xs md:text-lg font-bold text-[#717171]">
                        {{ contact.name }}:
                    </span>
                    <a 
                        :href="contact.href" 
                        class="text-xs md:text-lg font-light hover:text-[#00D957]"
                    >
                        {{ contact.value }}
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
import Icon from '../components/Icon.vue';
const contactOptions = [
    {
        icon: 'mail',
        name: 'E-mail',
        href: 'mailto:ernestojrangel@gmail.com',
        value: 'ernestojrangel@gmail.com',
    },
    {
        icon: 'linkedin',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ernestorangel/',
        value: 'linkedin.com/in/ernestorangel/',
    },
    {
        icon: 'github',
        name: 'GitHub',
        href: 'https://github.com/ernestorangel',
        value: 'github.com/ernestorangel',
    }
]
</script>
