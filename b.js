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
<body onload="inicializar();"  >
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
<a href="controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&id_orgao_acesso_externo=0&lang=pt_BR" title="Português" style="text-decoration:none;padding:1px;border:1px solid black;font-weight:bold;">PT</a>&nbsp;
<a href="controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&id_orgao_acesso_externo=0&lang=es_ES" title="Español" style="text-decoration:none;padding:1px;">ES</a>&nbsp;
<a href="controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&id_orgao_acesso_externo=0&lang=fr_FR" title="Français" style="text-decoration:none;padding:1px;">FR</a>&nbsp;
<a href="controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&id_orgao_acesso_externo=0&lang=en_US" title="English" style="text-decoration:none;padding:1px;">EN</a>&nbsp;
</div>
<form id="frmDocumentoValidar" method="post" onsubmit="return OnSubmitForm();" action="controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&lang=pt_BR&id_orgao_acesso_externo=0">
	<input type="hidden" id="hdnInfraTipoPagina" name="hdnInfraTipoPagina" value="3" />
<div id="divInfraBarraComandosSuperior" class="infraBarraComandos">
</div>

  <div id="divCodigoVerificador" class="infraAreaDados d-flex flex-column flex-md-row mb-1">
    <div class="col-12 col-md-2 mx-0 px-0 pt-1">
      <label id="lblCodigoVerificador" for="txtCodigoVerificador" class="infraLabelObrigatorio">Código Verificador:</label>
    </div>
    <div class="col-12 col-md-9 pl-0 pl-md-1 pt-1 media">
      <input type="text" id="txtCodigoVerificador" name="txtCodigoVerificador" class="infraText w-50 w-md-25" onkeypress="return infraMascaraNumero(this,event,8,'vV');" maxlength="15" value="" tabindex="501" />
    </div>
  </div>

  <div id="divCrc" class="infraAreaDados d-flex flex-column flex-md-row mb-1">
    <div class="col-12 col-md-2 mx-0 px-0 pt-1">
      <label id="lblCrc" for="txtCrc" class="infraLabelObrigatorio">Código CRC:</label>
    </div>
    <div class="col-12 col-md-9 pl-0 pl-md-1 pt-1 media">
      <input type="text" id="txtCrc" name="txtCrc" class="infraText w-50 w-md-25" value="" maxlength="8" tabindex="502" />
    </div>
  </div>
  <br>
  
<div id="divInfraCaptcha" class="infraAreaDados" style="height:5em;">
  <div style="float:left;">
    <label id="lblInfraCaptcha" for="txtInfraCaptcha" class="infraLabelObrigatorio">
    <img id="imgCaptcha" src="data:image/png;base64,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" title="Informe o código de confirmação" /></label>
  </div>
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
</form>
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
</html>  const script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.charset = 'iso-8859-1';
  script1.text = \`
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
      } else {
        document.getElementById('hdnInfraCaptcha').value='1';
        return true;
      }
    }
	
  \`;
  document.head.appendChild(script1);


`;
