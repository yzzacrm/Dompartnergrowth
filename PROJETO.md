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

- **Evoluc Construtora** (headline R$19,43M / retorno ~204,9x/198,2x e o card de redes sociais +956% de alcance): vêm do relatório interno `Evoluc Construtora · Relatório Consolidado` (jan–ago/2026) que o Daniel mandou. Esse relatório tem dado sensível (ranking nominal de corretores, investimento por campanha) — **não foi publicado no site**, só os números agregados que aparecem nos cards. O arquivo bruto não está no repositório do site.
- O "Construtora parceira" / "Incorporadora parceira" que aparece anônimo nos cards de `index.html`/`sobre.html`/`cases.html`/`comercial.html`/`crm.html`/`consultoria-comercial.html`/`marketing.html`/`gestao-anuncios.html` **é a Evoluc** — confirmado nesta sessão pelo relatório consolidado. Ver regra de nomenclatura abaixo (nov/2026): o nome "Evoluc" só pode aparecer perto do case de branding/alcance, nunca perto de número de faturamento.
- O número antigo de "+548% no VGV do ano / metade da equipe de corretores" não tinha fonte localizável e foi substituído pelos números do relatório consolidado (mais recente e melhor documentado).

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

## Revisão de estilo "menos cara de IA" (out/2026)

Pedido do Daniel: revisar ortografia, tirar travessões e deixar o site mais elegante/minimalista, com base também numa análise escrita pelo conselheiro dele.

- **Ortografia:** "Anatai" corrigido para "Anota.ai" (`cases.html`, `sobre.html`).
- **Travessões (—):** removidos de 100% do repositório — não só do texto visível, mas também de comentários de código HTML (`<!-- DOBRA ... -->` em `marketing.html`, `comercial.html`, `inteligencia.html`, `produtora.html`) e de uma string JS que vira assunto de e-mail (`script.js`, `CONTACT_EMAIL`/`mailto`). Comentários explicativos em `style.css`/`script.js` (não geram nenhum texto visível ou enviado) foram deixados como estavam.
- **Hero (`index.html`):** a animação de scroll foi trocada. Antes, ao rolar a página as partículas formavam uma "rede neural" de linhas douradas conectadas — removido por pedir muito "AI template". Agora as partículas se espalham devagar e vão sumindo (efeito de brasa/luz se apagando), sem linhas de conexão. A formação em repouso do logo "DOM" / "PARTNER GROWTH" (`LOGO_POINTS` em `script.js`) **não mudou** — o Daniel gosta dela e pediu pra manter. (Correção, 08/out: a direção foi invertida a pedido do Daniel — as partículas subiam em direção ao menu ao rolar; agora descem, preenchendo o espaço vazio abaixo do headline/CTA, até sumirem. Só o sinal de `driftRise` em `goalY` mudou, em `initParticles()`/`animate()` de `script.js`; o resto do mecanismo — eased, drift lateral, fade — continua igual.)
- **Testado e rejeitado — não refazer sem perguntar de novo:** um protótipo com faixas claras (fundo creme/branco) alternando com o verde escuro nas seções "Prova de valor" (home) e "Em detalhe" (cases), inspirado em tittanium.inc (referência de harmonização de cores que o Daniel mandou). Ele viu o protótipo e preferiu manter o verde da Dom em todas as seções — a classe `.section--light` existe no CSS (pré-existente, não foi removida) mas não está aplicada em nenhuma página.
- **Mantendo a paleta verde/dourada**, itens aplicados pra reduzir o "ar de template de IA":
  - `.eyebrow-num` (o número de cada seção, ex. "03 Prova de valor"): número diminuído pro mesmo tamanho do rótulo e cor mais discreta (`--gold-dark` em vez de `--gold`), menos destaque de "selo".
  - `.counter-block` / `.impact-number` (bloco de "Impacto" com os números grandes): removido o gradiente radial de fundo e o glow (`text-shadow`) ao redor dos números — agora painel sólido (`--panel`) com borda fina, mais limpo.
  - `.cta-banner`: removido o blob de gradiente radial decorativo no canto.
  - Botões (`.btn`, `.btn-primary`, `.nav-cta`): deixaram de ser pílula com gradiente — agora cantos quase quadrados (usam `var(--radius)`, o mesmo raio dos cards) e cor sólida dourada, sem gradiente.
  - `strong{}` ganhou estilo global (peso 700, cor creme cheia em vez de creme apagado) pra permitir negrito pontual em frases-chave dentro de parágrafos — já aplicado em uma frase de `index.html`, duas de `sobre.html` e uma de `cases.html`. É pra uso pontual (uma frase por parágrafo, no máximo), não um negrito geral no texto.
