<template>
  <div class="bg-[#00141d] min-h-[100vh] z-10">
    <router-view v-slot="{ Component, route }">
      <Transition mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
</template>
