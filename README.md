# Marcos Beltrã & Partiu Comunicação

Portfólio em Next.js para apresentar Marcos como estrategista/CMO externo e a Partiu Comunicação como operação de marketing, conteúdo, performance e audiovisual.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Conteúdo e mídia

- Informações públicas confirmadas: `src/data/config.ts`
- Cases, filtros e pendências: `src/data/portfolio.ts`
- Todos os slots de imagem e vídeo: `src/data/media-slots.ts`
- Pastas públicas de mídia: `public/media/`
- Checklist de arquivos e autorizações: `MEDIA_CHECKLIST.md`

Uma mídia só aparece publicamente quando possui `src` local e `authorizationStatus: "authorized"`. Se `src` estiver vazio, nenhum arquivo inexistente é requisitado. Os placeholders identificados pelo nome do slot aparecem apenas em desenvolvimento, com exceção dos fallbacks editoriais aprovados do hero e das seções institucionais.

## Verificação

```bash
npm run lint
npx tsc --noEmit
npm run build
```
