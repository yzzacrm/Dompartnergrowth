# Site Dom Partner Growth

Documentação do site institucional da Dom Partner Growth, agência de Daniel Gualberto.

## Visão geral

Site estático (HTML, CSS e JavaScript puro, sem framework nem build), com paleta escura (fundo verde quase preto + dourado) e tipografia serifada (Cormorant Garamond) nos títulos. Estrutura de arquivos **flat** no repositório do GitHub Pages (sem subpasta `assets/`, todo mundo na raiz) — é como o site precisa estar pra funcionar no domínio publicado, então toda entrega e todo exemplo de caminho neste documento já está nesse formato. O texto segue tom direto, sem travessões (preferência do Daniel: travessão é "coisa de IA" e soa artificial em português).

**Importante sobre publicação:** o `git push` direto não funciona neste ambiente de trabalho (erro 403 do proxy). Daniel publica as mudanças subindo manualmente os arquivos no GitHub (upload pela interface web). Então sempre que uma sessão termina um bloco de trabalho, a entrega é um .zip pronto pra upload, não só um commit local.

## Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Home: hero, 4 frentes, ecossistema, impacto (números), "o que fazemos", CTA final |
| `sobre.html` | Quem Somos: posicionamento da agência, bloco do CEO (Daniel), impacto/contador, "Como Trabalhamos", grid de cases (`case-grid--pro`, espelha o bloco "01 Em números" de `cases.html`) |
| `cases.html` | Hub central de cases: "01 Em números" (cards de resultado por cliente) + "02 Em detalhe" (cards com imagem, descrição e link pro case completo e/ou material original — proposta, brand book), organizados em "Posicionamento de marca" e "Loja online" |
| `contato.html` | Formulário de contato (inclui campo opcional de faturamento mensal) + FAQ |
| `advisor.html` | Página pessoal de Daniel Gualberto / diagnóstico |
| `comercial.html`, `marketing.html`, `produtora.html`, `inteligencia.html` | Páginas de frente, cada uma linkando pros produtos relacionados |
| `crm.html`, `erp.html`, `branding.html`, `loja-online.html`, `automacao-ia.html`, `gestao-anuncios.html`, `consultoria-comercial.html` | Páginas de produto, cada uma com sua própria seção de cases completa |
| `privacidade.html` | Política de privacidade |
| `fundador.html` | Página antiga/alternativa — conferir se ainda está em uso ou se foi substituída por `advisor.html` |

Header e footer são injetados via JavaScript (`buildHeader()` / `buildFooter()` em `script.js`). O menu tem um submenu "Serviços" (as 4 frentes) e um CTA fixo "Agendar Diagnóstico" apontando pra `advisor.html#diagnostico`.

## A arquitetura dos cases (importante pra manter consistência)

`cases.html` é o **hub**: mostra um resumo de cada case (números na seção 01, card com imagem + descrição curta na seção 02) e linka pra página de produto onde aquele case vive de verdade:

- Cases de **posicionamento de marca** (Wellington Guimarães, Projeto Consigliere/Julio Machado, LabLaser, Evoluc Construtora) moram em `branding.html`, dentro da seção "02 Cases" daquela página.
- Cases de **loja online** (Abihto, Ameridan, Joy Variedades) moram em `loja-online.html`.

Ao atualizar um case, editar nos dois lugares (o card completo na página de produto E o resumo em `cases.html`) pra não ficarem dessincronizados. O card em `cases.html` usa a classe `.deck-card` como `<div>` (não `<a>`), com um `<a class="deck-slides-link">` em volta só das imagens e um ou dois links em `.deck-actions` no rodapé (`Ver case completo →` sempre, e `Ver a proposta/Brand Book (PDF) ↗` quando existe um documento original pra mostrar). Isso evita `<a>` aninhado.

## Fontes de dado por trás dos números (pra não perder o rastro depois)

