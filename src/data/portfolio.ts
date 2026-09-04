export type PortfolioCategory =
  | "Estratégia"
  | "Social Media"
  | "Tráfego"
  | "Audiovisual"
  | "Fotografia";

export type PublicationStatus = "pending" | "published";

export interface PortfolioCase {
  id: string;
  name: string;
  segment: string;
  title: string;
  challenge: string;
  solution: string;
  services: PortfolioCategory[];
  mediaSlots: string[];
  resultConfirmed: string;
  externalUrl: string;
  publicationStatus: PublicationStatus;
  authorizationStatus: "pending" | "authorized";
  featured: boolean;
  validationNotes: string[];
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: "blessed-studio-premium",
    name: "Blessed Studio Premium",
    segment: "Treinamento personalizado e saúde",
    title: "Comunicação que acompanhou a expansão de uma marca.",
    challenge: "Confirmar com o cliente a redação do desafio antes da publicação.",
    solution: "Posicionamento e comunicação construídos para acompanhar uma nova fase da operação.",
    services: ["Estratégia", "Social Media", "Audiovisual"],
    mediaSlots: [
      "IMG_CASE_BLESSED_PREMIO_01",
      "IMG_CASE_BLESSED_PREMIO_02",
      "IMG_CASE_BLESSED_UNIDADE_01",
      "IMG_CASE_BLESSED_CONTEUDO_01",
      "VIDEO_CASE_BLESSED_01",
      "VIDEO_CASE_BLESSED_02",
    ],
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: true,
    validationNotes: [
      "Confirmar o aumento de alunos e o período analisado.",
      "Confirmar a quantidade atual de unidades.",
      "Confirmar o nome oficial do reconhecimento de 2024.",
      "Obter autorização para publicar marca, imagens e resultado.",
    ],
  },
  {
    id: "remo-santos",
    name: "Cobertura esportiva Remo x Santos",
    segment: "Fotografia esportiva e cobertura de eventos",
    title: "O momento certo, registrado dentro do campo.",
    challenge: "Confirmar o escopo e a autoria da cobertura antes da publicação.",
    solution: "Registros de jogo, atletas e bastidores realizados no Mangueirão, em Belém.",
    services: ["Fotografia", "Audiovisual"],
    mediaSlots: [
      "IMG_CASE_REMO_SANTOS_01",
      "IMG_CASE_REMO_SANTOS_02",
      "IMG_CASE_REMO_SANTOS_03",
      "IMG_CASE_REMO_SANTOS_04",
      "VIDEO_CASE_REMO_SANTOS_01",
      ...Array.from({ length: 12 }, (_, index) =>
        `IMG_CASE_REMO_SANTOS_GALLERY_${String(index + 1).padStart(2, "0")}`,
      ),
    ],
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: true,
    validationNotes: [
      "Confirmar a autorização de publicação das fotografias.",
      "Confirmar o crédito correto do fotógrafo.",
      "Validar direitos de imagem e uso editorial de atletas e marcas.",
    ],
  },
  {
    id: "postos-movix",
    name: "Postos Movix",
    segment: "Postos, mobilidade e serviços automotivos",
    title: "Projeto em validação",
    challenge: "",
    solution: "",
    services: ["Social Media", "Audiovisual"],
    mediaSlots: ["IMG_CASE_MOVIX_01", "IMG_CASE_MOVIX_02", "VIDEO_CASE_MOVIX_01", "VIDEO_CASE_MOVIX_02"],
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: false,
    validationNotes: ["Confirmar escopo, período, entregáveis e autorização."],
  },
  {
    id: "clinica-viver",
    name: "Clínica Viver Augusto Montenegro",
    segment: "Saúde e atendimento clínico",
    title: "Projeto em validação",
    challenge: "",
    solution: "",
    services: ["Social Media", "Audiovisual"],
    mediaSlots: [
      "IMG_CASE_CLINICA_VIVER_01",
      "IMG_CASE_CLINICA_VIVER_02",
      "VIDEO_CASE_CLINICA_VIVER_01",
      "VIDEO_CASE_CLINICA_VIVER_02",
    ],
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: false,
    validationNotes: ["Confirmar escopo, período, entregáveis e autorização."],
  },
  {
    id: "dr-ian-rodrigues",
    name: "Dr. Ian Rodrigues",
    segment: "Cardiologia, arritmias e autoridade profissional",
    title: "Projeto em validação",
    challenge: "",
    solution: "",
    services: ["Estratégia", "Social Media", "Audiovisual"],
    mediaSlots: ["IMG_CASE_DR_IAN_01", "IMG_CASE_DR_IAN_02", "VIDEO_CASE_DR_IAN_01"],
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: false,
    validationNotes: ["Confirmar serviços realizados, período e autorização."],
  },
  ...[
    { id: "agro-norte", name: "Agro Norte", segment: "Agronegócio", key: "AGRO_NORTE" },
    { id: "topgran", name: "TopGran Veículos", segment: "Automotivo", key: "TOPGRAN" },
    { id: "burgers-flix", name: "Burger’s Flix", segment: "Alimentação", key: "BURGERS_FLIX" },
  ].map<PortfolioCase>((candidate) => ({
    id: candidate.id,
    name: candidate.name,
    segment: candidate.segment,
    title: "Projeto do portfólio anterior em validação",
    challenge: "",
    solution: "",
    services: ["Social Media", "Audiovisual"],
    mediaSlots: [
      ...Array.from({ length: 4 }, (_, index) =>
        `IMG_CASE_${candidate.key}_${String(index + 1).padStart(2, "0")}`,
      ),
      `VIDEO_CASE_${candidate.key}_01`,
    ],
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: false,
    validationNotes: [
      "Confirmar relação, escopo, materiais e autorização.",
      ...(candidate.id === "burgers-flix"
        ? ["Não reutilizar a descrição automotiva incorreta do portfólio Canva."]
        : []),
    ],
  })),
  {
    id: "segmento-financeiro",
    name: "Projeto do segmento financeiro",
    segment: "Financeiro",
    title: "Projeto do portfólio anterior em validação",
    challenge: "",
    solution: "",
    services: ["Social Media"],
    mediaSlots: Array.from({ length: 4 }, (_, index) =>
      `IMG_CASE_FINANCEIRO_${String(index + 1).padStart(2, "0")}`,
    ),
    resultConfirmed: "",
    externalUrl: "",
    publicationStatus: "pending",
    authorizationStatus: "pending",
    featured: false,
    validationNotes: ["Confirmar nome do cliente, escopo, materiais e autorização."],
  },
];