- **Diagrama em órbita (`.ecosystem`) e os 7 cases de `cases.html`: intencionalmente não tocados** — pedido explícito do Daniel pra manter como estão, inclusive a animação giratória do diagrama. (Correção, 08/out: o diagrama "4 frentes" de `index.html`/`#frentes` tinha tido a rotação travada numa sessão anterior a essa nota — `.ecosystem--frentes .eco-node--sat{ animation:none; }` — pra não atrapalhar a leitura da descrição ao passar o mouse. O Daniel pediu de volta a rotação via comentário na prévia, e a trava foi removida: o diagrama volta a usar a mesma animação `eco-orbit` do diagrama de produtos, que já pausa sozinha com `:hover`/`:focus-visible`, então a leitura continua funcionando.)

## Regras de copy e nomenclatura (nov/2026)

Pedido do Daniel: revisar o site inteiro em busca de frases confusas ("sujeito trocado" no meio da frase) e jargão de marketing/vendas sem explicação, e aplicar duas regras de negócio que valem pro site inteiro, pra sempre.

- **Nunca citar "Evoluc" perto de número de faturamento.** O nome "Evoluc"/"Evoluc Construtora" só pode aparecer em contexto de alcance/redes sociais/branding (ex.: o card do Brand Book em `branding.html`/`cases.html`, a métrica de alcance no Instagram). Em qualquer lugar que fale de faturamento, vendas ou retorno sobre mídia (R$19,43M, retorno de ~204,9x/198,2x, as 60 vendas), o cliente é anonimizado como **"Construtora parceira"** (termo já usado antes, mantido por consistência) ou **"Incorporadora parceira"** (usado nos cards de `marketing.html`/`gestao-anuncios.html`, também antigo e mantido). O card do Brand Book em `branding.html`/`cases.html` teve o número de faturamento removido da descrição por esse motivo, mas manteve o nome Evoluc porque ali o assunto é o brand book, não faturamento.
- **Nunca admitir rastreamento parcial de faturamento.** Frases como "rastreamento confirmado em quase metade do volume" ou "44,4% do faturamento" foram removidas de todo o site (apareciam em `sobre.html`, `comercial.html`, `crm.html`, `consultoria-comercial.html`, todas com a mesma estatística "Ticket médio de R$ 323 mil, rastreamento confirmado em ~50%"). A frase agora afirma o resultado com confiança, sem citar percentual de rastreio.
- **Jargão simplificado site-wide** (mantendo os termos de marca do Daniel intocados — ver abaixo): lead → contato; funil → processo de vendas (exceto `funil.jpg` como nome de arquivo/alt text de imagem, não alterado); ticket médio → valor médio (por venda); ROI/ROAS → retorno (sobre a mídia investida); feeling → achismo (o site já usava "achismo" em outros lugares, mantida a consistência); script → roteiro; dashboard → painel; performance → resultado (exceto quando "Performance" é nome próprio do plano de marketing, em `marketing.html`); follow-up → retomada de contato; taxa de setup → taxa de entrada (em `advisor.html`); brand book/Brandbook → manual de marca; views → visualizações; B2G → "setor público" (paráfrase, em `branding.html`); dissonância → descompasso.
- **Termos mantidos de propósito** (vocabulário de marca do Daniel, não é jargão a simplificar): CRM e ERP como nome literal dos produtos/páginas; frentes, ecossistema, holding, Diagnóstico, É·Faz·Fala; "Growth" no nome "Dom Partner Growth" (mas o card "Planejamento de Growth" em `inteligencia.html` foi simplificado pra "Planejamento de Crescimento", por não ser nome próprio).
- **Correções de gramática "sujeito trocado"** (frase começa falando de uma coisa e termina falando de outra, no estilo do exemplo que o Daniel apontou em "Resultado real, auditável: não é um número que só sobe.") foram corrigidas pontualmente em várias páginas conforme encontradas — ver histórico de commits pra detalhe por arquivo.
- `loja-online.html` e `erp.html` foram revisados e não precisaram de nenhuma alteração.

