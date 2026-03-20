<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>



<html>

<head>
 <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>ACIJ - Monitor Presupuestario</title>
  <meta name="description" content="">
  <meta name="keywords" content="">




 <!-- Bootstrap 4.6 + deps -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css">


<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet"/>



<!-- Main CSS File -->
<link type="text/css" href="./resources/css/acij2.css" rel="stylesheet">

 <style>
	html, body {
	  height: 100%;
	  margin: 0;
	  display: flex;
	  flex-direction: column;
	  font-family: "Helvetica Neue LT45 Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
	  
	}
	
	


	.main-content {
		background-color: #708F85 !important;
		flex: 1;
	}
	
	.title-section {
		background: var(--bg-dark-green);
		color: var(--text-on-dark) !important;
		border-top: 2px solid #000;
	}
	
	
	.content-section {
		background-color: #e5eeff !important;
		color:#03624c !important;
		      margin: 0;
      padding: 40px 20px;
      line-height: 1.6;
	}
	
	
	.subtitle {
		font-family : 'helvetica-neue-lt-pro-500'  !important;
		font-size : 1.5rem  !important;
	}
	
	.paragraph {
		font-family : 'helvetica-neue-lt-pro-300'  !important;
		font-size : 1.3rem  !important;
	}
	
	.link {
		color : #E4EDFE !important;
		font-size : 1.3rem;
		text-decoration: underline;
		cursor: pointer;
	}
	
	/* Espaciados */
	section {
	  padding-top: 3rem;
	  padding-bottom: 3rem;
	}
	  
	
	@media(min-width: 1900px) {
		.container-xl{
			max-width: 1900px;
		}
	}
	
	@media(max-width: 767px) {
		.title {
			font-size : 2.5rem !important;
		}
		
		.paragraph {
			font-size : 1rem  !important;
		}
	}
	
	
	
	  h1 {
      color: #03624c;
      font-size: 2em;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p.intro {
      color: #03624c;
      font-size: 1.05em;
      margin-bottom: 40px;
      max-width: 800px;
    }

    h2 {
      background-color: #03624c;
      color: #ffffff;
      padding: 15px 20px;
      margin: 10px 0;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.2em;
      font-weight: 550;
      transition: background-color 0.3s ease;
    }

    h2:hover {
      background-color: #03624c;
    }

    .content {
      display: none;
      padding: 15px 25px;
      border-left: 4px solid #eb6333;
      margin-bottom: 15px;
      color: #03624c;
      font-size: 1em;
      background-color: #f9f9f9;
      border-radius: 0 6px 6px 0;
    }

    .active + .content {
      display: block;
    }

    a {
      color: #eb6333;
      text-decoration: none;
      font-weight: 500;
    }

    a:hover {
      text-decoration: underline;
    }
	 
 </style>

</head>

<body>

<!-- MENU HEADER -->
<div class="hero">
  <div class="container-fluid px-5 ">
    <jsp:include page="menu.jsp"></jsp:include>
  </div>
</div>


<!-- MAIN CONTENT-->
<main class="main-content">

<!-- TITLE SECTION -->
<section class="title-section py-5">
  <div class="container px-5" style="margin-left:0.2rem !important;margin-right:0.2rem !important;">
    <h1 class="display-5 title" style="color:var(--text-on-dark) !important">Preguntas frecuentes</h1>
  </div>
</section>

<!-- CONTENT SECTION -->
<section class="content-section py-5" >
  <p class="intro">En esta sección vas a encontrar algunas preguntas frecuentes a la hora de analizar el presupuesto y una serie de materiales complementarios para hacer ese análisis.</p>

  <h2>¿Cómo puedo saber qué hace una dependencia o programa determinado?</h2>
  <div class="content">
    <p>Podés leer los fascículos por entidad o jurisdicción que a nivel nacional se encuentran publicados en la web de la <a href="https://www.economia.gob.ar/onp/" target="_blank">Oficina Nacional de Presupuesto</a>. Estos documentos incluyen las descripciones de los objetivos de cada uno de los programas que administran las diferentes entidades o jurisdicciones, con sus correspondientes actividades y metas físicas.</p>
  </div>

  <h2>¿De dónde vienen los recursos de la Nación?</h2>
  <div class="content">
    <p>El Estado Nacional obtiene los recursos a través de la recaudación de impuestos y tasas, de la venta de activos, a partir de operaciones de financiamiento como la toma de deuda pública, o de préstamos provenientes de la cooperación internacional, entre otros.</p>
  </div>

  <h2>¿Cómo puedo saber en qué se gastó el dinero de un programa determinado?</h2>
  <div class="content">
    <p>Podés buscar el clasificador presupuestario según el objeto del gasto, es decir según el tipo de bienes y servicios que compra o contrata. Esa información está disponible tanto en los fascículos por jurisdicción o entidad publicados en la web de la <a href="https://www.economia.gob.ar/onp/" target="_blank">Oficina Nacional de Presupuesto</a> como en los informes de seguimiento físico financiero trimestrales o en las cuentas de inversión.</p>
  </div>

  <h2>¿Cómo puedo saber si se produjeron reasignaciones?</h2>
  <div class="content">
    <p>Tenés que comparar el presupuesto vigente con relación al original y buscar si hay explicaciones al respecto en los informes de seguimiento físico financiero trimestrales que publica la <a href="https://www.economia.gob.ar/onp/" target="_blank">Oficina Nacional de Presupuesto</a> en el caso de la Nación.</p>
  </div>

  <h2>¿Por qué no encuentro un programa o actividad de gobierno por el nombre con que lo veo en los medios?</h2>
  <div class="content">
    <p>Esto puede deberse a la falta de correlación entre los planes anunciados públicamente y el diseño presupuestario en los documentos oficiales. Para encontrar su reflejo presupuestario, probablemente debas hacer una consulta a la institución a cargo de su implementación, ya sea a través de un correo electrónico, o mediante la presentación de un pedido de acceso a la información pública. En la página 47 de la <a href="https://acij.org.ar/wp-content/uploads/2020/06/Gui%CC%81a-para-el-ana%CC%81lisis-presupuestario-en-violencia-de-ge%CC%81nero-en-Argentina.pdf" target="_blank">Guía para el Análisis Presupuestario de Políticas contra la Violencia de Género</a> encontrarás un modelo para hacer ese pedido.</p>
  </div>


  <h2>¿Qué es la administración pública nacional y qué organismos comprende?</h2>
  <div class="content">
    <p>El presupuesto nacional abarca la Administración Central, los Organismos Descentralizados y las Instituciones de la Seguridad Social. También contiene las transferencias que el Estado Nacional realiza a las provincias y municipios y a otros entes que forman parte del Sector Público Nacional, quienes a su vez confeccionan sus propios presupuestos. La Administración Nacional está integrada por la Administración Central, los Organismos Descentralizados, las Instituciones de Seguridad Social; las Empresas y Sociedades del Estado; los Entes Interestaduales; las Universidades Nacionales; los Fondos Fiduciarios; las Obras Sociales Estatales y otros Entes que si bien pertenecen al Sector Público Nacional no Financiero no revisten el carácter de empresa o sociedad del Estado y no consolidan en el presupuesto de la Administración Nacional; y por el Sector Público Nacional Financiero, integrado por el Sistema Bancario Oficial, Empresas Públicas Financieras y otras Instituciones Públicas Financieras.</p>
  </div>

  <h2>¿Qué son los organismos descentralizados?</h2>
  <div class="content">
    <p>Son organismos que no dependen jerárquicamente del gobierno central y que tienen ciertas competencias y facultades autónomas, aunque funcionen bajo la órbita estatal. Por ejemplo, la <a href="https://www.agn.gov.ar/" target="_blank">Auditoría General de la Nación</a> y la <a href="https://www.sigen.gob.ar/" target="_blank">Sindicatura General de la Nación</a>.</p>
  </div>

  <h2>¿Qué documentos puedo mirar para completar el análisis de los datos presupuestarios?</h2>
  <div class="content">
    <p>Podés consultar:</p>
    <ul>
      <li>Los planes de acción interministeriales, que suelen incluir información presupuestaria, diagnósticos y estrategias de intervención.</li>
      <li>Las normas relativas al tema que estás analizando, que te permiten conocer el alcance de las obligaciones estatales.</li>
      <li>Los <a href="https://www.presupuestoabierto.gob.ar/sici/" target="_blank">datos abiertos presupuestarios</a>, que ofrecen actualizaciones frecuentes y un alto nivel de detalle.</li>
      <li>Los informes de la <a href="https://www.opc.gob.ar/" target="_blank">Oficina de Presupuesto del Congreso</a> y de la <a href="https://www.economia.gob.ar/onp/" target="_blank">Oficina Nacional de Presupuesto</a>.</li>
    </ul>
  </div>
</section>

</main>
<jsp:include page="footer.jsp"></jsp:include>
  
</body>
<script>
    const questions = document.querySelectorAll('h2');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
      });
    });
  </script>

</html>

