export default function useLanguageContent() {
  const DEFAULT_LANGUAGE = "PT-BR";

  const translateLanguage = {
    "PT-BR": {
      profileCard: {
        name: "Ernesto Rangel",
        location: "Brasil",
        ocupation: "Desenvolvedor Front-end",
        description:
          "com uma sólida experiência no mercado \
                e colaborando com equipes ágeis para \
                desenvolver aplicações web escaláveis \
                e funcionais combinando boas práticas de \
                desenvolvimento com criatividade \
                para entregar experiências \
                digitais impactantes.",
        highlightTitle: "Principais Competências",
      },
    },
    "EN-US": {
      profileCard: {
        name: "Ernesto Rangel",
        location: "Brazil",
        ocupation: "Front-end Developer",
        description:
          "with a solid work experience \
                collaborating with agile teams to \
                develop scalable and functional web applications \
                combining good development practices \
                with creativity to deliver \
                impactful digital experiences",
        highlightTitle: "Main Skills",
      },
    },
  };

  const getContent = (lang, component) => translateLanguage[lang][component];

  return { DEFAULT_LANGUAGE, getContent };
}