export const publicPortfolioTeasers = [
  {
    id: "direcao-de-marca",
    number: "01",
    category: "Estratégia" as PortfolioCategory,
    title: "Direção antes da execução.",
    description: "Diagnóstico, posicionamento e prioridades para transformar objetivos comerciais em um plano claro.",
  },
  {
    id: "conteudo-em-serie",
    number: "02",
    category: "Social Media" as PortfolioCategory,
    title: "Conteúdo com linha editorial.",
    description: "Copy, design e produção conectados a uma presença coerente — sem depender de posts isolados.",
  },
  {
    id: "campanhas-integradas",
    number: "03",
    category: "Tráfego" as PortfolioCategory,
    title: "Campanhas que aprendem.",
    description: "Criativos, distribuição e otimização organizados para gerar oportunidades e evoluir a execução.",
  },
  {
    id: "imagem-em-movimento",
    number: "04",
    category: "Audiovisual" as PortfolioCategory,
    title: "Imagem com intenção.",
    description: "Roteiro, captação, fotografia e edição pensados para dar forma à estratégia da marca.",
  },
  {
    id: "cobertura-editorial",
    number: "05",
    category: "Fotografia" as PortfolioCategory,
    title: "Presença no momento certo.",
    description: "Coberturas e registros que transformam movimento, bastidores e eventos em narrativa visual.",
  },
] as const;

export const portfolioFilters: Array<"Todos" | PortfolioCategory> = [
  "Todos",
  "Estratégia",
  "Social Media",
  "Tráfego",
  "Audiovisual",
  "Fotografia",
];

export const galleryCategories = [
  "Todos",
  "Estratégia",
  "Bastidores",
  "Fotografia esportiva",
  "Campanhas",
  "Reels",
  "Eventos",
  "Clientes",
] as const;

export const testimonials = Array.from({ length: 4 }, (_, index) => ({
  id: `TESTIMONIAL_${String(index + 1).padStart(2, "0")}`,
  name: "",
  company: "",
  role: "",
  text: "",
  photo: "",
  video: "",
  referenceUrl: "",
  authorizationConfirmed: false,
}));
