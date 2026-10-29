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
- `NEXT_PUBLIC_SITE_URL` está configurado para `https://woragis.com` e pode ser sobrescrito no ambiente de deploy.

Os dados de projetos e artigos ficam em `src/content/site.ts`. Cases e artigos selecionados aparecem como rascunhos de revisão; rotas em rascunho recebem `noindex` e só entram no sitemap quando `published` for alterado para `true` após revisão. Os artigos foram adaptados das séries técnicas do LinkedIn; ainda precisam de revisão editorial. Nutritionist permanece fora das páginas até haver autorização para divulgar o trabalho do cliente.