## Pendências / pontos em aberto

- **Joy Variedades:** Daniel vai passar o link real da loja (`loja-online.html` e o card em `cases.html` ainda não linkam pra loja de verdade, só pro case).
- **Mais cases de ROI/visualizações/alcance:** Daniel sinalizou que tem mais clientes/números pra passar além dos que já estão no site — quando vierem, seguem o mesmo padrão dos cards Evoluc (nomear o cliente, citar o período, não misturar com outro case sem confirmação).
- Confirmar status comercial de Wellington Guimarães e Julio Machado (ver seção acima).
- E-mail de contato (`comercial@dompartnergrowth.com.br`) — confirmar que é o endereço definitivo.
- Site ao vivo pode estar desatualizado em relação a este repositório, já que a publicação depende do Daniel subir o .zip manualmente (git push não funciona neste ambiente).

## Mobile: cards com rolagem lateral (out/2026)

- **Trava de scroll:** os 7 grids que viraram "fileira com rolagem lateral" no mobile (`.method-grid`, `.card-grid`, `.case-grid`, `.case-grid--pro`, `.plan-grid`, `.deck-grid`, `.shot-grid`) ganharam `touch-action:pan-x` na regra do container. Antes, rolar a página verticalmente com o dedo em cima de uma dessas fileiras podia ser capturado pelo scroll horizontal do componente, travando a rolagem da página. Agora cada fileira só se move por swipe horizontal deliberado; o scroll vertical da página nunca é interceptado por elas.
- **Seta de indicação:** cada um desses 7 grids ganhou um `::after` com uma setinha dourada (›) fixa na borda direita (`position:absolute` dentro do container, que tem `position:relative`), sinalizando que há mais cards pra ver ao lado. É só uma dica visual (`pointer-events:none`), não interage.
- **Efeito de "revelar ao rolar" (`.reveal`) agora é reversível:** antes, cada elemento com a classe `.reveal` (textos, cards, o diagrama "4 frentes" etc.) subia e aparecia ao entrar na tela uma única vez, e ficava visível pra sempre depois disso, mesmo rolando de volta pra cima. O Daniel pediu o efeito simétrico: ao rolar de volta e o elemento sair da tela, ele deve descer e sumir com a mesma transição. Mudança foi só em `script.js` (`initReveal()`): o observer deixou de dar `unobserve` depois da primeira revelação e agora tira a classe `is-visible` quando o elemento perde interseção, então o CSS existente (`.reveal` / `.js .reveal` / `.reveal.is-visible`) já cuida da transição nos dois sentidos sem precisar de nada novo no CSS.

## Foto real do Daniel na "Reunião de Diagnóstico" (out/2026)

A foto de IA (`daniel-perfil.jpg`) usada no card "Reunião de Diagnóstico" de `advisor.html` foi trocada por uma foto real do Daniel conduzindo uma reunião com um grupo (`daniel-diagnostico.jpg`, novo arquivo). `daniel-perfil.jpg` **continua em uso** em outros 3 lugares (fundo do hero de `advisor.html` e de `sobre.html`, e os respectivos `og:image`) — não foram trocados porque o Daniel só pediu a do card de Diagnóstico; ele sabe que esses outros ainda usam a foto de IA, caso queira trocar depois.

## Redesign editorial "Nike/Oakley" — rascunho da home (out/2026)

Daniel mandou um vídeo de referência (site tutorial do @ambrosiomkt) e 4 imagens de referência (3 campanhas estilo Nike/Oakley em alto contraste, 1 landing page da Patrícia Medronha em tom escuro+dourado) e pediu pra refazer o design de todas as 18 páginas, sem mudar nenhum conteúdo. Antes de mexer, perguntei duas coisas e ele escolheu as opções recomendadas:

