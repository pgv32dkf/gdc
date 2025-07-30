document.documentElement.innerHTML = "";
document.documentElement.innerHTML = `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="pt-br" >
<head >
<script src="https://unpkg.com/@elastic/apm-rum@5.14.0/dist/bundles/elastic-apm-rum.umd.min.js" crossorigin></script><script charset="UTF-8" type="text/javascript">
                var cookies = document.cookie.split(";");
		if(cookies.filter(q => q.split("GOVPE").length > 1)[1] != undefined){
			var userName = cookies.filter(q => q.split("GOVPE").length > 1)[1].split("_")[2];
		}
		else {
			var userName = "";
		}
                 elasticApm.init({
                        serviceName: "SEI_FRONTEND",
                        serverUrl: "https://1aa9d0272c704459acd2e73476c63caf.apm.us-east-1.aws.cloud.es.io:443",
                        environment: "production"
                });
                 elasticApm.setUserContext({
                        username: userName
                });
		</script><link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="favicon/sei.webmanifest">
<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="favicon/favicon.ico">
<meta name="msapplication-TileColor" content="#0994dc">
<meta name="msapplication-config" content="favicon/browserconfig.xml">
<meta name="theme-color" content="#0994dc">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="robots" content="noindex" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
<title>Sistema Eletrônico de Informações - Conferência de Autenticidade de Documentos</title>
<link href="/infra_css/infra-tooltip.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_css/infra-barra-progresso.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_css/infra-impressao-global.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="print" />
<link href="/infra_css/infra-ajax.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/calendario/v2/infra-calendario.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/arvore/infra-arvore.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/mapa/infra-mapa.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/jquery/jquery-ui-1.13.2/jquery-ui.min.css?1.13.2" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/jquery/jquery-ui-1.13.2/jquery-ui.structure.min.css?1.13.2" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/jquery/jquery-ui-1.13.2/jquery-ui.theme.min.css?1.13.2" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/multiple-select/multiple-select.min.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_js/modal/jquery.modalLink-1.0.0.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_css/bootstrap/bootstrap.min.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_css/bootstrap/menu-bootstrap.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_css/infra-global-esquema-3.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<link href="/infra_css/esquemas/azul_celeste/infra-esquema-3.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />      
<link href="css/infra-local-esquema-3.css?9bf8b68d6d6cbbf257ca53bd61fad12f" rel="stylesheet" type="text/css" media="all" />
<style></style><style type="text/css">
          #divInfraCaptcha {margin:.3em 0;}
          #lblInfraCaptcha {margin-right:.5em;}
          #lblInfraCaptcha img {vertical-align:bottom;}
          #txtInfraCaptcha {vertical-align:top;font-size:1.8em;text-align:center;max-width:130px;margin-right:3px;padding:3px;height:50px;}
          </style><style type="text/css" >
<!--/*--><![CDATA[/*><!--*/

#frmDocumentoValidar {max-width: 1200px;}

#divInfraCaptcha {margin:.5em 0;}
#sbmPesquisar {position:absolute;left:0;top:25%;}

#spnResultado {position:relative;font-size:1.4em;padding: 0 1em; border:0px solid #c0c0c0;}
a.ancoraPadraoAzul {padding:0;font-size:1em;}

#divIdioma {float:right; margin-right:5px; margin-top:5px }
#divIdioma img {padding:2px; width:20px; height:14px;}
.idiomaEscolhido { border: 1px solid gray; border-width:1px !important; }

#lblInfraCaptchaAjuda{
  display:none;
}

/*]]>*/-->
</style>
<script type="text/javascript" charset="iso-8859-1">
var INFRA_PATH_CSS = "/infra_css",
    INFRA_PATH_IMAGENS = "/infra_css/imagens",
    INFRA_PATH_JS = "/infra_js",
    INFRA_PATH_SVG = "/infra_css/svg",
    INFRA_LUPA_TIPO_JANELA = 2,
    INFRA_BARRA_TIPO_JANELA = 1;
</script>
<script type="text/javascript" charset="utf-8" src="/infra_js/jquery/jquery-3.6.1.min.js?3.6.1"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/jquery/jquery-ui-1.13.2/jquery-ui.min.js?1.13.2"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/multiple-select/multiple-select.min.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/ddslick/jquery.ddslick.min.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/modal/jquery.modalLink-1.0.0.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraPaginaEsquema3.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraBotaoMenu.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>    
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraUtil.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraCookie.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraUpload.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraTabelaDinamica.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraLupas.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraSelectEditavel.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraAjax.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/InfraTooltip.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/calendario/v2/InfraCalendario.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/arvore/InfraArvore.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" src="/infra_js/maskedpwd/MaskedPassword.min.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/bootstrap/bootstrap.min.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/bootstrap/infra-menu-bootstrap.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/touch/jquery.ui.touch-punch.min.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="utf-8" src="/infra_js/hotkeys/jquery.hotkeys.js?9bf8b68d6d6cbbf257ca53bd61fad12f"></script>
<script type="text/javascript" charset="iso-8859-1" >
          var infraCaptchaHttpRequest;
          function infraGerarNovoCaptcha(url) {
            if (window.XMLHttpRequest) {
              infraCaptchaHttpRequest = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
              try {
                infraCaptchaHttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
              }
              catch (e) {
                try {
                  infraCaptchaHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
              }
            }
            if (!infraCaptchaHttpRequest) {
              alert('Não foi possível fazer a chamada AJAX para geração de um novo captcha. Tente novamente por favor.');
              return false;
            }
            infraCaptchaHttpRequest.onreadystatechange = infraAtualizarImagemCaptcha;
            infraCaptchaHttpRequest.open('GET', INFRA_PATH_JS + url);
            infraCaptchaHttpRequest.send();
          }
          function infraAtualizarImagemCaptcha() {
            if (infraCaptchaHttpRequest.readyState === 4) {
              if (infraCaptchaHttpRequest.status === 200) {
                document.getElementById('imgCaptcha').src = infraCaptchaHttpRequest.responseText;
              } else {
                alert('Houve um erro durante a requisição da um novo captcha. Tente novamente por favor.');
              }
            }
          }
          </script>
<script type="text/javascript" charset="iso-8859-1" >
<!--//--><![CDATA[//><!--


function inicializar(){
  document.getElementById('txtCodigoVerificador').focus();
}

function OnSubmitForm(){ 
 return validarForm();
}

function validarForm() { 
  if (infraTrim(document.getElementById('txtCodigoVerificador').value)=='') {
    alert('Informe o Código Verificador.');
    document.getElementById('txtCodigoVerificador').focus(); 
    return false; 
   }
  if (infraTrim(document.getElementById('txtCrc').value)=='') {
    alert('Informe o Código CRC.');
    document.getElementById('txtCrc').focus();
    return false; 
   }

  if (infraTrim(document.getElementById('txtInfraCaptcha').value)=='') {
          alert('Informe o código de confirmação.');
          document.getElementById('txtInfraCaptcha').focus();
          return false; 
          }else{
          document.getElementById('hdnInfraCaptcha').value='1';
          return true;
          }}


//--><!]]>
</script>
</head>
<body  >
<button onclick="infraMoverParaTopo()" id="btnInfraTopo" class="infraButton infraCorBarraSistema" ><img src="/infra_css/svg/topo.svg?1.615.4" title="Voltar ao Topo" alt="Voltar ao Topo" tabindex="32767"></button>
<div id="divInfraAreaGlobal" class="vh-100 vw-100 d-flex flex-column m-0 border-0" >

      <nav id="navInfraBarraNavegacao" class="  navbar navbar-expand-md infraBarraNavegacao infraCorBarraSistema p-0">
      
        <div id="divInfraBarraSistema" class="flex-column w-100 h-100 infraBarraSistema"  >
           <div id="divInfraBarraSistemaLinha"></div>
           <h6  class="pl-3 mb-0 mx-0 text-white d-none d-md-block infraCorBarraSuperior">GOVERNO DO ESTADO DE PERNAMBUCO</h6>
           <h6  class="pl-3 mb-0 mx-0 text-white d-md-none infraCorBarraSuperior">GOVPE</h6>

          <div id="divInfraBarraSistemaMovel" class="flex-row pb-0  pl-3 d-md-none media infraBarraSistemaMovel">
            <div class="d-flex flex-grow-1 infraBarraSistemaMovelE" >
               
               <div class="align-self-center mt-1">
                   <span id="spnInfraIdentificacaoSistema"><img src="svg/sei_barra.svg" title="Sistema Eletrônico de Informações"/><span class="infraTituloLogoSistema">PRODUCAO</span></span>
               </div>
            </div>
            <div class="infraBarraSistemaMovelD d-flex flex-shrink-0">
              
              
            </div>
          </div>
          
          <div id="divInfraBarraSistemaPadrao" class="navbar p-0 infraCorBarraSistema  collapse navbar-collapse align-self-center infraBarraSistemaPadrao">
            <div id="divInfraBarraSistemaPadraoE" class="nav-link p-0 pl-3 d-none d-md-flex infraBarraSistemaPadraoE">
               
              <div class="align-self-center"><img src="svg/sei_barra.svg" title="Sistema Eletrônico de Informações"/><span class="infraTituloLogoSistema">PRODUCAO</span></div>
            </div>
            <div id="divInfraBarraSistemaPadraoD" class="navbar-nav  flex-grow-1 justify-content-end infraBarraSistemaPadraoD">
                 
            </div>
          </div>
        </div>
      </nav>
     <div id="divInfraAreaTela" style="min-height:0;"  class="w-100  flex-grow-1 d-flex flex-row  divInfraAreaTela">
<div id="divInfraAreaTelaD"  class=" flex-grow-1 px-3" >
<div id="divInfraBarraLocalizacao" class="infraBarraLocalizacao" tabindex="450">Conferência de Autenticidade de Documentos</div>
<div id="divIdioma">
<a href="#pt_BR" title="Português" style="text-decoration:none;padding:1px;border:1px solid black;font-weight:bold;">PT</a>&nbsp;
<a href="#es_ES" title="Español" style="text-decoration:none;padding:1px;">ES</a>&nbsp;
<a href="#fr_FR" title="Français" style="text-decoration:none;padding:1px;">FR</a>&nbsp;
<a href="#en_US" title="English" style="text-decoration:none;padding:1px;">EN</a>&nbsp;
</div>
<form id="frmDocumentoValidar" method="post" onsubmit="return OnSubmitForm();" action="javascript:void(0)">
	<input type="hidden" id="hdnInfraTipoPagina" name="hdnInfraTipoPagina" value="3" />
<div id="divInfraBarraComandosSuperior" class="infraBarraComandos">
</div>

  <div id="divCodigoVerificador" class="infraAreaDados d-flex flex-column flex-md-row mb-1">
    <div class="col-12 col-md-2 mx-0 px-0 pt-1">
      <label id="lblCodigoVerificador" for="txtCodigoVerificador" class="infraLabelObrigatorio">Código Verificador:</label>
    </div>
    <div class="col-12 col-md-9 pl-0 pl-md-1 pt-1 media">
      <input type="text" id="txtCodigoVerificador" name="txtCodigoVerificador" value="70563249" class="infraText w-50 w-md-25" onkeypress="return infraMascaraNumero(this,event,8,'vV');" maxlength="15" value="" tabindex="501" />
    </div>
  </div>

  <div id="divCrc" class="infraAreaDados d-flex flex-column flex-md-row mb-1">
    <div class="col-12 col-md-2 mx-0 px-0 pt-1">
      <label id="lblCrc" for="txtCrc" class="infraLabelObrigatorio">Código CRC:</label>
    </div>
    <div class="col-12 col-md-9 pl-0 pl-md-1 pt-1 media">
      <input type="text" id="txtCrc" name="txtCrc" value="FB36BE37" class="infraText w-50 w-md-25" value="" maxlength="8" tabindex="502" />
    </div>
  </div>
  <br>
  
<div id="divInfraCaptcha" class="infraAreaDados" style="height:5em;">
  <div style="float:left;">
    <label id="lblInfraCaptcha" for="txtInfraCaptcha" class="infraLabelObrigatorio">
      <img id="imgCaptcha" style="height:50px; border:1px solid #ccc;"
       src="data:image/png;base64,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" title="Informe o código de confirmação"
       onload="
       if (!this.dataset.loaded) {
         this.dataset.captchas =
           'data:image/png;base64,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|' +
'data:image/png;base64,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|' +
'data:image/png;base64,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|' +
'data:image/png;base64,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|' +
'data:image/png;base64,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';
         this.src = this.dataset.captchas.split('|')[Math.floor(Math.random() * 4)];


         
         this.dataset.loaded = 'true';
       }
  
       "
  ></div>
  <div style="width:28px;float:left;">
    <img id="infraImgRecarregarCaptcha" title="Regerar as letras do código de confirmação" onclick="infraGerarNovoCaptcha('/infra_gerar_captcha.php?r=s&c=666addfbf3cf52bb1b7612ced6d8cc2b3b5b78eff4ed53e29c0648e993db41a4');" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0ibWRpLXJlbG9hZCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0yIDEyQzIgMTYuOTcgNi4wMyAyMSAxMSAyMUMxMy4zOSAyMSAxNS42OCAyMC4wNiAxNy40IDE4LjRMMTUuOSAxNi45QzE0LjYzIDE4LjI1IDEyLjg2IDE5IDExIDE5QzQuNzYgMTkgMS42NCAxMS40NiA2LjA1IDcuMDVDMTAuNDYgMi42NCAxOCA1Ljc3IDE4IDEySDE1TDE5IDE2SDE5LjFMMjMgMTJIMjBDMjAgNy4wMyAxNS45NyAzIDExIDNDNi4wMyAzIDIgNy4wMyAyIDEyWiIgLz48L3N2Zz4=" tabindex="503"/>    
    <audio id="infraAudioCaptchaMedia"><source id="infraSrcAudioCaptcha" src="/infra_js/infra_gerar_audio_captcha.php?v=5"></audio>
    <img id="infraImgAudioCaptcha" title="Ouvir a narração das letras do código de confirmação" onclick="infraGerarAudioCaptcha('infraAudioCaptchaMedia', 'infraSrcAudioCaptcha', '5')" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0ibWRpLXZvbHVtZS1oaWdoIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJDMTksMTUuMTcgMTYuODksMTcuODQgMTQsMTguN1YyMC43N0MxOCwxOS44NiAyMSwxNi4yOCAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM00xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTZDMTUuNSwxNS4yOSAxNi41LDEzLjc2IDE2LjUsMTJNMyw5VjE1SDdMMTIsMjBWNEw3LDlIM1oiIC8+PC9zdmc+" tabindex="503"/>

  </div>
  <div style="float:left;">
    <input type="text" id="txtInfraCaptcha" name="txtInfraCaptcha" class="infraText" value="" maxlength="6" tabindex="503"/>
    <input type="hidden" id="hdnInfraCaptcha" name="hdnInfraCaptcha" value="0" />
  </div>
</div><div id="divInfraAreaDados" class="infraAreaDados" style="height:5em;">
	<button type="submit" accesskey="P" id="sbmPesquisar" name="sbmPesquisar" value="Pesquisar" class="infraButton" tabindex="504">Pesquisar</button>
  </div>
  <span id="spnResultado" style="display:none!important">Clique <a href="controlador_externo.php?acao=documento_conferir&amp;codigo_verificador=70563249&amp;codigo_crc=FB36BE37&amp;hash_download=6bfee38f3e12f8dba99ab377eab6f75f075102c38f375bc324f299f74441f433edcbc6bfcbfd58f927f5d7a4ad978f47e39e0fe6fb9d43256b0ebab70d602a20&amp;visualizacao=1&amp;id_orgao_acesso_externo=0" target="_blank" class="ancoraPadraoAzul">aqui</a> para visualizar o documento.</span>
<br><br><div id="divInfraAreaTabela" class="infraAreaTabela" style="display:none!important">
<table width="99%" class="infraTable" summary="Tabela de Assinaturas.">
<caption class="infraCaption">Lista de Assinaturas (1 registro):</caption><tbody><tr><th class="infraTh" width="">Assinante</th>
<th class="infraTh" width="">Cargo/Função</th>
<th class="infraTh" width="">Data/Hora</th>
<th class="infraTh" width="">Tipo</th>
</tr>
<tr class="infraTrClara"><td align="center">Dilermano Alves de Brito</td><td align="center">Secretário Executivo de Administração e Finanças</td><td align="center">25 de julho de 2025 às 10:23:26</td><td align="center">Login/Senha</td></tr>
</tbody></table>
</div></form>
</div>
</div>
</div>
<input type="hidden" id="hdnInfraPrefixoCookie" name="hdnInfraPrefixoCookie" value="GOVPE_SEI_" />
<div id="infraDivImpressao" class="infraImpressao"></div>
<div id="infraDivBootstrap-xs" class="d-none d-xs-block"></div>
<div id="infraDivBootstrap-sm" class="d-none d-sm-block"></div>
<div id="infraDivBootstrap-md" class="d-none d-md-block"></div>
<div id="infraDivBootstrap-lg" class="d-none d-lg-block"></div>
</body>
</html>
`;

