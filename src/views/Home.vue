<template>
    <Transition>
        <main class="h-screen flex flex-col gap-8 justify-center items-center">
            <ProfileCard />
            <div class="!z-50 fixed bottom-4 right-4 lg:relative flex gap-4 py-8 px-8 bg-white/10 border border-white/30 rounded-full">
                <Menu />
            </div>
        </main>
    </Transition>
</template>

<script setup>
import Menu from '../components/Menu.vue';
import ProfileCard from '../components/ProfileCard.vue';
</script>