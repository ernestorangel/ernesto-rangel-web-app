<template>
  <Transition>
    <div class="relative min-h-screen overflow-hidden bg-[#00141d]">
      <!-- 1. Textura / Padrão de Pontos -->
      <div
        class="absolute inset-0 z-0 opacity-10 bg-dots pointer-events-none"
      ></div>

      <!-- 2. Luzes Ambiente (Glow/Blobs) -->
      <div
        class="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-teal-600 opacity-20 blur-[100px] md:blur-[140px] z-0 pointer-events-none"
        style="animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      ></div>
      <div
        class="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-cyan-600 opacity-15 blur-[120px] md:blur-[160px] z-0 pointer-events-none"
        style="
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse;
        "
      ></div>

      <main
        class="min-h-screen flex flex-col sm:items-center justify-center gap-2 px-12 z-10"
      >
        <h1
          class="text-6xl font-bold text-teal-600 tracking-tight text-left sm:text-center mb-2"
        >
          Ernesto Rangel
        </h1>
        <h2
          class="text-2xl font-medium text-gray-300 pl-1 text-left sm:text-center mb-6"
        >
          Software Engineer
        </h2>
        <ul
          class="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pl-2 sm:pl-0 sm:items-center w-full"
        >
          <li v-for="(link, index) in socialLinks" :key="index">
            <a
              :href="link.href"
              target="_blank"
              class="flex items-center gap-2 text-xl text-gray-400 cursor-pointer hover:text-gray-200 transition duration-300 ease-in-out"
            >
              <Icon :icon="link.icon" size="lg" color="#fafafa" />
              {{ link.displayName }}
            </a>
          </li>
        </ul>
      </main>
    </div>
  </Transition>
</template>

<script setup>
import Icon from "../components/Icon.vue";
import ProfileCard from "../components/ProfileCard.vue";

const socialLinks = [
  {
    displayName: "LinkedIn",
    href: "https://www.linkedin.com/in/ernestorangel/",
    icon: "linkedin",
  },
  {
    displayName: "GitHub",
    href: "https://github.com/ernestorangel",
    icon: "github",
  },
];
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(#0d9488 1.5px, transparent 1.5px);
  background-size: 32px 32px;
}
</style>
