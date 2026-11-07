/* Rastreio próprio da Dom Partner Growth.
   Guarda, só na aba do visitante (sessionStorage), por quais páginas ele passou.
   Nada é enviado a terceiros. Os dados só vão ao CRM se a pessoa enviar o formulário. */
(function(){
  var NOMES={
    'index':'Home','comercial':'Frente Comercial','marketing':'Frente Marketing','produtora':'Frente Produtora (Papin REC)','inteligencia':'Frente Inteligência',
    'crm':'Produto CRM','consultoria-comercial':'Produto Consultoria Comercial','gestao-anuncios':'Produto Gestão de Anúncios','loja-online':'Produto Loja Online',
    'automacao-ia':'Produto Automação de IA','erp':'Produto ERP','branding':'Produto Branding','sobre':'Quem somos','advisor':'Advisor (consultorias do Daniel)',
    'cases':'Cases','contato':'Contato','privacidade':'Privacidade'};
  var NAO_PRODUTO={contato:1,privacidade:1};
  function slug(p){p=(p||'').split('?')[0].split('#')[0].replace(/^.*\//,'').replace(/\.html$/,'');return p||'index'}
  function qs(k){try{return new URLSearchParams(location.search).get(k)||''}catch(e){return ''}}
  function ler(){try{return JSON.parse(sessionStorage.getItem('dom_rastreio')||'null')}catch(e){return null}}
  function gravar(o){try{sessionStorage.setItem('dom_rastreio',JSON.stringify(o))}catch(e){}}
  var atual=slug(location.pathname), agora=new Date().toISOString();
  var s=ler()||{entrada:{pagina:atual,referrer:document.referrer||'',utm_source:qs('utm_source'),utm_medium:qs('utm_medium'),utm_campaign:qs('utm_campaign'),ts:agora},paginas:[],ultima:''};
  if(!s.paginas.length||s.paginas[s.paginas.length-1].p!==atual){s.paginas.push({p:atual,ts:agora});if(s.paginas.length>40)s.paginas.shift()}
  if(!NAO_PRODUTO[atual])s.ultima=atual;
  gravar(s);

  /* Todo botão que leva ao formulário carrega a página de onde saiu */
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;
    var h=a.getAttribute('href')||'';
    if(!/^contato\.html(\?|#|$)/.test(h)||/[?&]de=/.test(h))return;
    var i=h.indexOf('#'),base=i>-1?h.slice(0,i):h,hash=i>-1?h.slice(i):'';
    a.setAttribute('href',base+(base.indexOf('?')>-1?'&':'?')+'de='+encodeURIComponent(atual)+hash);
  },true);

  /* Usado pelo formulário na hora do envio */
  window.domRastreio=function(){
    var st=ler()||s, de=slug(qs('de')), origem=qs('de')?de:(st.ultima||''), e=st.entrada||{};
    return {
      pagina_origem:origem?origem+'.html':'',
      produto_interesse:origem?(NOMES[origem]||origem):'',
      pagina_entrada:(e.pagina||'')+'.html',
      jornada:(st.paginas||[]).map(function(x){return x.p}).join(' > '),
      referrer_inicial:e.referrer||'',
      utm_source:qs('utm_source')||e.utm_source||'',utm_medium:qs('utm_medium')||e.utm_medium||'',utm_campaign:qs('utm_campaign')||e.utm_campaign||''
    };
  };
})();
