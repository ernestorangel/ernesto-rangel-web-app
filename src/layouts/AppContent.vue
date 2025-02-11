<template>
    <div class="pt-[55px] bg-gradient-to-t from-[#030a02] to-[#000000]">
        <router-view v-slot="{ Component, route }">
            <Transition mode="out-in">
                <component :is="Component" :key="route.path" />
            </Transition>
        </router-view>
    </div>
</template>

<style scoped>
.v-enter-active {
    transition: opacity 2s ease;
}

.v-leave-from {
    transition: opacity 2s ease;
}

.v-enter-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
}
</style>