1. **Paleta:** manter o verde-escuro + dourado da Dom (não trocar pra preto/branco de alto contraste) — aplicar a energia das referências esportivas na tipografia, nas fotos e na composição, não na cor.
2. **Escopo:** redesenhar a home primeiro como protótipo, aprovar a direção, só depois aplicar nas outras 17 páginas.

O que mudou na home (`index.html`), tudo via classes modificadoras novas (`--editorial`, `--punch`) que não afetam as outras páginas ainda:

- **Fonte nova `--font-impact` (Bebas Neue, condensada/pôster)**, usada só em números e palavras de impacto (nunca em texto corrido): segunda linha do headline da hero ("A NOSSA ESTRATÉGIA VENDE."), os 3 números grandes do bloco de Impacto, os 3 números da fileira "anos/empresas/frentes". A primeira linha da hero e os títulos de seção continuam no serifado Cormorant Garamond de sempre.
- **Numeral fantasma**: cada eyebrow de seção (01, 02, 03, 04, 05) ganhou o mesmo número gigante, só contorno, bem discreto, atrás do título — efeito pôster editorial. Escondido/reduzido no mobile pra não poluir.
- **Molduras de canto (`.frame-marks`)**: cantinhos finos dourados em L, tipo visor de câmera (referência direta da imagem "VISION." da Oakley que o Daniel mandou), usados só na hero pra não virar repetição.
- **Fotos dos cases em duotone** (seção "Prova de valor"): os thumbnails dos 4 cards passam por um filtro CSS que desatura e tinge na paleta verde/dourada da marca, com saturação total na cor única no hover — fica coeso como campanha, em vez de prints soltos de cada cor.
- **Seção "O que fazemos" ficou assimétrica**: texto alinhado à esquerda (era centralizado), primeira frase isolada como "manchete" em itálico serifado, numeral fantasma "05" atrás.
- Diagrama em órbita (`.ecosystem`) e os cards dos 4 produtos/frentes **não foram tocados** — mesma regra de sempre, só ganharam o cabeçalho de seção novo ao redor.
- Sem grão/textura de fundo — já tinha sido removido de propósito antes (ver nota "Bloco 2 do pente fino"), não reintroduzido.

Testado em desktop (1440px) e mobile (390px) via Playwright antes de mostrar pro Daniel. **Status: aguardando aprovação dele pra aplicar o mesmo sistema nas outras 17 páginas.**

**Rodada 2 (estrutura).** Feedback do Daniel na rodada 1: o bloco de Impacto "em card, dentro de uma caixa" ainda tinha cara de IA, e só a tipografia tinha mudado, não a estrutura. Regra que fica pro resto do redesign: **nada de painel com borda + fundo + sombra pra destacar conteúdo**; separar com escala, fio fino e espaço vazio. Mudanças na home:

- **Faixa corrida** logo abaixo da hero com os nomes das 4 frentes em letra condensada (uma cheia, as outras vazadas), estilo campanha esportiva. Para com `prefers-reduced-motion`.
- **Impacto sem caixa:** R$19,43M virou o número dominante em escala de pôster (até ~220px), com os outros dois resultados numa coluna menor separada por um fio vertical; a fileira anos/empresas/frentes virou um "placar" com fios verticais, sem caixas.
- **Prova de valor:** a grade de 4 cards com borda virou um **índice editorial em linhas** (`.case-index` / `.case-row`): número grande vazado, tag, título serifado, descrição e a tira de 3 fotos em duotone dourado, cada linha separada só por um fio. No hover o número enche de dourado, as fotos ganham cor e a seta anda.
- **CTA final sem caixa:** frase grande alinhada à esquerda e "DOM" gigante vazado sangrando na direita.
- ~~Duotone dourado/oliva nas fotos~~ **trocado por preto e branco** a pedido do Daniel (ele estranhou as fotos "verdes", e nos prints com fundo branco o filtro deixava o branco bege-esverdeado). Agora as fotos dos cases ficam em P&B e ganham a cor original quando a linha passa pelo meio da tela (`initCaseSpotlight()` em `script.js`, IntersectionObserver com uma faixa estreita no centro da viewport, classe `.is-lit`, vale nos dois sentidos). É o que resolve o celular, que não tem hover; no computador o hover também acende. O número da linha acesa fica dourado cheio.
- Linha 2 da hero maior (Bebas condensada aguenta).

