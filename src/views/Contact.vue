<template>
  <div
    :class="[
      'w-full flex flex-col items-center justify-center gap-8',
      'py-12 px-4 sm:px-8 lg:px-8 xl:px-52',
    ]"
  >
    <div class="flex flex-col w-full gap-2">
      <span class="text-4xl"> Quer entrar em contato comigo? </span>
      <span class="text-lg font-light text-[#777777]">
        Deixe uma mensagem ou utilize um dos canais abaixo.
      </span>
    </div>
    <div class="w-full flex flex-col sm:flex-row gap-8">
      <section
        :class="[
          'w-full sm:w-2/3 h-full',
          'flex flex-col',
          'border border-white/30',
          'bg-white/10',
          'rounded-lg p-4 lg:p-8 gap-8',
        ]"
      >
        <Transition>
          <form
            v-if="status == 'ready'"
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
                class="rounded-lg p-2 bg-black/40 border border-white/30 outline-[#00D957] font-extralight"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="name">E-mail</label>
              <input
                v-model="form.email"
                id="email"
                name="email"
                type="text"
                class="rounded-lg p-2 bg-black/40 border border-white/30"
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
                class="rounded-lg p-2 bg-black/40 border border-white/30"
              ></textarea>
            </div>

            <button
              type="submit"
              class="p-4 rounded-lg bg-[#00D957] hover:bg-[#159046]"
            >
              Enviar
            </button>
          </form>
          <div
            v-else-if="status == 'load'"
            class="w-full h-[620px] flex flex-col items-center justify-center gap-4"
          >
            <div class="loader"></div>
            Enviando...
          </div>
          <div
            v-else-if="status == 'sent'"
            class="w-full h-[620px] flex flex-col items-center justify-center gap-4"
          >
            <div class="border-2 border-[#00D957] rounded-full p-4">
              <Icon icon="check" size="lg" color="#00D957" />
            </div>
            Enviado!
            <button
              @click="setReadyStatus"
              class="text-sm text-[#717171] hover:text-[#00D957]"
            >
              Clique aqui para enviar outro
            </button>
          </div>
          <div v-else-if="status == 'error'">Deu erro, xará!</div>
        </Transition>
      </section>
      <div class="w-full sm:w-1/3 flex flex-col gap-8">
        <section
          v-for="contact in contactOptions"
          :class="[
            'flex flex-col',
            'bg-white/10',
            'p-8 sm:p-4 lg:p-8 gap-4',
            'border border-white/30 rounded-md',
          ]"
        >
          <span
            :class="[
              'flex items-center gap-4',
              'text-sm lg:text-lg',
              'font-bold text-[#717171]',
            ]"
          >
            <Icon :icon="contact.icon" size="sm" color="#717171" />
            {{ contact.name }}
          </span>
          <a
            :href="contact.href"
            :class="['text-sm lg:text-lg', 'font-light hover:text-[#00D957]']"
          >
            {{ contact.value }}
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "../components/Icon.vue";
import { ref } from "vue";
import axios from "axios";

const contactOptions = [
  {
    icon: "mail",
    name: "E-mail",
    href: "mailto:ernestojrangel@gmail.com",
    value: "ernestojrangel@gmail.com",
  },
  {
    icon: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ernestorangel/",
    value: "linkedin.com/in/ernestorangel/",
  },
  {
    icon: "github",
    name: "GitHub",
    href: "https://github.com/ernestorangel",
    value: "github.com/ernestorangel",
  },
];

const form = ref({
  name: "",
  email: "",
  message: "",
});

function resetForm() {
  form.value = {
    name: "",
    email: "",
    message: "",
  };
}

const status = ref("ready");

function setLoadingStatus() {
  status.value = "load";
}

function setSentStatus() {
  status.value = "sent";
}

function setErrorStatus() {
  status.value = "error";
}

function setReadyStatus() {
  status.value = "ready";
}

async function submitForm() {
  setLoadingStatus();
  const response = await axios({
    method: "POST",
    url: "https://api.web3forms.com/submit",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      access_key: "8efeade9-849c-4724-950c-b4c3bb07e2af",
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    }),
  });
  if (response.data.success) setSentStatus();
  else setErrorStatus();
  resetForm();
}
</script>

<style scoped>
.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  mask: conic-gradient(from 15deg, #0000, #000);
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  animation: l26 1s infinite steps(12);
}

.loader,
.loader:before,
.loader:after {
  background:
    radial-gradient(closest-side at 50% 12.5%, #00d957 96%, #0000) 50% 0/20% 80%
      repeat-y,
    radial-gradient(closest-side at 12.5% 50%, #00d957 96%, #0000) 0 50%/80% 20%
      repeat-x;
}

.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}

.loader:after {
  transform: rotate(60deg);
}

@keyframes l26 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
