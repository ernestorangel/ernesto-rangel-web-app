<template>
  <Transition>
    <main
      class="min-h-[calc(100vh-195px)] flex flex-col gap-8 justify-center items-center"
    >
      <ProfileCard />
    </main>
  </Transition>
</template>

<script setup>
import ProfileCard from "../components/ProfileCard.vue";
</script>