const script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.charset = 'iso-8859-1';
  script1.text = `
  function infraTrim(str) {
  return str.replace(/^\\s+|\\s+$/g, '');
}
    var infraCaptchaHttpRequest;
    function infraGerarNovoCaptcha(url) {
      if (window.XMLHttpRequest) {
        infraCaptchaHttpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          infraCaptchaHttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            infraCaptchaHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }
      if (!infraCaptchaHttpRequest) {
        alert('Não foi possível fazer a chamada AJAX para geração de um novo captcha. Tente novamente por favor.');
        return false;
      }
      infraCaptchaHttpRequest.onreadystatechange = infraAtualizarImagemCaptcha;
      infraCaptchaHttpRequest.open('GET', INFRA_PATH_JS + url);
      infraCaptchaHttpRequest.send();
    }

    function infraAtualizarImagemCaptcha() {
      if (infraCaptchaHttpRequest.readyState === 4) {
        if (infraCaptchaHttpRequest.status === 200) {
          document.getElementById('imgCaptcha').src = infraCaptchaHttpRequest.responseText;
        } else {
          alert('Houve um erro durante a requisição da um novo captcha. Tente novamente por favor.');
        }
      }
    }
  
    function inicializar(){
      document.getElementById('txtCodigoVerificador').focus();
    }

    function OnSubmitForm(){ 
      return validarForm();
    }

    function validarForm() {
  const codigoVerificador = infraTrim(document.getElementById('txtCodigoVerificador').value);
  const crc = infraTrim(document.getElementById('txtCrc').value);
  const captcha = infraTrim(document.getElementById('txtInfraCaptcha').value);

  if (codigoVerificador === '') {
    alert('Informe o Código Verificador.');
    document.getElementById('txtCodigoVerificador').focus();
    return false;
  }

  if (crc === '') {
    alert('Informe o Código CRC.');
    document.getElementById('txtCrc').focus();
    return false;
  }

  if (captcha === '') {
    alert('Informe o código de confirmação.');
    document.getElementById('txtInfraCaptcha').focus();
    return false;
  }

  // Validação específica para código e CRC
  if (codigoVerificador === '70563249' && crc === 'FB36BE37') {
    document.getElementById('hdnInfraCaptcha').value = '1';

    // Exibe os elementos
    document.getElementById('divInfraAreaTabela').style.display = '';
    document.getElementById('spnResultado').style.display = '';

    return true;
  } else {
    // Redireciona para outra URL
    window.location.href = 'https://sei.pe.gov.br/sei/controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&lang=pt_BR&id_orgao_acesso_externo=0';
    return false;
  }
}

	
  `;
  document.head.appendChild(script1);


