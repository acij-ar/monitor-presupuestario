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

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Math&display=swap" rel="stylesheet">



<!-- Main CSS File -->
<link type="text/css" href="./resources/css/acij2.css" rel="stylesheet">

  <style>
  
  html, body {
	  height: 100%;
	  margin: 0;
	  display: flex;
	  flex-direction: column;
	}
	
	.title-section {
		background: var(--bg-dark-green);
		color: var(--text-on-dark) !important;
		border-top: 2px solid #000;
	}

	.main-content {
		flex: 1;
		 background-color: #708F85 !important;
	}
	
	.content-section {
		background-color: #708F85  !important;
		color:#E4EDFE  !important;
	}

	.subtitle {
		font-family : 'helvetica-neue-lt-pro-500'  !important;
		font-size : 1.5rem  !important;
	}
	
	.paragraph {
		font-family : 'helvetica-neue-lt-pro-300'  !important;
		font-size : 1.3rem  !important;
	}
	
	math {
		font-size : 1.3rem  !important;
	}
	
	.link {
		color : #E4EDFE !important;
		font-size : 1.3rem;
		text-decoration: underline;
		cursor: pointer;
	}



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
		
		math {
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
<section class="title-section py-5  ">
  <div class="container px-5" style="margin-left:0.2rem !important;margin-right:0.2rem !important;">
    <h1 class="display-5 title" >Metodología</h1>
  </div>
</section>

<section class="content-section py-5 " >
  <div class="container container-lg container-xl px-5" style="margin-left:0.2rem !important;margin-right:0.2rem !important;" >

	  <h2 class="mt-4 mb-2 subtitle"><strong>Los datos</strong></h2>
	  <p class="paragraph">
	    El Monitor Presupuestario utiliza la información oficial publicada por el Ministerio de Economía de la Nación. 
	    Específicamente, las bases de datos de Presupuesto de gastos y su ejecución detallada, disponibles en 
	    <a  class="link" href="https://www.presupuestoabierto.gob.ar/sici/datos-abiertos" target="_blank">Presupuesto Abierto – Datos</a>.
	  <br>
	    Los datos se actualizan diariamente para garantizar que reflejen los últimos registros publicados por el gobierno.
	  <br>
	    Es importante aclarar que la herramienta refleja únicamente el presupuesto de la Administración Pública Nacional.
	  </p>

  	  <h2 class="mt-4 mb-2 subtitle"><strong>Ajuste por inflación</strong></h2>
	  <p class="paragraph">
	    Para realizar comparaciones en términos reales, todos los montos se ajustan por inflación. 
	    Esto significa que los valores de cada año se expresan en precios actuales, como si estuvieran en la misma moneda de hoy.
	 	<br>
	    El ajuste se realiza utilizando el Índice de Precios al Consumidor (IPC) que el Instituto Nacional de Estadística y Censos (INDEC) 
	    publica para todo el país desde diciembre de 2016.
	  </p>

  	  <h2 class="subtitle mt-3 mb-2"><strong>¿Y antes de 2016?</strong></h2>
	  <p class="paragraph">
	    Entre abril y noviembre de 2016, completamos la serie con datos disponibles del Índice de Precios al Consumidor de la Provincia de Buenos Aires (IPC GBA). 
	    Para años anteriores, se utilizó un índice promedio ponderado de los índices de la Ciudad de Buenos Aires, Córdoba y San Luis.
	  </p>

	  <h2 class="subtitle mt-4 mb-2"><strong>Ajuste por inflación esperada</strong></h2>
	  <p class="font-text-info">
	    Para estimar el presupuesto vigente del año en curso a precios constantes, se incorporan también las proyecciones de inflación del Banco Central (REM), 
	    que permiten calcular la inflación esperada hacia fin de año.
	  </p>

	  <h2 class="subtitle mt-4 mb-2"><strong>¿Qué ajuste por inflación usar?</strong></h2>

	  <h3 class="h5 mt-3 mb-2"><strong>Inflación promedio interanual</strong></h3>
	  <p class="paragraph">
	    Se calcula tomando el promedio de los valores mensuales del IPC de cada año y comparándolo con el promedio del año anterior. 
	    De esta manera, se obtiene cuánto aumentaron los precios en promedio a lo largo del año. 
	    Esta forma de ajuste es especialmente útil para comparar presupuestos anuales, porque suaviza las variaciones de un mes puntual 
	    y refleja mejor el comportamiento general del año.
	  </p>

	  <p class="paragraph" >
	    Sean:<br>
	    <i>t</i>: año de referencia<br>
	    <i>m</i>: mes dentro del año <i>t</i><br>
	    <i>IPC<sub>t,m</sub></i>: valor del índice de precios al consumidor en el mes <i>m</i> del año <i>t</i><br>
	    <i>IPC<sub>t</sub></i>: promedio anual del IPC en el año <i>t</i>, calculado como el promedio de sus 12 meses.<br>
	    <i>IPC<sub>t, dic</sub></i>: valor del índice de precios al consumidor correspondiente a diciembre del año <i>t</i>.
	  </p>
  
	  <p class="paragraph">
	  La inflación promedio interanual del año t en relación al anterior es:
	  </p>

		<math display="block">
		 <msub>
		  <mover><mi>IPC</mi><mo>‾‾‾‾‾</mo></mover>
		  <mi>t</mi>
		</msub>
		  <mo>=</mo>
		  <mfrac>
		    <mn>1</mn>
		    <mn>12</mn>
		  </mfrac>
		  <munderover>
		    <mo>∑</mo>
		    <mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow>
		    <mn>12</mn>
		  </munderover>
		  <msub>
		    <mi>IPC</mi>
		    <mrow><mi>t</mi><mo>,</mo><mi>m</mi></mrow>
		  </msub>
		</math>

		<br><br>
		<math display="block">
		  <mtext>Inflación Promedio Interanual</mtext>
		  <mo>=</mo>
		  <mfrac>
		    <!-- Numerador -->
		    <msub>
		      <mi>IPC</mi>
		      <mi>t</mi>
		    </msub>
		    <!-- Denominador con -1 -->
		    <mrow>
		      <msub>
		        <mi>IPC</mi>
		        <mi>t</mi>
		      </msub>
		      <mo>-</mo>
		      <mn>1</mn>
		    </mrow>
		  </mfrac>
		    <mo>-</mo>
		  <mn>1</mn>
		</math>


  	<h3 class="h5 mt-3 mb-2"><strong>Inflación acumulada anual (dic/dic)</strong></h3>
  <p class="paragraph">
    Se calcula comparando el nivel del IPC de diciembre de cada año con el de diciembre del año anterior. 
    Esta modalidad muestra cuánto subieron los precios de punta a punta en el período y es más apropiada para analizar cierres de año, 
    stocks o valores que se miden específicamente en el último mes del ejercicio.<br><br>
    
    Se toma el valor del IPC de diciembre de cada año:
  </p>
  <br><br>
<math display="block">
  <msub><mi>Inflación acumulada anual</mi><mi>&nbsp;t</mi></msub>
  <mo>=</mo>
  <mfrac>
    <!-- Numerador -->
    <msub>
      <mi>IPC</mi>
      <mi>t,dic</mi>
    </msub>
    <!-- Denominador con -1 -->
    <mrow>
      <msub>
        <mi>IPC</mi>
        <mi>t-1,dic</mi>
      </msub>
    </mrow>
  </mfrac>
    <mo>-</mo>
  <mn>1</mn>
</math>
   
   
   
  </div>
</section>
</main>
<jsp:include page="footer.jsp"></jsp:include>
  
</body>


</html>

