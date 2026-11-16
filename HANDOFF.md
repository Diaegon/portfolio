# Handoff — reforma do portfólio

Estado em 15/11/2026. Apague este arquivo quando a reforma for publicada.

## Onde paramos

O site foi reescrito de Hugo para **Astro 7**, estático, bilíngue (`/en/` e `/pt/`), com o design do README do GitHub (preto, carmesim, equações de Relatividade Geral). O build passa: 46 páginas, sem links internos quebrados. Revisei por screenshot em desktop (1440px) e celular (390px).

**Nada foi commitado nem publicado.** Tudo está na working tree do branch `main`: arquivos do Hugo removidos, posts movidos com `git mv`, o resto são arquivos novos. Um push em `main` dispara o deploy no GitHub Pages.

## Como rodar

```sh
npm run dev            # http://localhost:4321
npx astro dev stop     # o servidor de dev ficou rodando em segundo plano
npm run build          # saída em dist/
```

## Decisões pendentes (suas)

1. **Período na Fam Engenharia.** O currículo está com "[período a preencher]". Usei "Desde 2018 · 7+ anos" e troquei "cinco anos" por "mais de sete" no Sobre. Arquivos: `src/data/experience.ts`, `src/data/about.ts`.
2. **Textos escritos por mim, na sua voz.** As epígrafes mitológicas dos projetos (campo `epigraph` em `src/content/projects/*/*.md`) e a seção "Fora do expediente" do Sobre (`src/data/about.ts`). Em especial, o site afirma que o ApolloDocs leva o nome do deus do sol por ser um produto solar.
3. **Stack.** Saíram Django, Hugo e GCP, que não estão no currículo. Lista em `src/data/home.ts`.
4. **Links de GitHub** do Warren e do dServer apontam para o perfil, não para os repositórios.
5. **PDF do currículo** não está disponível para download no site.
6. **Commit e deploy.** Falta revisar no navegador, commitar e dar push.

## Não verificado

- O deploy no GitHub Pages com o workflow novo (`.github/workflows/pages.yaml`). Testei localmente apenas o build com `BASE_PATH=/portfolio`.
- Navegadores além do Chrome (headless). Safari e Firefox não foram testados.
- O embed do PDF na página do dServer (depende do bucket S3 e do navegador).
- A malha interativa do hero só foi vista em screenshot estático, não em movimento.

## Mapa do código

| O quê | Onde |
| --- | --- |
| Cores, tipografia, cards, prosa | `src/styles/global.css` |
| Cabeçalho, rodapé, metatags | `src/layouts/Base.astro` |
| Hero e malha de espaço-tempo | `src/components/Hero.astro` |
| Equações dos divisores | `src/data/equations.ts`, `src/components/Rule.astro` |
| Textos da home (padrão, números, stack, linha do tempo) | `src/data/home.ts` |
| Experiência e formação | `src/data/experience.ts` |
| Sobre | `src/data/about.ts` |
| Strings de interface e helpers de URL | `src/i18n.ts` |
| Projetos (Markdown por idioma) | `src/content/projects/{en,pt}/` |
| Posts e notas (Markdown por idioma) | `src/content/writing/{en,pt}/` |
| Páginas | `src/pages/[lang]/` |
| Imagens | `public/images/` |

## Conteúdo

- **Projetos:** ApolloDocs (reescrito a partir do currículo), Warren e Vertere Mind (novos), dServer, E-Classifier, Solar-Maker (texto original) e "Websites institucionais" (`webpages.md`: Famsolar, Proserviços Engenharia e Castelli Buffet).
- **Posts publicados:** "Qual a melhor forma de começar na programação?" (EN e PT) e "Experiência de voluntariado" (só PT; aparece na lista em inglês com a etiqueta "Portuguese only").
- **Rascunhos (`draft: true`):** `en/volunteering.md` (só "English text soon!") e `pt/trabalho-voluntario.md` (nota).
- **Não migrado:** a página-rascunho vazia de "Guias".
- **URLs antigas** (`/projects/projects/<slug>/`, `/blog/post1/`, `/blog/post2/`) redirecionam para as novas.

## Armadilhas

- Links internos e imagens passam por `href()` / `page()` de `src/i18n.ts`, por causa do `BASE_PATH` do GitHub Pages. Não escreva caminhos absolutos à mão nos componentes.
- Imagens dentro de posts ficam ao lado do `.md` e são referenciadas com caminho relativo (`./foto.jpeg`).
- O mesmo nome de arquivo em `en/` e `pt/` forma o par de tradução usado pelo botão EN/PT.
- O site é só escuro, sem tema claro.
