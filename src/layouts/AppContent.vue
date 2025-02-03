<template>
    <div class="bg-[#171717] p-12">
        <router-view v-slot="{ Component, route }">
            <Transition mode="out-in">
                <component :is="Component" :key="route.path" />
            </Transition>
        </router-view>
    </div>
</template>

<style scoped>
.v-enter-active {
    transition: opacity 0.5s ease;
}

.v-leave-from {
    transition: opacity 0.5s ease;
}

.v-enter-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
}
</style>