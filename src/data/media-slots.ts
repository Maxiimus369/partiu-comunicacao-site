export type MediaType = "image" | "video";
export type AuthorizationStatus = "pending" | "authorized" | "not-required";

export interface MediaSlot {
  id: string;
  slot: string;
  type: MediaType;
  src: string;
  mobileSrc?: string;
  poster: string;
  alt: string;
  caption: string;
  client: string;
  category: string;
  instagramUrl: string;
  credit: string;
  authorizationStatus: AuthorizationStatus;
  featured: boolean;
  width: number;
  height: number;
}

type SlotOptions = Partial<Omit<MediaSlot, "id" | "slot" | "type">>;

const makeSlot = (
  slot: string,
  type: MediaType,
  alt: string,
  options: SlotOptions = {},
): MediaSlot => ({
  id: slot.toLowerCase().replaceAll("_", "-"),
  slot,
  type,
  src: "",
  poster: "",
  alt,
  caption: "",
  client: "",
  category: "portfolio",
  instagramUrl: "",
  credit: "",
  authorizationStatus: "pending",
  featured: false,
  width: type === "video" ? 1080 : 1600,
  height: type === "video" ? 1920 : 1200,
  ...options,
});

const makeImageRange = (
  prefix: string,
  count: number,
  alt: (index: number) => string,
  options: SlotOptions = {},
) =>
  Array.from({ length: count }, (_, index) =>
    makeSlot(`${prefix}_${String(index + 1).padStart(2, "0")}`, "image", alt(index + 1), options),
  );

const makeVideoRange = (
  prefix: string,
  count: number,
  alt: (index: number) => string,
  options: SlotOptions = {},
) =>
  Array.from({ length: count }, (_, index) =>
    makeSlot(`${prefix}_${String(index + 1).padStart(2, "0")}`, "video", alt(index + 1), options),
  );