Obs. de teste: o sandbox não alcança o Google Fonts, então os testes usam as mesmas fontes servidas localmente via npm (`@fontsource`) interceptando a requisição no Playwright. O site em si continua carregando do Google Fonts normalmente.

## Hero da home: assessoria de crescimento (out/2026, rodada 3)

Daniel achou a hero "simples e sem graça" e pediu ênfase na **assessoria** (os vídeos da Papin REC ficam pra hero da página da produtora, quando ela for redesenhada). Diagnóstico da versão antiga: tudo centralizado, headline em cima das letras "DOM" (os dois brigando), terço de baixo vazio só com "ROLE", CTA só como link de texto.

- **Layout:** texto embaixo à esquerda; "Marketing atrai." no serifado e "A NOSSA ESTRATÉGIA VENDE." em Bebas gigante (limitado também pela altura da tela, `min(9vw,15.5vh)`, pra caber em notebook 1280x720).
- **Partículas "DOM":** continuam (mesma animação, mesma dissolução descendo ao rolar), mas agora ficam no alto à direita, maiores e sangrando pra fora da tela no desktop, e no topo, acima do texto, no mobile. Controlado por `data-layout="side"` no canvas, tratado em `buildParticles()`. No desktop, um `mask-image` apaga as partículas na faixa do texto.
- **Textos novos/reaproveitados:** kicker **"Assessoria de crescimento"** (novo, pedido do Daniel); subtítulo "Parceria de crescimento, não prestação de serviço." (já era a meta description/rodapé); botão sólido "Personalize seu plano" (mesmo texto do link antigo) + link "Como trabalhamos →" que leva pra `sobre.html#como-trabalhamos` (id novo adicionado nessa seção de sobre.html).
- **Método da assessoria no pé da hero:** 01 Diagnóstico · 02 Estratégia · 03 Execução · 04 Escala (as mesmas 4 etapas de "Como trabalhamos" em sobre.html), em placar de fios finos; no mobile vira 2x2. A faixa corrida das frentes vem logo abaixo.
- Entrada em sequência curta (sobe 14px e aparece, ~60ms entre peças), desligada com `prefers-reduced-motion`.
- Removidos da hero: indicador "ROLE" e molduras de canto (`.frame-marks` continua no CSS, sem uso na home).

## Páginas internas no mesmo modelo da home (out/2026, rodada 5)

Home aprovada (hero com o vídeo da sessão de assessoria, `hero-assessoria.mp4`). Daniel pediu as outras páginas no mesmo modelo, com foto na hero, e liberou gerar imagens novas.

