// Source de vérité unique du portfolio.
// Les valeurs entre crochets "[...]" sont à compléter par Abdoulaye.

export const profile = {
  // --- Identité ---
  name: { full: "Abdoulaye Sonko Touré", initials: "AST", slug: "abdoulaye-sonko-toure" },

  headline: {
    fr: [
      "Étudiant en droit des affaires & fiscalité",
      "Recherche juridique & analyse de textes",
      "À la recherche d'un stage / d'une alternance",
    ],
    en: [
      "Business & Tax Law student",
      "Legal research & statutory analysis",
      "Seeking an internship / apprenticeship",
    ],
  },

  location: { fr: "Mbour, Sénégal", en: "Mbour, Senegal" },
  email: "ablayetour18@gmail.com",
  phone: "+221 77 449 76 82",
  linkedin: null,
  linkedinSoon: true,
  github: null,
  website: null,
  photo: null,
  cvPath: "/assets/cv.pdf",

  // --- À propos ---
  about: {
    fr: "Étudiant en double Licence de droit des affaires et fiscalité, menée à l'Université Cheikh Hamidou Kane et à l'Institut supérieur de Management, j'ai été élu à deux reprises Ministre des Affaires étrangères du gouvernement étudiant de mon établissement. Je travaille en quatre langues et je m'oriente vers la recherche juridique et l'analyse de textes appliquées au droit des affaires. Je recherche un stage ou une alternance confrontée à des dossiers fiscaux et contractuels concrets.",
    en: "A Business & Tax Law student pursuing a double Bachelor's degree at Université Cheikh Hamidou Kane and Institut supérieur de Management, I was twice elected Minister of Foreign Affairs of my institution's student government. I work in four languages and I am focused on legal research and statutory analysis applied to business law. I am looking for an internship or apprenticeship dealing with concrete tax and contractual matters.",
  },

  // --- Engagement & expérience ---
  experience: [
    {
      role: {
        fr: "Ministre chargé des Affaires étrangères",
        en: "Minister of Foreign Affairs — Student Government",
      },
      org: {
        fr: "Gouvernement étudiant — Institut supérieur de Management",
        en: "Student Government — Institut supérieur de Management",
      },
      period: "2023 – 2025",
      type: { fr: "Mandat électif étudiant", en: "Elected student office" },
      bullets: {
        fr: [
          "Élu à deux reprises Ministre des Affaires étrangères du gouvernement étudiant de l'établissement.",
          "Représenté les étudiants dans les relations avec les partenaires et institutions [partenaires à préciser].",
          "Co-organisé des activités étudiantes [type, fréquence et ampleur à préciser].",
        ],
        en: [
          "Twice elected Minister of Foreign Affairs of the institution's student government.",
          "Represented students in relations with partners and institutions [partners to be specified].",
          "Co-organised student activities [type, frequency and scale to be specified].",
        ],
      },
    },
    {
      role: { fr: "Stage d'observation", en: "Observation internship" },
      org: { fr: "Cabinet juridique — Mbour", en: "Law firm — Mbour" },
      period: { fr: "[Période à compléter]", en: "[Dates to be added]" },
      type: { fr: "Stage", en: "Internship" },
      bullets: {
        fr: [
          "Observé le traitement de dossiers juridiques au sein d'un cabinet à Mbour.",
          "Missions confiées et types de dossiers suivis [à détailler].",
        ],
        en: [
          "Observed the handling of legal cases within a law firm in Mbour.",
          "Tasks assigned and types of cases followed [to be detailed].",
        ],
      },
    },
  ],

  // --- Formation ---
  education: [
    {
      degree: {
        fr: "Licence en droit des affaires et fiscalité",
        en: "Bachelor's in Business & Tax Law",
      },
      school: "Université Cheikh Hamidou Kane",
      period: "2023 – 2026",
      note: { fr: "En cours · Business and Tax Law", en: "In progress · Business and Tax Law" },
    },
    {
      degree: { fr: "Licence en droit des affaires", en: "Bachelor's in Business Law" },
      school: "Institut supérieur de Management",
      period: "2023 – 2026",
      note: { fr: "En cours · double formation", en: "In progress · double degree" },
    },
    {
      degree: { fr: "Baccalauréat — série L", en: "Baccalauréat — Literature track" },
      school: "",
      period: "2023",
      note: null,
    },
  ],

  // --- Compétences (regroupées, sans niveau affiché : profil junior) ---
  skills: {
    fr: [
      { group: "Juridique", items: ["Recherche juridique", "Analyse de textes juridiques"] },
      { group: "Bureautique", items: ["Microsoft Word", "Excel"] },
      {
        group: "Savoir-faire",
        items: ["Esprit critique", "Argumentation", "Travail en équipe", "Sens de l'organisation"],
      },
    ],
    en: [
      { group: "Legal", items: ["Legal research", "Statutory analysis"] },
      { group: "Office tools", items: ["Microsoft Word", "Excel"] },
      {
        group: "Strengths",
        items: ["Critical thinking", "Argumentation", "Teamwork", "Organisational sense"],
      },
    ],
  },

  // --- Langues ---
  languages: {
    fr: [
      { name: "Français", level: "C1", tag: "Courant" },
      { name: "Anglais", level: "B2", tag: "Avancé" },
      { name: "Italien", level: "B2", tag: "Avancé" },
      { name: "Wolof", level: "Natif", tag: "Langue maternelle" },
    ],
    en: [
      { name: "French", level: "C1", tag: "Fluent" },
      { name: "English", level: "B2", tag: "Advanced" },
      { name: "Italian", level: "B2", tag: "Advanced" },
      { name: "Wolof", level: "Native", tag: "Mother tongue" },
    ],
  },

  // --- Centres d'intérêt ---
  interests: {
    fr: ["Lecture juridique", "Débats", "Actualités politiques et juridiques"],
    en: ["Legal reading", "Debating", "Political & legal current affairs"],
  },
};
