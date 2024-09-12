<template>
    <div class="bg-[#171717]">
        <div class="border-b-2 border-[#272727] px-64 py-2 text-xs">
            ernestojrangel@gmail.com
        </div>
        <div class="flex flex-row justify-between items-center px-64 py-8">
            <div class="text-[32px] font-bold">
                <span class="text-[#BCBCBC]">{{ `<` }}</span>
                        <span class="text-[#00D957]">{{ 'ernesto' }}</span>
                        <span class="text-[#BCBCBC]">{{ 'rangel' }}</span>
                        <span class="text-[#00D957]">{{ '.dev' }}</span>
                        <span class="text-[#BCBCBC]">{{ '/>' }}</span>
            </div>
            <div>
                <ul class="flex flex-row justify-between gap-8">
                    <li class="hover:text-[#00D957] cursor-pointer">
                        <a @click="$router.push('/home')">
                            Home
                        </a>
                    </li>
                    <li class="hover:text-[#00D957] cursor-pointer">
                        <a @click="$router.push('/about')">
                            About Me
                        </a>
                    </li>
                    <li class="hover:text-[#00D957] cursor-pointer">
                        <a @click="$router.push('/curriculum')">
                            Curriculum
                        </a>
                    </li>
                    <li class="hover:text-[#00D957] cursor-pointer">
                        <a @click="$router.push('/portfolio')">
                            Portfolio
                        </a>
                    </li>
                    <li class="hover:text-[#00D957] cursor-pointer">
                        <a @click="$router.push('/contact')">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppBar'
    }
</script>
