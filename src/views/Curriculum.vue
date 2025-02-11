<template>
    <Transition>
        <div class="w-full xl:px-52 2xl:px-96 flex flex-col items-center">
            <section class="flex items-center justify-center md:justify-end w-full p-8">
                <a
                    href="https://drive.google.com/file/d/1QoH1rYX-jRPr_NzkqKxj-k7-WYYCaGXK/view?usp=sharing"
                    target="_blank"
                    class="w-[260px] flex items-center justify-center p-4 rounded-lg bg-[#242424] hover:bg-[#454545]"
                >
                    Acessar versão em PDF
                </a>
            </section>

            <section class="w-full pb-8 px-8">
                <div class="text-4xl pb-4">Experiência Profissional</div>
                <div 
                    :class="[
                        'flex flex-col gap-4'
                    ]"
                >
                    <div 
                        v-for="experience in professionalHistory" 
                        :class="[
                            'flex flex-col gap-2',
                            'p-8 rounded-lg bg-[#242424] border border-[#454545]'
                        ]"
                    >
                        <div class="flex flex-col font-bold text-lg ">
                            <div class="flex gap-2">
                                <div>{{ experience.from }} - {{ experience.to }}</div>
                            </div>
                            <div class="text-[#00D957]">{{ experience.title }}</div>
                        </div>
                        
                        <div class="flex gap-2">
                            <div>{{ experience.company }} - {{ experience.location }} ({{ experience.mode }})</div>
                        </div>
                        

                        <div>
                            <ul class="flex flex-col gap-2">
                                <li 
                                    v-for="item in experience.description"
                                    class="font-light text-[#999999]"
                                >
                                    - {{ item }}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul class="flex gap-2 flex-wrap">
                                <li 
                                    v-for="tags in experience.tags"
                                    class="whitespace-nowrap py-1 px-4 rounded-lg text-sm text-[#AAC8E4] bg-gray-700"
                                >
                                    {{ tags }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w-full pb-8 px-8">
                <div class="text-4xl pb-4">Formação Acadêmica</div>
                <div 
                    :class="[
                        'flex flex-col gap-4'
                    ]"
                >
                    <div 
                        v-for="experience in academicHistory" 
                        :class="[
                            'flex flex-col gap-2',
                            'p-8 rounded-lg bg-[#242424] border border-[#454545]'
                        ]"
                    >
                        <div class="flex flex-col font-bold text-lg ">
                            <div class="flex gap-2">
                                <div>{{ experience.from }} - {{ experience.to }}</div>
                            </div>
                            <div class="text-[#00D957]">{{ experience.title }}</div>
                        </div>

                        <div class="flex gap-2">
                            <div>{{ experience.type }}</div>
                        </div>
                        
                        <div class="flex gap-2 font-light">
                            <div>{{ experience.institution }}</div>
                        </div>

                        <div>
                            <ul class="flex gap-2 flex-wrap">
                                <li 
                                    v-for="tags in experience.tags"
                                    class="py-1 px-4 rounded-lg text-sm text-[#AAC8E4] bg-gray-700"
                                >
                                    {{ tags }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w-full pb-8 px-8">
                <div class="text-4xl pb-4">Cursos & Certificações</div>
                <div 
                    :class="[
                        'flex flex-col gap-4'
                    ]"
                >
                    <div 
                        v-for="experience in coursesHistory" 
                        :class="[
                            'flex flex-col gap-2',
                            'p-8 rounded-lg bg-[#242424] border border-[#454545]'
                        ]"
                    >
                        <div class="flex flex-col font-bold text-lg ">
                            <div class="flex gap-2">
                                <div>{{ experience.from }} - {{ experience.to }}</div>
                            </div>
                            <div class="text-[#00D957]">{{ experience.title }}</div>
                        </div>

                        <div class="flex gap-2">
                            <div>{{ experience.type }}</div>
                        </div>
                        
                        <div class="flex gap-2 font-light">
                            <div>{{ experience.institution }}</div>
                        </div>

                        <div>
                            <ul class="flex gap-2 flex-wrap">
                                <li 
                                    v-for="tags in experience.tags"
                                    class="whitespace-nowrap py-1 px-4 rounded-lg text-sm text-[#AAC8E4] bg-gray-700"
                                >
                                    {{ tags }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w-full pb-8 px-8">
                <div class="text-4xl pb-4">Idiomas</div>
                <div 
                    :class="[
                        'flex flex-col gap-4'
                    ]"
                >
                    <div 
                        v-for="experience in languages" 
                        :class="[
                            'flex flex-col gap-2',
                            'p-8 rounded-lg bg-[#242424] border border-[#454545]'
                        ]"
                    >
                        <div class="flex flex-col font-bold text-lg ">
                            <div class="text-[#00D957]">
                                {{ experience.name }}
                            </div>
                        </div>

                        <div class="flex gap-2">
                            <div>{{ experience.level }}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Transition>
