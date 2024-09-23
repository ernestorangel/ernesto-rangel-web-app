<template>
    <div class="sticky top-0 bg-[#171717]">
        <div
            class="w-full flex flex-row items-center justify-between border-b-2 border-[#272727] text-[#717171] px-64 py-2 text-xs">
            <div>ernestojrangel@gmail.com</div>
            <div><i class="fi fi-sr-sun"></i></div>
        </div>
        <div class="h-[86px] flex flex-row justify-between items-center px-64">
            <div class="h-full flex flex-row items-center text-[32px] font-bold">
                <span class="text-[#BCBCBC]">{{ `<` }}</span>
                        <span class="text-[#00D957]">{{ 'ernesto' }}</span>
                        <span class="text-[#BCBCBC]">{{ 'rangel' }}</span>
                        <span class="text-[#00D957]">{{ '.dev' }}</span>
                        <span class="text-[#BCBCBC]">{{ '/>' }}</span>
            </div>
            <nav class="h-full">
                <ul class="h-full flex flex-row items-center">
                    <li v-for="(route, index) in routes" :key="index" @click="$router.push(route.path)"
                        :class="`h-full flex flex-row items-center px-4 ${$route.path == route.path ? 'text-[#00D957] bg-[#1b1b1b]' : ''}  hover:bg-[#1f1f1f] cursor-pointer`">
                        {{ route.label }}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppBar',
        data() {
            return {
                routes: [
                    {
                        path: '/home',
                        label: 'Home'
                    },
                    {
                        path: '/about',
                        label: 'About'
                    },
                    {
                        path: '/curriculum',
                        label: 'Curriculum'
                    },
                    {
                        path: '/portfolio',
                        label: 'Portfolio'
                    },
                    {
                        path: '/contact',
                        label: 'Contact'
                    },
                ]
            }
        },
    }
</script>
