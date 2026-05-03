const BASE = {
  name: "Ernesto Rangel",
  fullName: "Ernesto José Rangel de Castro Júnior",
  email: "ernestojrangel@gmail.com",
  github: "github.com/ernestorangel",
  githubUrl: "https://github.com/ernestorangel",
  linkedin: "linkedin.com/in/ernestorangel",
  linkedinUrl: "https://www.linkedin.com/in/ernestorangel/",
  site: "ernestorangel.dev",
};

export const I18N = {
  en: {
    ...BASE,
    locale: "en",
    tagline: "Software Engineer",
    location: "Sao Paulo, Brazil",
    locationShort: "Sao Paulo, BR",
    role: "Full-stack engineer",

    nav: {
      about: "About",
      work: "Work",
      stack: "Stack",
      blog: "Writing",
      soon: "Coming soon",
      contact: "Contact",
    },
    ui: {
      available: "Available for work — 2026",
      heroLead: "I build software that's",
      heroAdj1: "thoughtful,",
      heroAdj2: "durable,",
      heroAndFast: "and",
      heroAdj3: "fast.",
      subhead:
        "Full-stack SWE based in São Paulo. Four years across healthcare, energy, and retail — building front-ends in Vue and back-ends in Node.",
      ctaContact: "Get in touch",
      ctaWork: "See work history →",
      heroIntroEyebrow: "Hello,",
      heroIntroLine: "I'm Ernesto.",
      sectionAbout: "About",
      sectionExp: "Experience",
      sectionExpHeadline: {
        pre: "A few years building across",
        strong: "healthcare, energy, and retail",
        post: ".",
      },
      sectionStack: "Stack",
      sectionSoon: "On the way",
      sectionSoonHeadline: {
        pre: "A few things",
        strong: "I'm building",
        post: "next.",
      },
      sectionContact: "Contact",
      contactHeadline: {
        pre: "Got something solid",
        post: "to ",
        strong: "build?",
      },
      contactBlurb:
        "I'm open to full-stack work — particularly Vue and Node-based systems. Email is the best way.",
      miniBased: "Based in",
      miniLanguages: "Languages",
      miniCurrently: "Currently",
      miniBackground: "Background",
      miniEducation: "Education",
      miniBasedV: "São Paulo, BR",
      miniLanguagesV: "Portuguese · English (C1)",
      miniCurrentlyV: "Front-end @ ConnectPlug",
      miniBackgroundV: "Mech. Eng. → Software",
      miniEducationV: "PUC Minas, UNESP",
      labelEmail: "Email",
      labelGithub: "GitHub",
      labelLinkedin: "LinkedIn",
      footerLeft: "© 2026 — Ernesto Rangel",
      footerRight: "ernestorangel.dev",
      inProgress: "In progress",
      comingSoonTag: "Coming soon",
      jobAtConnector: "at",
      blogPageTitle: "Writing",
      blogPageSubtitle: "Notes on building software in JavaScript — patterns, mistakes, and small tools.",
      blogLoading: "Loading posts…",
      blogError: "Could not load posts. Try again later.",
      blogEmpty: "No posts yet. Check back soon.",
      blogFilterAll: "All",
      blogReadingMin: "min read",
    },

    bio: [
      "I'm a full-stack SWE based in São Paulo, Brazil. I came to software the long way around — through a mechanical engineering degree at UNESP — and the analytical habits that came with it still shape how I approach everything.",
      "Today I work mostly in the JavaScript ecosystem, building front-ends with Vue and back-ends with Node. I've shipped software in three regulated, sometimes unforgiving sectors: healthcare, energy, and retail point-of-sale.",
    ],

    experience: [
      {
        role: "Front-end Developer",
        company: "CPlug (LWSA Group)",
        sector: "Point-of-sale · Food service · Retail",
        period: "Aug 2025 — Present",
        summary:
          "Building a desktop POS for restaurants and retail with Vue and Electron.",
        bullets: [
          "Developing the Point-of-Sale system using Vue.js and Electron.",
          "Implementing desktop features with reliable integration to commercial peripherals and hardware.",
          "Focused on UX for fast-paced retail and food-service environments.",
        ],
        stack: ["Vue.js", "Electron", "JavaScript", "Desktop UX"],
      },
      {
        role: "Front-end Developer",
        company: "Comerc Energia",
        sector: "Energy",
        period: "Aug 2024 — Jul 2025",
        summary: "Dashboards and tooling for the Brazilian energy market.",
        bullets: [
          "Built applications for the energy market with Vue.js and Node.js.",
          "Crafted modern, responsive interfaces with Tailwind CSS and Vuetify, focused on high-performance dashboards.",
          "Integrated services and optimized data flows for the electric sector.",
        ],
        stack: ["Vue.js", "Node.js", "Tailwind", "Vuetify"],
      },
      {
        role: "Full-stack Developer",
        company: "Qualicorp",
        sector: "Healthcare",
        period: "Aug 2022 — Jul 2024",
        summary:
          "Full-stack work in healthcare, modeling complex relationships in a graph database.",
        bullets: [
          "Worked full-stack in the healthcare sector, with Node.js on the back-end.",
          "Modeled and queried complex data using Neo4j, a graph database.",
        ],
        stack: ["Node.js", "Neo4j", "JavaScript"],
      },
    ],

    skills: {
      Languages: ["JavaScript (ES6+)", "TypeScript", "Node.js"],
      "Front-end": [
        "Vue.js (2 & 3)",
        "Vuetify",
        "Tailwind CSS",
        "Electron",
        "CSS / SASS",
      ],
      "Back-end & DB": [
        "Node.js",
        "Express",
        "Restify",
        "Java",
        "MongoDB",
        "Neo4j",
      ],
      Tooling: ["Git", "Docker", "Scrum / Kanban"],
    },

    comingSoon: [
      {
        key: "blog",
        title: "Writing",
        tag: "Blog",
        blurb:
          "Notes on building software in JavaScript — patterns, mistakes, and small tools.",
      },
      {
        key: "courses",
        title: "Courses",
        tag: "Courses",
        blurb:
          "Long-form courses on Vue, Electron, and shipping desktop apps that hold up in production.",
      },
      {
        key: "downloads",
        title: "Downloads",
        tag: "Software",
        blurb:
          "A small collection of desktop tools and a SaaS in progress. Built quietly, released slowly.",
      },
    ],
  },

  pt: {
    ...BASE,
    locale: "pt",
    tagline: "Engenheiro de Software",
    location: "São Paulo, Brasil",
    locationShort: "São Paulo, BR",
    role: "Engenheiro de Software Full-stack",

    nav: {
      about: "Sobre",
      work: "Experiência",
      stack: "Stack",
      blog: "Artigos",
      soon: "Em breve",
      contact: "Contato",
    },
    ui: {
      available: "Disponível para projetos — 2026",
      heroLead: "Construo software que é",
      heroAdj1: "bem pensado,",
      heroAdj2: "durável,",
      heroAndFast: "e",
      heroAdj3: "rápido.",
      subhead:
        "Engenheiro de software full-stack, atualmente morando em São Paulo. Com quatro anos de experiência entre os setores de saúde, energia e varejo — construindo front-ends em Vue e back-ends em Node.",
      ctaContact: "Entrar em contato",
      ctaWork: "Ver experiência →",
      heroIntroEyebrow: "Olá,",
      heroIntroLine: "sou o Ernesto.",
      sectionAbout: "Sobre",
      sectionExp: "Experiência",
      sectionExpHeadline: {
        pre: "Alguns anos construindo em",
        strong: "saúde, energia e varejo",
        post: ".",
      },
      sectionStack: "Stack",
      sectionSoon: "A caminho",
      sectionSoonHeadline: {
        pre: "Algumas coisas",
        strong: "que estou construindo",
        post: "a seguir.",
      },
      sectionContact: "Contato",
      contactHeadline: {
        pre: "Tem algo de verdade",
        post: "pra ",
        strong: "construir?",
      },
      contactBlurb:
        "Estou aberto a trabalhos full-stack interessantes — especialmente em Vue e Node. E-mail é a melhor maneira de entrar em contato.",
      miniBased: "Localização",
      miniLanguages: "Idiomas",
      miniCurrently: "Atualmente",
      miniBackground: "Formação",
      miniEducation: "Educação",
      miniBasedV: "São Paulo, BR",
      miniLanguagesV: "Português · Inglês (C1)",
      miniCurrentlyV: "Front-end @ ConnectPlug",
      miniBackgroundV: "Eng. Mecânica → Software",
      miniEducationV: "PUC Minas, UNESP",
      labelEmail: "E-mail",
      labelGithub: "GitHub",
      labelLinkedin: "LinkedIn",
      footerLeft: "© 2026 — Ernesto Rangel",
      footerRight: "ernestorangel.dev",
      inProgress: "Em desenvolvimento",
      comingSoonTag: "Em breve",
      jobAtConnector: "na",
      blogPageTitle: "Artigos",
      blogPageSubtitle: "Anotações sobre construir software em JavaScript — padrões, erros e pequenas ferramentas.",
      blogLoading: "Carregando posts…",
      blogError: "Não foi possível carregar os posts. Tente novamente mais tarde.",
      blogEmpty: "Nenhum post ainda. Volte em breve.",
      blogFilterAll: "Todos",
      blogReadingMin: "min de leitura",
    },

    bio: [
      "Cheguei ao software por um caminho diferente — uma graduação em Engenharia Mecânica pela UNESP — e os hábitos analíticos que vieram com ela continuam moldando como abordo a resolução de problemas.",
      "Hoje trabalho principalmente no ecossistema JavaScript, construindo front-ends com Vue e back-ends com Node. Já entreguei software em três setores regulados e às vezes implacáveis: saúde, energia e PDV (varejo).",
    ],

    experience: [
      {
        role: "Desenvolvedor Front-end",
        company: "CPlug (Grupo LWSA)",
        sector: "Ponto de Venda · Food · Varejo",
        period: "Ago 2025 — Atual",
        summary:
          "Desenvolvimento de um PDV desktop para restaurantes e varejo com Vue e Electron.",
        bullets: [
          "Desenvolvimento do sistema de PDV (Ponto de Venda) utilizando Vue.js e Electron.",
          "Implementação de funcionalidades para Desktop, garantindo a integração eficiente com periféricos e hardware comercial.",
          "Foco em experiência do usuário (UX) para ambientes de varejo e alimentação.",
        ],
        stack: ["Vue.js", "Electron", "JavaScript", "UX Desktop"],
      },
      {
        role: "Desenvolvedor Front-end",
        company: "Comerc Energia",
        sector: "Energia",
        period: "Ago 2024 — Jul 2025",
        summary:
          "Dashboards e ferramentas para o mercado de energia brasileiro.",
        bullets: [
          "Desenvolvimento de aplicações voltadas ao mercado de energia utilizando Vue.js e Node.js.",
          "Criação de interfaces modernas e responsivas com Tailwind CSS e Vuetify, focando em dashboards de alta performance.",
          "Integração de serviços e otimização de fluxos de dados para o setor elétrico.",
        ],
        stack: ["Vue.js", "Node.js", "Tailwind", "Vuetify"],
      },
      {
        role: "Desenvolvedor Full-stack",
        company: "Qualicorp",
        sector: "Saúde",
        period: "Ago 2022 — Jul 2024",
        summary:
          "Trabalho full-stack em saúde, modelando relacionamentos complexos em banco de grafos.",
        bullets: [
          "Atuação como desenvolvedor Full-stack no setor de saúde, utilizando Node.js para o back-end.",
          "Modelagem e manipulação de dados complexos utilizando o banco de dados de grafos Neo4j.",
        ],
        stack: ["Node.js", "Neo4j", "JavaScript"],
      },
    ],

    skills: {
      Linguagens: ["JavaScript (ES6+)", "TypeScript", "Node.js"],
      "Front-end": [
        "Vue.js (2 e 3)",
        "Vuetify",
        "Tailwind CSS",
        "Electron",
        "CSS / SASS",
      ],
      "Back-end e BD": [
        "Node.js",
        "Express",
        "Restify",
        "Java",
        "MongoDB",
        "Neo4j",
      ],
      Ferramentas: ["Git", "Docker", "Scrum / Kanban"],
    },

    comingSoon: [
      {
        key: "blog",
        title: "Escrita",
        tag: "Blog",
        blurb:
          "Anotações sobre construir software em JavaScript — padrões, erros e pequenas ferramentas.",
      },
      {
        key: "courses",
        title: "Cursos",
        tag: "Cursos",
        blurb:
          "Cursos aprofundados sobre Vue, Electron e como entregar apps desktop que se sustentam em produção.",
      },
      {
        key: "downloads",
        title: "Downloads",
        tag: "Software",
        blurb:
          "Uma pequena coleção de ferramentas desktop e um SaaS em desenvolvimento. Construído com calma, lançado aos poucos.",
      },
    ],
  },
};