</template>

<script setup>
const professionalHistory = [
    {
        from: 'Ago 2024',
        to: 'Presente',
        company: 'Comerc Energia',
        location: 'Brasil',
        mode: 'Remoto',
        title: 'Desenvolvedor Front-end',
        description: [
            'Desenvolvimento do frontend das aplicações utilizando Vue.js e TailwindCSS (JavaScript)',
            'Versionamento, gerenciamento e manutenção de código usando GIT (Bitbucket)',
            'Uso de metodologia ágil (scrum) e software relacionado (Jira)'
        ],
        tags: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'GIT']
    },
    {
        from: 'Ago 2022',
        to: 'Jul 2024',
        company: 'Qualicorp',
        location: 'Brasil',
        mode: 'Remoto',
        title: 'Desenvolvedor Full-stack',
        description: [
            'Desenvolvimento do frontend das aplicações utilizando Vue.js e Vuetify (JavaScript)',
            'Desenvolvimento do backend das aplicações utilizando Node.js (JavaScript)',
            'Uso de linguagem Cypher para desenvolver consultas em base Neo4j (NoSQL)',
            'Versionamento, gerenciamento e manutenção de código usando GIT (Azure)',
            'Uso de metodologia ágil (scrum) e software relacionado (Jira)',
            'Experiência nas áreas de projetos e também de sustentação'
        ],
        tags: ['Vue.js', 'Vuetify', 'Node.js', 'JavaScript', 'Neo4j', 'GIT']
    },
    {
        from: 'Mar 2021',
        to: 'Jul 2022',
        company: 'LL Loyalty',
        location: 'Brasil',
        mode: 'Remoto',
        title: 'Analista de Dados (Financeiro & Comercial)',
        description: [
            'Automatização de processos e desenvolvimento de dashboards'
        ],
        tags: ['Python', 'PySpark', 'MySQL']
    }
]

const academicHistory = [
    {
        from: '2024',
        to: 'Presente',
        title: 'Engenharia de Software',
        type: 'Pós-graduação',
        institution: 'PUC Minas',
        description: ['Desenvolvimento de uma aplicação completa usando Node.js, Express, Sequelize e SQL'],
        tags: ['Agile', 'Scrum', 'Engenharia de Requisitos']
    },
    {
        from: '2016',
        to: '2023',
        title: 'Engenharia Mecânica',
        type: 'Graduação',
        institution: 'UNESP',
        description: ['Desenvolvimento de uma aplicação completa usando Node.js, Express, Sequelize e SQL'],
        tags: ['Cálculo', 'Estrutura de Dados', 'Programação Orientada a Objeto', 'Java']
    }
]

const coursesHistory = [
    {
        from: 'Jan 2022',
        to: 'Ago 2022',
        title: 'Desenvolvimento Web Full-Stack',
        type: 'Certificação',
        institution: 'Digital House',
        description: ['Desenvolvimento de uma aplicação completa usando Node.js, Express, Sequelize e SQL'],
        tags: ['Node.js', 'Express', 'Sequelize', 'SQL']
    }
]

const languages = [
    {
        name: 'Inglês',
        level: 'Avançado'
    },
    {
        name: 'Português (Brasileiro)',
        level: 'Nativo'
    }
]
</script>


<style scoped>
.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>