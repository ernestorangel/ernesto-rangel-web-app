<template>
    <div class="w-full flex flex-col md:flex-row justify-center py-12 px-8 gap-8">
        <section class="w-full md:w-1/2 xl:w-1/3 h-full flex flex-col border border-[#272727] bg-[#242424] rounded-lg p-8 gap-8">
            <form v-if="status == 'ready'"
                @submit.prevent="submitForm"
                class="flex flex-col gap-8"
            >

                <div class="flex flex-col gap-2">
                    <label for="name">Nome</label>
                    <input 
                        v-model="form.name"
                        id="name"
                        name="name" 
                        type="text" 
                        class="rounded-lg p-2 bg-[#171717]" 
                    />
                </div>
                
                <div class="flex flex-col gap-2">
                    <label for="name">E-mail</label>
                    <input
                        v-model="form.email"
                        id="email"
                        name="email" 
                        type="text" 
                        class="rounded-lg p-2 bg-[#171717]" 
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="name">Mensagem</label>
                    <textarea
                        v-model="form.message"
                        rows="12" 
                        id="message" 
                        name="message"
                        type="textarea" 
                        class="rounded-lg p-2 bg-[#171717]"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    class="p-4 rounded-lg bg-[#00D957] hover:bg-[#159046]"
                >
                    Enviar
                </button>
            </form>
            <div v-else-if="status == 'load'">
                Enviando...
            </div>
            <div v-else-if="status == 'sent'">
                Enviado!
                <button @click="setReadyStatus">
                    Envie outro.
                </button>
            </div>
            <div v-else-if="status == 'error'">
                Deu erro, xará!
            </div>
        </section>
        <div class="flex flex-col gap-8">
            <section
                v-for="contact in contactOptions"
                class="flex flex-col border border-[#272727] bg-[#242424] rounded-lg p-8 gap-8"
            >  
                <span class="flex items-center gap-4 text-xs md:text-lg font-bold text-[#717171]">
                    <Icon :icon="contact.icon" size="sm" color="#717171" />
                    {{ contact.name }}:
                </span>
                <a 
                    :href="contact.href" 
                    class="text-xs md:text-lg font-light hover:text-[#00D957]"
                >
                    {{ contact.value }}
                </a>
            </section>
        </div>
    </div>
</template>

<script setup>
import Icon from '../components/Icon.vue';
import { ref } from 'vue';
import axios from 'axios';

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

const form = ref({
    name: '',
    email: '',
    message: ''
})

function resetForm() {
    form.value = {
        name: '',
        email: '',
        message: ''
    }
}

const status = ref('ready')

function setLoadingStatus() {
    status.value = 'load'
}

function setSentStatus() {
    status.value = 'sent'
}

function setErrorStatus() {
    status.value = 'error'
}

function setReadyStatus() {
    status.value = 'ready'
}

async function submitForm() {
    setLoadingStatus()
    const response = await axios({
        method: 'POST',
        url: "https://api.web3forms.com/submit",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        data: JSON.stringify({
            access_key: '8efeade9-849c-4724-950c-b4c3bb07e2af',
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
        })
        
    })
    if (response.data.success) setSentStatus()
    else setErrorStatus()
    resetForm()
}
</script>
