# Site Dom Partner Growth

Documentação do site institucional da Dom Partner Growth, agência de Daniel Gualberto.

## Visão geral

Site estático (HTML, CSS e JavaScript puro, sem framework nem build) com 8 páginas, animações de scroll e uma paleta escura em verde e dourado. O texto segue tom direto, sem travessões (preferência do Daniel: travessão é "coisa de IA" e soa artificial em português).

## Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Home enxuta: hero, 4 frentes, ecossistema (empresas do grupo + grid de produtos), "o que fazemos" (resumo), CTA final |
| `sobre.html` | Quem Somos: posicionamento da agência, bloco do CEO, contador de faturamento, "Como Trabalhamos", essência da marca, método "É · Faz · Fala", cases/resultados |
| `contato.html` | Formulário de contato (envia para WhatsApp) + FAQ |
| `fundador.html` | Página pessoal de Daniel Gualberto: consultoria 1:1 (modelo de negócio, marketing, vendas), jornada, ecossistema de 3 empresas, grid de mentores, galeria de fotos de eventos |
| `comercial.html` | Frente Comercial: funil e rotina de vendas, com links pros produtos CRM e Consultoria Comercial |
| `marketing.html` | Frente Marketing: tráfego e conteúdo, com links pros produtos Loja Online, Gestão de Anúncios e Branding |
| `produtora.html` | Frente Produtora (Papin REC): vídeo institucional e de redes |
| `inteligencia.html` | Frente Inteligência: visão geral de IA e consultoria estratégica, com links pros produtos Automação de IA, ERP e Branding |

### Páginas de produto

Cada produto do ecossistema tem página própria, linkada a partir da home (seção "Nossos produtos", dentro do ecossistema) e das frentes relacionadas:

| Arquivo | Conteúdo |
|---|---|
| `crm.html` | CRM: Yzza organizando o funil, cases relacionados |
| `erp.html` | ERP: parceria com a Olist |
| `branding.html` | Branding: metodologia "Bíblia da marca" + cases reais |
| `loja-online.html` | Loja Online: cases de e-commerce (Abihto, Ameridan, Joy Variedades) |
| `automacao-ia.html` | Automação de IA: agente de atendimento + consultoria de IA |
| `gestao-anuncios.html` | Gestão de Anúncios: dashboards de mídia paga + cases |
| `consultoria-comercial.html` | Consultoria Comercial: diagnóstico e treinamento de vendas |

Header e footer são injetados via JavaScript (`buildHeader()` / `buildFooter()` em `script.js`), a partir de uma lista única de links (`NAV_LINKS`), então todas as páginas ficam sempre sincronizadas.

## Identidade visual

- **Fundo:** verde muito escuro quase preto (`#050F0A`), painéis em verde escuro (`#0B2118` / `#0F2C1F`)
- **Destaque:** dourado (`#C9A227`, `#E4C567`)
- **Texto:** creme (`#EFE9DC`)
- **Tipografia:** Cormorant Garamond (títulos, serifada) + Inter (corpo, sem serifa)
- Cantos arredondados (`14px`), transições suaves (`cubic-bezier(.22,.8,.32,1)`)

## Destaques técnicos

- **Logo em partículas na hero:** o logo se forma como uma nuvem de partículas que se espalham (efeito "disperso") ao rolar a página, feito em `<canvas>`. Os pontos do logo são pré-calculados (array `LOGO_POINTS`) em vez de lidos de uma imagem em tempo real, porque ler pixels de imagem via canvas falhava no ambiente do artifact publicado.
- **Ecossistema animado ("4 frentes"):** esferas (Comercial, Marketing, Produtora, Inteligência) orbitando um núcleo central "DOM", com partículas e anéis girando — estilo painel holográfico. A animação só roda quando a seção entra na tela (Intersection Observer) e respeita `prefers-reduced-motion`.
- **Marquee (rodapé da hero):** faixa de texto rolando com os nomes das frentes, fixada na parte de baixo da hero, visível já na primeira tela, sem precisar rolar.
- **Contadores animados:** números (anos de mercado, empresas atendidas, VGV etc.) sobem de 0 até o valor final quando entram na tela.
- **FAQ em acordeão, barra de progresso de leitura, header que soma/some ao rolar, reveals com fade-in no scroll.**

## Assets

- `assets/logo-white.png`, `assets/logo-color.png` — logo da Dom
- `assets/daniel/` — 3 fotos de Daniel Gualberto em eventos (Rafa Brito, Imersão Ciclo, Growth Machine), usadas na home e na página do fundador

## Arquivos do projeto

- `index.html`, `sobre.html`, `fundador.html`, `comercial.html`, `marketing.html`, `produtora.html`, `inteligencia.html`, `contato.html` — páginas institucionais e de frente
- `crm.html`, `erp.html`, `branding.html`, `loja-online.html`, `automacao-ia.html`, `gestao-anuncios.html`, `consultoria-comercial.html` — páginas de produto
- `style.css` — todo o CSS do site (design system + componentes)
- `script.js` — header/footer compartilhados, todas as animações e o formulário de contato
- `preview-artifact.html` — versão single-file (tudo embutido, imagens em base64) usada só para a prévia publicada como Artifact; **não faz parte do site final** e não entra no zip de entrega

## Pendências / pontos em aberto

- Confirmar se o case "17 vendedores → 4, faturando 6x mais" (nos Resultados da home) é o mesmo cliente da construtora Evoluc (R$3M → R$19M, também ~6x) ou um cliente diferente — hoje os dois estão publicados como cases separados.

## Entrega

O site é entregue como .zip com todas as páginas, `style.css`, `script.js` e a pasta `assets/` (pronto para publicar em qualquer hospedagem estática). Uma prévia navegável também fica publicada como link.
