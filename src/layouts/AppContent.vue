<template>
  <div class="bg-[#00141d] min-h-[calc(100vh-195px)] z-10">
    <router-view v-slot="{ Component, route }">
      <Transition mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
</template>