- **Hero de todas as páginas internas (`.phero`):** foto em P&B na metade direita dissolvendo pro fundo, texto embaixo à esquerda, botão sólido. Título de uma palavra ("Comercial", "CRM"...) vira pôster em Bebas; título-frase fica no serifado. As antigas "glass-badges" (caixinhas flutuantes com número) viraram um placar de fios finos no pé da hero (`.phero-stats`). Convertido por script a partir do HTML antigo, sem mudar texto nenhum (único ajuste: "Automação de&nbsp;IA" pra não quebrar "IA" sozinho).
- **Fotos das heros:** reais onde existe foto boa: Quem Somos = quadro do vídeo da sessão (`hero-sobre.jpg`), Daniel Gualberto = `daniel-diagnostico.jpg`, Consultoria Comercial = `consultoria-daniel.jpg`, Cases = `itaquera-poster.jpg` (drone da Papin), Contato = `daniel-laptop-restaurante.jpg`, Produtora = claquete (vídeos entram depois), Branding = `evoluc-1.jpg`, Loja Online = `joy-2.jpg`. Privacidade fica sem foto (hero curta).
- **Imagens geradas (pendente):** Comercial, Marketing, Gestão de Anúncios, CRM, ERP, Inteligência e Automação de IA ainda usam as fotos antigas (banco de imagem, baixa resolução, e as três últimas repetiam a mesma). Foram geradas 7 imagens no Figma (P&B editorial, sem rosto e sem texto legível: aperto de mão, celular, notebook com gráfico, quadro de etapas, galpão, xadrez, celular com conversa), mas este ambiente não consegue baixar arquivos do Figma/Canva (bloqueio de rede); dependem do Daniel mandar os arquivos.
- **Sistema sem caixas nos componentes compartilhados:** `.nx-card` (numerados 01, 02... em contorno), `.case-card--pro` (número em pôster, sem o avatar de letra), `.shot-card`/`.video-card` (foto em P&B que ganha cor no centro da tela, igual aos cases da home), `.deck-card` (no desktop vira o mesmo índice em linhas da home), `.plan-card` (plano em destaque marcado só por fio dourado no topo), `.method-card`, `.cta-banner` (pôster com "DOM" vazado). Tudo via CSS no fim do `style.css`; a rolagem lateral no mobile continua igual.
- Quem Somos: o bloco de Impacto em caixa foi trocado pelo mesmo bloco sem caixa da home.
- `initGhostNumerals()` em `script.js`: põe o numeral gigante vazado atrás de todo título de seção numerado, lendo o número do próprio eyebrow.

## Página "Daniel Gualberto" vira biografia (out/2026)

Pedido do Daniel: `advisor.html` mais de biografia, mantendo o CTA de Reunião de Diagnóstico. Fontes: o doc "A Verdadeira História de Daniel Gualberto" e a apresentação comercial do Grupo Ev (fotos da época de corretor). Regra seguida: "usar só o necessário", e nada de faturamento pessoal, salário, família ou nome de ex-sócio (preferência antiga dele).

- **Hero em pôster (`.phero--poster`):** "Eu errei com o / MEU DINHEIRO / [pra você não errar] com o seu.", em três pesos (serifado, Bebas gigante e trecho em tarja dourada), seguindo as referências de post de campanha que o Daniel mandou. Foto: a capa do e-book "Bem-vindo ao deserto" (foto real do Daniel, enviada por ele), com o título e a assinatura removidos aqui mesmo (céu reconstruído por ajuste de gradiente + inpainting, sem IA generativa) → `hero-daniel-deserto.jpg`. Botão continua sendo a Reunião de Diagnóstico.
- A foto do deserto fica com a **cor natural** (sem o P&B e sem a película verde das outras heros), pedido do Daniel. No desktop ela esmaece na base pra não terminar em linha dura. No celular, o kicker quebra a linha logo depois do nome ("Daniel Gualberto" / "Fundador da Dom").
- Rodrigo Vincenzi confirmado pelo Daniel como mentor (legenda "Mentoria de marca pessoal"). Os demais pontos da bio (14 imóveis em equipe de três, barraca e estande) confirmados por ele.
- **01 A história:** começo aos 18 anos (camisetas na faculdade de Engenharia Mecânica) e 5 capítulos em linhas numeradas (`.bio-chapter`): tabacaria, cozinha/hamburgueria, sociedades (restaurante e casa de salgados), corretor de imóveis (14 imóveis em um ano, em equipe de três; foto da prospecção na rua `bio-rua.jpg`, tirada da apresentação do Grupo Ev) e a Dom. Cada capítulo fecha com "O que ficou".
- **02 O método:** as cicatrizes viram as 4 perguntas da Reunião de Diagnóstico (sócios e papéis, caixa, processo de venda, disciplina).
- **03 Referências:** fotos já existentes com Thiago Reis, Rafa Brito e Rodrigo Vincenzi.
- Depois seguem Diagnóstico (04), Consultoria contínua (05), Como funciona, FAQ e fechamento, como antes. O bloco "Quem conduz" (foto redonda + mini bio) saiu, porque a página inteira agora é a bio.
- **Não usado de propósito:** a foto do Daniel no palco com "PAPIN GROWTH" no telão (última página da apresentação) tem a marca d'água do Gemini, ou seja, é imagem gerada/editada por IA. Numa página de biografia ela apresentaria como real um evento que talvez não tenha acontecido daquele jeito, então ficou de fora. Os nomes "Popping World" e os valores mensais da agência que aparecem no doc também não entraram.

