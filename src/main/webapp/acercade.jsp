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
		background-color: #708F85 !important;
		color:#E4EDFE !important;
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
    <h1 class="display-5 title" >¿Por qué un monitor presupuestario?</h1>
  </div>
</section>

<!-- CONTENT SECTION -->
<section class="content-section py-5" >
  <div class="container container-lg container-xl px-5" style="margin-left:0.2rem !important;margin-right:0.2rem !important;" >
  
    <h2 class="mb-2 subtitle"><strong>Nuestro compromiso con la transparencia</strong></h2>
  
    <p class="paragraph">
		Desde la Asociación Civil por la Igualdad y la Justicia (ACIJ) creamos el <strong>Monitor Presupuestario</strong> para promover el acceso a la información del 
		presupuesto nacional de manera sencilla, desagregada. Nuestro objetivo es mejorar la <strong>transparencia</strong>, fortalecer el <strong>control ciudadano</strong> 
		y el <strong>debate público</strong> sobre el uso del presupuesto.
	</p>
	
    <p class="paragraph">
    	La plataforma reúne <strong>información sobre los presupuestos</strong> de organismos, ministerios, secretarías, programas y actividades <strong>desde el año 1995 
    	hasta la actualidad.</strong> Permite seguir el presupuesto aprobado por el Congreso, el presupuesto vigente (con las modificaciones del Poder Ejecutivo) 
    	y la ejecución de cada año. Además, ofrece la posibilidad de ajustar los valores por inflación, facilitando la comparación a lo largo de los años.
    </p>
    
    <p class="paragraph">
    	De esta manera, contribuye a <strong>identificar y visibilizar situaciones de discriminación y exclusión</strong> en la garantía de derechos.
    </p>
     
    <h2 class="mt-4 mb-2 subtitle" style="font-size:1.5rem !important"><strong>Análisis presupuestario</strong></h2>
      
    <p  class="paragraph">
		  Para aprender más sobre el monitoreo presupuestario, te invitamos a consultar las siguientes <strong>guías de ACIJ</strong>, 
		  diseñadas como herramientas para las organizaciones de la sociedad civil: 
   	</p>
   	
   	 <ul>
	  <li>
	    <a class="link" href="https://acij.org.ar/wp-content/uploads/2020/06/Guia-Analisis-Presupuestario-Con-Perspectiva-de-Genero.pdf" target="_blank">
	      Guía de análisis presupuestario con perspectiva de género
	    </a>
	  </li>
	  <li>
	    <a class="link" href="https://acij.org.ar/wp-content/uploads/2020/06/Gui%CC%81a-para-el-ana%CC%81lisis-presupuestario-en-violencia-de-ge%CC%81nero-en-Argentina.pdf" target="_blank">
	      Guía para el análisis presupuestario de políticas contra la violencia de género en Argentina
	    </a>
	  </li>
	</ul>
	
  </div>
</section>

</main>
<jsp:include page="footer.jsp"></jsp:include>
  
</body>


</html>