export const mediaSlots: MediaSlot[] = [
  makeSlot("VIDEO_HERO_01", "video", "Marcos Beltrã em bastidores e projetos da Partiu Comunicação", {
    category: "hero",
    featured: true,
    width: 1080,
    height: 1350,
  }),
  makeSlot("IMG_HERO_FALLBACK_01", "image", "Retrato profissional de Marcos Beltrã", {
    category: "hero",
    featured: true,
    width: 1080,
    height: 1350,
    src: "/media/hero/hero.webp",
    authorizationStatus: "authorized",
  }),
  makeSlot("VIDEO_HERO_POSTER_01", "image", "Capa do vídeo principal de Marcos Beltrã", {
    category: "hero",
    featured: true,
    width: 1080,
    height: 1350,
  }),

  makeSlot("IMG_MARCOS_RETRATO_01", "image", "Retrato profissional de Marcos Beltrã", {
    category: "about",
    featured: true,
    width: 1200,
    height: 1500,
    src: "/media/retrato.webp",
    authorizationStatus: "authorized",
  }),
  makeSlot("IMG_MARCOS_TRABALHO_01", "image", "Marcos Beltrã durante reunião, evento ou produção", {
    category: "about",
    width: 1600,
    height: 1200,
    src: "/media/retrato1.webp",
    authorizationStatus: "authorized",
  }),
  makeSlot("VIDEO_MARCOS_APRESENTACAO_01", "video", "Apresentação profissional de Marcos Beltrã", {
    category: "about",
    width: 1920,
    height: 1080,
  }),

  makeSlot("IMG_PARTIU_EQUIPE_01", "image", "Equipe da Partiu Comunicação em produção", {
    category: "partiu",
    featured: true,
    src: "/media/Equipe.webp",
    authorizationStatus: "authorized",
  }),
  makeSlot("VIDEO_PARTIU_BASTIDORES_01", "video", "Bastidores da rotina da Partiu Comunicação", {
    category: "partiu",
  }),
  makeSlot("IMG_PARTIU_ESTUDIO_01", "image", "Espaço e equipamentos de produção da Partiu Comunicação", {
    category: "partiu",
  }),
  makeSlot("IMG_PARTIU_LOGO_01", "image", "Logotipo da Partiu Comunicação", {
    category: "partiu",
    width: 1200,
    height: 1200,
  }),

  makeSlot("IMG_SERVICO_ESTRATEGIA_01", "image", "Planejamento de estratégia de marketing", { category: "services" }),
  makeSlot("IMG_SERVICO_SOCIAL_01", "image", "Produção de conteúdo para redes sociais", { category: "services" }),
  makeSlot("IMG_SERVICO_TRAFEGO_01", "image", "Análise de campanhas de tráfego pago", { category: "services" }),
  makeSlot("VIDEO_SERVICO_AUDIOVISUAL_01", "video", "Captação e produção audiovisual", { category: "services" }),
  makeSlot("IMG_SERVICO_CAMPANHA_01", "image", "Direção criativa de campanha", { category: "services" }),
  makeSlot("IMG_SERVICO_IA_01", "image", "Processo criativo apoiado por inteligência artificial", { category: "services" }),

  makeSlot("IMG_CASE_BLESSED_PREMIO_01", "image", "Marcos Beltrã com certificado relacionado ao case Blessed Studio Premium", {
    client: "Blessed Studio Premium",
    category: "case",
    featured: true,
  }),
  makeSlot("IMG_CASE_BLESSED_PREMIO_02", "image", "Marcos Beltrã com troféu relacionado ao case Blessed Studio Premium", {
    client: "Blessed Studio Premium",
    category: "case",
  }),
  makeSlot("IMG_CASE_BLESSED_UNIDADE_01", "image", "Estrutura de uma unidade do Blessed Studio Premium", {
    client: "Blessed Studio Premium",
    category: "case",
  }),
  makeSlot("IMG_CASE_BLESSED_CONTEUDO_01", "image", "Peça de campanha do Blessed Studio Premium", {
    client: "Blessed Studio Premium",
    category: "case",
  }),
  makeSlot("VIDEO_CASE_BLESSED_01", "video", "Campanha em vídeo do Blessed Studio Premium", {
    client: "Blessed Studio Premium",
    category: "case",
  }),
  makeSlot("VIDEO_CASE_BLESSED_02", "video", "Bastidor ou depoimento relacionado ao Blessed Studio Premium", {
    client: "Blessed Studio Premium",
    category: "case",
  }),

  makeSlot("IMG_CASE_REMO_SANTOS_01", "image", "Jogador do Santos em campo durante partida no Mangueirão", {
    client: "Cobertura Remo x Santos",
    category: "case",
    featured: true,
  }),
  makeSlot("IMG_CASE_REMO_SANTOS_02", "image", "Atleta do Santos no banco ou túnel do Mangueirão", {
    client: "Cobertura Remo x Santos",
    category: "case",
  }),
  makeSlot("IMG_CASE_REMO_SANTOS_03", "image", "Atleta agradecendo ao público no Mangueirão", {
    client: "Cobertura Remo x Santos",
    category: "case",
  }),
  makeSlot("IMG_CASE_REMO_SANTOS_04", "image", "Momento da partida entre Remo e Santos", {
    client: "Cobertura Remo x Santos",
    category: "case",
  }),
  makeSlot("VIDEO_CASE_REMO_SANTOS_01", "video", "Bastidores da cobertura esportiva no Mangueirão", {
    client: "Cobertura Remo x Santos",
    category: "case",
  }),
  ...makeImageRange(
    "IMG_CASE_REMO_SANTOS_GALLERY",
    12,
    (index) => `Fotografia ${index} da cobertura esportiva Remo x Santos`,
    { client: "Cobertura Remo x Santos", category: "case" },
  ),

  ...["MOVIX", "CLINICA_VIVER"].flatMap((clientKey) => [
    ...makeImageRange(
      `IMG_CASE_${clientKey}`,
      2,
      (index) => `Imagem ${index} do projeto ${clientKey.replaceAll("_", " ")}`,
      { client: clientKey.replaceAll("_", " "), category: "case" },
    ),
    ...makeVideoRange(
      `VIDEO_CASE_${clientKey}`,
      2,
      (index) => `Vídeo ${index} do projeto ${clientKey.replaceAll("_", " ")}`,
      { client: clientKey.replaceAll("_", " "), category: "case" },
    ),
  ]),
  ...makeImageRange("IMG_CASE_DR_IAN", 2, (index) => `Imagem ${index} do projeto Dr. Ian Rodrigues`, {
    client: "Dr. Ian Rodrigues",
    category: "case",
  }),
  makeSlot("VIDEO_CASE_DR_IAN_01", "video", "Vídeo do projeto Dr. Ian Rodrigues", {
    client: "Dr. Ian Rodrigues",
    category: "case",
  }),

  ...["AGRO_NORTE", "TOPGRAN", "BURGERS_FLIX"].flatMap((clientKey) => [
    ...makeImageRange(
      `IMG_CASE_${clientKey}`,
      4,
      (index) => `Imagem ${index} do projeto ${clientKey.replaceAll("_", " ")}`,
      { client: clientKey.replaceAll("_", " "), category: "case" },
    ),
    makeSlot(`VIDEO_CASE_${clientKey}_01`, "video", `Vídeo do projeto ${clientKey.replaceAll("_", " ")}`, {
      client: clientKey.replaceAll("_", " "),
      category: "case",
    }),
  ]),
  ...makeImageRange("IMG_CASE_FINANCEIRO", 4, (index) => `Imagem ${index} de projeto do segmento financeiro`, {
    client: "Projeto do segmento financeiro",
    category: "case",
  }),

  ...makeImageRange("IMG_GALLERY", 12, (index) => `Fotografia ${index} do portfólio da Partiu Comunicação`, {
    category: "gallery",
  }),
  ...makeVideoRange("VIDEO_VERTICAL", 6, (index) => `Vídeo vertical ${index} do portfólio da Partiu Comunicação`, {
    category: "reels",
    width: 1080,
    height: 1920,
  }),
  ...makeVideoRange("VIDEO_HORIZONTAL", 3, (index) => `Vídeo horizontal ${index} do portfólio da Partiu Comunicação`, {
    category: "audiovisual",
    width: 1920,
    height: 1080,
  }),
  ...makeImageRange("IMG_REEL_POSTER", 6, (index) => `Capa do Reel ${index} da Partiu Comunicação`, {
    category: "reels",
    width: 1080,
    height: 1920,
  }),
];

export function getMediaSlot(slot: string) {
  const media = mediaSlots.find((item) => item.slot === slot);

  if (!media) {
    throw new Error(`Media slot not found: ${slot}`);
  }

  return media;
}

export function isMediaReady(media: MediaSlot) {
  return Boolean(media.src) && media.authorizationStatus === "authorized";
}