- **Evoluc Construtora** (headline R$19,43M / ROI 204,9x e o card de redes sociais +956% de alcance): vêm do relatório interno `Evoluc Construtora · Relatório Consolidado` (jan–ago/2026) que o Daniel mandou. Esse relatório tem dado sensível (ranking nominal de corretores, investimento por campanha) — **não foi publicado no site**, só os números agregados que aparecem nos cards. O arquivo bruto não está no repositório do site.
- O "Construtora parceira" que aparecia anônimo nos cards de `index.html`/`sobre.html`/`cases.html` **é a Evoluc** — isso estava como pendência em aberto numa versão antiga deste documento ("são o mesmo cliente?") e foi confirmado nesta sessão pelo relatório consolidado. Os cards agora citam "Evoluc Construtora" pelo nome, já que ela também é citada publicamente no case de branding.
- O número antigo de "+548% no VGV do ano / metade da equipe de corretores" não tinha fonte localizável nesta sessão e foi substituído pelos números do relatório consolidado (mais recente e melhor documentado).

## Documentos originais publicados como prova de case

Alguns cases em `branding.html` (e espelhados em `cases.html`) agora linkam pro material real, não só pra imagens de preview:

- `wguimaraes-proposta.pdf` — proposta comercial pro Wellington Guimarães, **cortada nas páginas 11–12** (preço da mentoria e CTA final) a pedido do Daniel. Só páginas 1–10 (conceito, posicionamento, framework de métricas).
- `consigliere-proposta-resumo.jpg` — resumo em imagem do Projeto Consigliere (Julio Machado), **cortado antes da seção "A máquina de vendas"** (funil tático e plano de entregas), a pedido do Daniel.
- `evoluc-brandbook-2025.pdf` — Brand Book completo da Evoluc Construtora, sem corte (material já pensado pra ser mostrado por inteiro).

Pendência: confirmar com o Daniel se esses dois primeiros (Wellington e Julio/Consigliere) já são clientes fechados ou ainda prospects — ele autorizou publicar com nome e foto, mas vale reconfirmar o status comercial se isso mudar a forma como são descritos no site (hoje estão como "proposta"/"posicionamento", não como "resultado entregue").

## Identidade visual

- **Fundo:** verde muito escuro quase preto, painéis em verde escuro
- **Destaque:** dourado
- **Texto:** creme
- **Tipografia:** Cormorant Garamond (h1–h4) + Inter (corpo e UI)
- Cantos arredondados, transições suaves

## Assets

Todas as imagens e PDFs ficam soltos na raiz do repositório (estrutura flat, ver "Visão geral" acima). Destaques:

- `evoluc-1.jpg`, `evoluc-roi.jpg`, `evoluc-relatorio-capa.jpg`, `evoluc-3.jpg` — preview do case Evoluc (capa do brand book, print do relatório de equity de marca, capa do relatório consolidado)
- `wguimaraes-1/2/3.jpg`, `consigliere-1/2/3.jpg`, `lablaser-1/2/3.jpg` — preview dos cases de posicionamento de marca
- `abihto-1/2/3.jpg`, `ameridan-1/2/3.jpg`, `joy-1/2/3.jpg` — preview dos cases de loja online
- `evoluc-relatorio-anual.jpg` — renderizado mas não usado em nenhuma página ainda (sobra disponível caso sirva pra outro case/seção)

## Pendências / pontos em aberto

- **Joy Variedades:** Daniel vai passar o link real da loja (`loja-online.html` e o card em `cases.html` ainda não linkam pra loja de verdade, só pro case).
- **Mais cases de ROI/visualizações/alcance:** Daniel sinalizou que tem mais clientes/números pra passar além dos que já estão no site — quando vierem, seguem o mesmo padrão dos cards Evoluc (nomear o cliente, citar o período, não misturar com outro case sem confirmação).
- Confirmar status comercial de Wellington Guimarães e Julio Machado (ver seção acima).
- E-mail de contato (`comercial@dompartnergrowth.com.br`) — confirmar que é o endereço definitivo.
- Site ao vivo pode estar desatualizado em relação a este repositório, já que a publicação depende do Daniel subir o .zip manualmente (git push não funciona neste ambiente).

## Entrega

O site é entregue como .zip com todas as páginas, `style.css`, `script.js` e os assets, em formato flat (pronto pra upload direto no GitHub Pages). Uma prévia navegável (`preview-artifact.html`, versão single-file com imagens embutidas) também fica publicada como link — não faz parte do zip de entrega.
