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

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">




<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">


<!-- Main CSS File -->
<link type="text/css" href="./resources/css/acij2.css" rel="stylesheet">
<link type="text/css" href="./resources/css/icons.css" rel="stylesheet">


<style>
	 html, body {
	  height: 100%;
	  margin: 0;
	  display: flex;
	  flex-direction: column;
	}
	
	body {
	  background: #e5eeff;
	}
	
	.main-content {
		flex: 1;
		background-color: #708F85 !important; 
	}
	
	.title-section {
		background: var(--bg-dark-green);
		color: var(--text-on-dark) !important;
		border-top: 2px solid #000;
	}
	
	.section-1 {
	  background-color: #97C0A2 !important;
	  color:#126B54 !important;
	  border-top: 2px solid #000;
  	  font-family : 'helvetica-neue-lt-pro-300'  !important;
	}
	
	.section-2 {
	  background-color: #E5EEFF  !important;
	  color:#126B54  !important;
	  border-top: 2px solid #000;
  	  font-family : 'helvetica-neue-lt-pro-300'  !important;
	}
	
	.section-3 {
	  background-color: #D5E6DA  !important;
	  color:#126B54  !important;
	  border-top: 2px solid #000;
  	  font-family : 'helvetica-neue-lt-pro-300'  !important;
	}
	
	.subtitle {
		font-family : 'helvetica-neue-lt-pro-500'  !important;
		font-size : 1.5rem  !important;
	}
	
	.paragraph {
		font-family : 'helvetica-neue-lt-pro-300'  !important;
		font-size : 1.3rem  !important;
	}
	
	.border-right {
		border-right: 2px solid black !important
	}
		
	@media(min-width: 1900px) {
		.container-xl{
			max-width: 1900px;
		}
	}
	
	@media (max-width: 767px) {
	  h1.display-3 {
	    font-size: 2rem;
	  }
	
	  h5 {
	    justify-content: flex-start;
	  }
	  
	  .border-right {
		border-right: none !important
	  }
	
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
<div class="hero">
  <div class="container-fluid px-5 ">
     <jsp:include page="menu.jsp"></jsp:include>
  </div>
</div>


<main class="main-content">

<section class="title-section py-5">
  <div class="container px-5" style="margin-left:0.2rem !important;margin-right:0.2rem !important;">
    <h1 class="display-5 title">Como usar</h1>
  </div>
</section>

 <!-- Intro -->
    <section class="section-1 py-5 ">
      <div class="container container-lg container-xl px-5 text-center" >
        <p class="paragraph ">
        	El Monitor Presupuestario está diseñado para que cualquier persona pueda explorar cómo se utilizan los fondos públicos, ya sea con fines de investigación, incidencia o interés ciudadano.

        </p>

        <h3>Cuenta con dos partes principales</h3>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <img src="${pageContext.request.contextPath}/assets/img/comousar.png" alt="Ejemplo Monitor" class="img-fluid ">
          </div>
        </div>
        
        <p class="mt-3 text-left paragraph">
        A la izquierda: los filtros y opciones de búsqueda.<br>
		A la derecha: los resultados, que pueden verse en distintos formatos.
        
        </p>
      </div>
    </section>

    <!-- Funciones del Monitor -->
    <section class="section-2 py-5" >
      <div class="container container-lg container-xl px-5">
         <h2 class="subtitle mb-4">Funciones del Monitor</h2>
		    <p class="mb-5 paragraph">
		    	 El Monitor Presupuestario cuenta con <strong>tres funciones complementarias</strong>. 
		    	 Cada una ofrece una forma distinta de acceder a la información, desde una visión general hasta el análisis detallado y comparativo de partidas a lo largo del tiempo.
		    </p>

   		 <div class="row g-4 ">
		      <!-- Navegar -->
		      <div class="col-md-4 border-right" >
		        <div class="funcion-card h-100">
		          <h4 class="mb-3">
		            <span class="icon-navegar-verde"></span>&nbsp;Navegar
		          </h4>
		          <p class="paragraph">
		          	 Te permite recorrer de manera visual toda la estructura del presupuesto a través de un gráfico en forma de sol (sunburst).<br><br>
					Además de mostrar la magnitud de cada partida, este formato facilita identificar jerarquías, dependencias y proporciones dentro del presupuesto.<br> <br>
					Te permite comparar áreas, detectar concentraciones de recursos y explorar con mayor claridad cómo se distribuyen los fondos en los distintos niveles.<br>
		
		          </p>
		        </div>
		      </div>
		
		      <!-- Explorar -->
		      <div class="col-md-4 border-right" >
		        <div class="funcion-card h-100">
		          <h4 class="mb-3">
		            <span class="icon-explorar-verde"></span>&nbsp;Explorar
		          </h4>
		          <p class="mb-2 paragraph">La opción más detallada. Paso a paso podés:</p>
		          <ol class="funcion-list paragraph">
		            <li>Elegir el año de consulta.</li>
		            <li>
		              Seleccionar el tipo de presupuesto:
		              <ul>
		                <li><strong>inicial</strong> (aprobado)</li>
		                <li><strong>vigente</strong> (modificado)</li>
		                <li><strong>devengado</strong> (ejecutado)</li>
		              </ul>
		              los tres juntos o el % de ejecución.
		            </li>
		            <li>
		              Decidir cómo ver los valores:
		              <ul>
		                <li><strong>Nominales</strong> (sin ajuste).</li>
		                <li><strong>Reales</strong> (ajustados por inflación: promedio interanual o total anual).</li>
		              </ul>
		            </li>
		            <li>
		              <strong>Seleccionar la partida:</strong> por defecto se muestra el total, pero podés ir entrando de forma anidada en ministerios, organismos, programas y actividades.
		            </li>
		          </ol>
		        </div>
		      </div>

		      <!-- Comparar -->
		      <div class="col-md-4">
		        <div class="funcion-card h-100">
		          <h4 class="mb-3">
		            <span class="icon-comparar-verde"></span>&nbsp;Comparar
		          </h4>
		          <p class=" mb-2 paragraph">
		            Con esta opción podés analizar la evolución de distintas partidas formando dos grupos.
		          </p>
		          <ol class="funcion-list paragraph">
		            <li>Seleccioná la partida que quieras analizar.</li>
		            <li>Agregala a uno de los dos grupos disponibles.</li>
		            <li>Todas las partidas de un mismo grupo se suman entre sí.</li>
		            <li>El gráfico muestra la comparación entre ambos grupos a lo largo del tiempo.</li>
		          </ol>
		          <p class="mt-3 paragraph"><strong>¿Para qué sirve?</strong><br>
		            Para reconstruir políticas que cambiaron de nombre o de composición.<br>
		            Para comparar la evolución de partidas diferentes.
		          </p>
		        </div>
		      </div>
    	</div>
      </div>
   </section>

   <section class="py-5 section-3">
      <div class="container container-lg container-xl px-5">
        <h2 class="mb-5">Formas de visualizar los resultados</h2>
        <div class="row g-4 text-center ">
          <div class="col-md-3 border-right" >
            <h4 ><i class="fa-regular fa-file-lines me-2 text-brand"></i>&nbsp;Resumen</h4>
            <p class="paragraph">Vista rápida con los datos principales.</p>
          </div>
          <div class="col-md-3 border-right">
            <h4><i class="fa-solid fa-chart-column me-2 text-brand"></i>&nbsp;Gráfico</h4>
            <p class="paragraph">Evolución de la partida a lo largo de los años.</p>
          </div>
          <div class="col-md-3 border-right" >
            <h4 ><i class="fa-solid fa-table me-2 text-brand"></i>&nbsp;Tabla</h4>
            <p class="paragraph">Detalle interno para el año seleccionado.</p>
          </div>
          <div class="col-md-3">
            <h4 ><i class="fa-regular fa-clock me-2 text-brand"></i>&nbsp;Ejecución</h4>
            <p class="paragraph">Ejecución mes a mes en cada año disponible.</p>
          </div>
        </div>
      </div>
   </section>
</main>
<jsp:include page="footer.jsp"></jsp:include>
  
</body>


</html>