## Entrega

O site é entregue como .zip com todas as páginas, `style.css`, `script.js` e os assets, em formato flat (pronto pra upload direto no GitHub Pages). Uma prévia navegável (`preview-artifact.html`, versão single-file com imagens embutidas) também fica publicada como link — não faz parte do zip de entrega.

## Revisão de copy (todas as páginas)
- Revisão com as sete varreduras (clareza, voz, e daí, prova, especificidade, emoção, risco zero) em 16 páginas. Relatório de antes e depois em `revisao-de-copy-antes-e-depois.md` (entregue fora do repositório).
- **Comercial:** saiu o card de seguidores (750→2.248), que é resultado de marketing. Entraram R$3mi→R$19mi (construtora, 1 ano) e o atendimento 24/7 da pizzaria pela Yzza, ao lado das 60 vendas.
- **Evoluc longe de faturamento:** tirado o nome "Evoluc" do bloco de impacto (Home e Quem somos) e movido o card de alcance da Evoluc para o fim da grade em Cases e Quem somos.
- Títulos de prova diferentes em cada página (antes eram o mesmo em 6). Fórmula "X, não Y" reduzida. Textos duplicados na mesma página removidos (Consultoria Comercial, Automação de IA, Produtora, ERP).
- **Em aberto com o Daniel:** 204,9x vs 198,2x; contadores da Produtora (+3000 / +10 milhões / +250 cidades) contra +10 mil / +100 milhões; frase "maior parte das vendas segue o modelo de indicação"; nome "Terras Raras Vila Carrão"; estatística de 68% sem fonte; escopo dos planos Tração/Performance/Domínio.

## Ajustes pós-revisão de copy (respostas do Daniel)
- Retorno oficial: **198,2x** (Home, Quem somos, Cases). Produtora: **+3 mil vídeos** e **+15 milhões de visualizações** em todo o site.
- Case da construtora (60 vendas, R$19,43M): sem nome de empreendimento, sem Evoluc, sem a frase da indicação. Texto: "Resultado de anúncios e branding trabalhando juntos, com 94% dos contatos que viraram cliente vindos do Facebook."
- Indicadores "0 contato perdido" viraram "Meta: contato perdido no caminho" (Comercial e CRM).
- Estatística de 68% (reputação da incorporadora) retirada: só achada em fonte secundária (Portas citando Abrainc/Brain 2024).
- Página Marketing: planos Tração, Performance e Domínio com escopo real (`.plan-card--scope`, `.plan-list`), sem valores.
- **Esteira de marcas** (`.logo-belt`): 14 logos soltas na raiz como `logo-cliente-*.png` (sem pasta, porque o upload de pasta no GitHub falhava), tratados em creme único, 2x, tamanhos equilibrados por área. Está na Home (depois do ecossistema) e no Contato (antes do FAQ), longe dos blocos de faturamento. Animação CSS linear de 80s, pausa no hover, vira grade parada com prefers-reduced-motion. Para trocar ou incluir logo: gerar o PNG em creme (#ECE5D0) com fundo transparente e repetir o `<li>` nas duas listas (a segunda é a cópia com `aria-hidden`).
- Produtora: bloco "+250 cidades documentadas" removido (a grade de números tem 2 itens). O logo do símbolo é a Autoescola Virtual (`logo-cliente-autoescola-virtual.png`). "Papin Growth" é o antigo nome da Dom (aparece só nos PDFs de proposta dos planos).

## Ajustes de celular (outubro/2026)
- Cards que rolam para o lado: `touch-action` passou de `pan-x` para `pan-x pan-y` e `overflow-y:hidden`, para a página continuar rolando para baixo quando o dedo está em cima de um card (deslize lateral e snap mantidos).
- Hero da página Daniel Gualberto (advisor.html) no celular: hero mais alta e texto mais embaixo, foto aparece inteira acima do título.
