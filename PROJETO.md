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
- **Hero (`index.html`):** a animação de scroll foi trocada. Antes, ao rolar a página as partículas formavam uma "rede neural" de linhas douradas conectadas — removido por pedir muito "AI template". Agora as partículas sobem devagar e vão sumindo (efeito de brasa/luz se apagando), sem linhas de conexão. A formação em repouso do logo "DOM" / "PARTNER GROWTH" (`LOGO_POINTS` em `script.js`) **não mudou** — o Daniel gosta dela e pediu pra manter.
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

## Entrega

O site é entregue como .zip com todas as páginas, `style.css`, `script.js` e os assets, em formato flat (pronto pra upload direto no GitHub Pages). Uma prévia navegável (`preview-artifact.html`, versão single-file com imagens embutidas) também fica publicada como link — não faz parte do zip de entrega.
