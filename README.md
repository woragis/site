# Jezreel — portfólio

Portfólio profissional em Next.js com páginas de projetos e artigos, metadados por rota e temas definidos no código. Os temas podem alterar tanto os tokens visuais quanto a composição de cada seção.

## Começar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Use `npm run build` para gerar a versão de produção.

## Conteúdo

Edite `src/content/site.ts` para ajustar identidade, links, experiência, habilidades, projetos e artigos. Os itens incluídos são exemplos editoriais e devem ser substituídos por fatos, links e resultados reais antes da publicação.

## Temas

Os temas e suas composições ficam em `src/themes/registry.ts`. O seletor na navegação troca entre `editorial`, `atelier` e `index`. Cada tema declara variáveis CSS e escolhas de layout por seção; os estilos correspondentes estão em `src/app/globals.css`. Para criar outro tema, adicione sua definição ao registro e seus estilos usando `data-theme`.

## SEO e publicação

- `src/app/robots.ts` e `src/app/sitemap.ts` geram `robots.txt` e `sitemap.xml` dinamicamente a partir do conteúdo publicado.
- `src/app/manifest.ts`, `src/app/opengraph-image.tsx` e `src/app/twitter-image.tsx` geram recursos de descoberta e compartilhamento.
- As páginas de projeto e artigo geram metadados e JSON-LD próprios.
- Defina `NEXT_PUBLIC_SITE_URL` com a origem canônica antes da publicação. O fallback é `https://example.com` para evitar indexar uma URL local.

Os dados de projetos e artigos, incluindo o texto de cada artigo, ficam em `src/content/site.ts` nesta primeira versão.
