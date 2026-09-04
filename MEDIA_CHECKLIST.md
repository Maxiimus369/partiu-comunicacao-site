# Checklist de mídias e validações

Atualizado em 29/08/2026. Todos os slots abaixo estão criados em `src/data/media-slots.ts` e começam com autorização pendente.

## Prioridade 1 — identidade e abertura

### Fotos/capas

- `IMG_HERO_FALLBACK_01` — retrato profissional de Marcos, vertical 4:5.
- `VIDEO_HERO_POSTER_01` — capa do vídeo principal, vertical 4:5.
- `IMG_MARCOS_RETRATO_01` — retrato profissional, vertical 4:5.
- `IMG_MARCOS_TRABALHO_01` — Marcos em reunião, evento ou produção.
- `IMG_PARTIU_EQUIPE_01` — equipe ou bastidor coletivo.
- `IMG_PARTIU_ESTUDIO_01` — espaço, equipamentos ou produção.
- `IMG_PARTIU_LOGO_01` — logotipo em alta resolução e, se possível, fundo transparente.

### Vídeos

- `VIDEO_HERO_01` — montagem curta de Marcos, bastidores e trabalhos; incluir versão mobile e poster.
- `VIDEO_MARCOS_APRESENTACAO_01` — apresentação curta opcional.
- `VIDEO_PARTIU_BASTIDORES_01` — gravações e rotina da operação.

## Prioridade 2 — serviços

### Fotos/capas

- `IMG_SERVICO_ESTRATEGIA_01`
- `IMG_SERVICO_SOCIAL_01`
- `IMG_SERVICO_TRAFEGO_01`
- `IMG_SERVICO_CAMPANHA_01`
- `IMG_SERVICO_IA_01`

### Vídeos

- `VIDEO_SERVICO_AUDIOVISUAL_01`

## Prioridade 3 — cases candidatos

Nenhum case abaixo será exibido com nome, resultado ou mídia antes da validação.

### Blessed Studio Premium

Fotos/capas:

- `IMG_CASE_BLESSED_PREMIO_01`
- `IMG_CASE_BLESSED_PREMIO_02`
- `IMG_CASE_BLESSED_UNIDADE_01`
- `IMG_CASE_BLESSED_CONTEUDO_01`

Vídeos:

- `VIDEO_CASE_BLESSED_01`
- `VIDEO_CASE_BLESSED_02`

Confirmar aumento de alunos, período, quantidade de unidades, nome oficial do reconhecimento de 2024 e autorização do cliente.

### Cobertura esportiva Remo x Santos

Fotos/capas:

- `IMG_CASE_REMO_SANTOS_01`
- `IMG_CASE_REMO_SANTOS_02`
- `IMG_CASE_REMO_SANTOS_03`
- `IMG_CASE_REMO_SANTOS_04`
- `IMG_CASE_REMO_SANTOS_GALLERY_01` até `IMG_CASE_REMO_SANTOS_GALLERY_12` (12 arquivos individuais)

Vídeos:

- `VIDEO_CASE_REMO_SANTOS_01`

Confirmar autoria, créditos, autorização de publicação e direitos de imagem/editoriais de atletas e marcas.

### Postos Movix

Fotos/capas: `IMG_CASE_MOVIX_01` e `IMG_CASE_MOVIX_02`.

Vídeos: `VIDEO_CASE_MOVIX_01` e `VIDEO_CASE_MOVIX_02`.

Confirmar serviços, período, entregáveis e autorização.

### Clínica Viver Augusto Montenegro

Fotos/capas: `IMG_CASE_CLINICA_VIVER_01` e `IMG_CASE_CLINICA_VIVER_02`.

Vídeos: `VIDEO_CASE_CLINICA_VIVER_01` e `VIDEO_CASE_CLINICA_VIVER_02`.

Confirmar escopo, período, entregáveis e autorização.

### Dr. Ian Rodrigues

Fotos/capas: `IMG_CASE_DR_IAN_01` e `IMG_CASE_DR_IAN_02`.

Vídeo: `VIDEO_CASE_DR_IAN_01`.

Confirmar serviços realizados, período e autorização.

### Portfólio Canva anterior

- Agro Norte: `IMG_CASE_AGRO_NORTE_01` até `IMG_CASE_AGRO_NORTE_04`; `VIDEO_CASE_AGRO_NORTE_01`.
- TopGran Veículos: `IMG_CASE_TOPGRAN_01` até `IMG_CASE_TOPGRAN_04`; `VIDEO_CASE_TOPGRAN_01`.
- Burger’s Flix: `IMG_CASE_BURGERS_FLIX_01` até `IMG_CASE_BURGERS_FLIX_04`; `VIDEO_CASE_BURGERS_FLIX_01`.
- Segmento financeiro: `IMG_CASE_FINANCEIRO_01` até `IMG_CASE_FINANCEIRO_04`.

Confirmar cliente, escopo, relação dos arquivos e autorização. A descrição antiga do Burger’s Flix foi descartada porque fala incorretamente de veículos.

## Galeria expansível

### Fotos/capas

- `IMG_GALLERY_01` até `IMG_GALLERY_12` — 12 fotografias.
- `IMG_REEL_POSTER_01` até `IMG_REEL_POSTER_06` — 6 capas de Reels.

### Vídeos

- `VIDEO_VERTICAL_01` até `VIDEO_VERTICAL_06` — 6 vídeos verticais 9:16.
- `VIDEO_HORIZONTAL_01` até `VIDEO_HORIZONTAL_03` — 3 vídeos horizontais 16:9.

Categorias disponíveis: Estratégia, Bastidores, Fotografia esportiva, Campanhas, Reels, Eventos e Clientes.

## Depoimentos

- `TESTIMONIAL_01` até `TESTIMONIAL_04`.

Para cada item, confirmar nome, empresa, cargo, texto, foto, vídeo opcional, URL de referência e autorização. Nenhum depoimento fictício é exibido.

## Balanço atual

- 72 slots de imagem/capa.
- 24 slots de vídeo.
- 4 slots estruturados de depoimento.
- Mídias locais reaproveitadas do projeto anterior: nenhuma; o projeto não continha arquivos de portfólio.
- Mídias obtidas do Canva: nenhuma. A página pública permitiu conferir os textos de Agro Norte, TopGran e Burger’s Flix, mas não ofereceu uma associação confiável entre os arquivos visuais, o cliente e a autorização de uso.
- Referência adicional pendente: Cindy Machado só deve virar case após confirmação de relação, escopo e autorização.

## Regras antes de publicar

- Não publicar “+20 clientes” sem confirmar que o número continua correto.
- Não publicar seguidores, preços, endereço, telefone, WhatsApp, e-mail, prêmios ou resultados sem confirmação.
- Não reutilizar música de Reels sem licença.
- Preencher crédito e URL de referência quando aplicável.
- Alterar `authorizationStatus` para `authorized` somente após aprovação documentada.
