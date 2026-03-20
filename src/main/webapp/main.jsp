<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>



<html>
	<meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>ACIJ - Monitor Presupuestario</title>
  <meta name="description" content="">
  <meta name="keywords" content="">
<head>
<!-- Ionicons -->
<link type="text/css" rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

<!-- Google Font: Source Sans Pro -->
<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700">

<!-- Font Awesome -->
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

<!-- jQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" /></script>

<!-- jQuery UI-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">


<link href="./resources/ilanding/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="./resources/ilanding/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="./resources/ilanding/vendor/aos/aos.css" rel="stylesheet">
<link href="./resources/ilanding/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="./resources/ilanding/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

<!-- Main CSS File -->
<link type="text/css" href="./resources/ilanding/css/main.css" rel="stylesheet">

<!-- Select2 -->
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@x.x.x/dist/select2-bootstrap4.min.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.full.min.js"></script>

<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-bs4/1.11.3/dataTables.bootstrap4.min.css"/>
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-responsive-bs4/2.2.9/responsive.bootstrap4.min.css"/>
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-colreorder-bs4/1.5.5/colReorder.bootstrap4.min.css"/>
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-rowgroup-bs4/1.1.4/rowGroup.bootstrap4.min.css"/>

 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/js/jquery.dataTables.min.js"></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-bs4/1.11.3/dataTables.bootstrap4.min.js"></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables-responsive/2.2.9/dataTables.responsive.min.js"></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-responsive-bs4/2.2.9/responsive.bootstrap4.min.js"></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-colreorder/1.5.5/dataTables.colReorder.min.js"></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-rowgroup/1.1.4/dataTables.rowGroup.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js"></script>

  

</head>
<body class="index-page">

  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">Monitor presupuestario</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Inicio</a></li>
          <li><a href="#monitor">¿Qué es el monitor?</a></li>
          <li><a href="#como-usar">¿Cómo usar el monitor?</a></li>
          <li><a href="#metodologia">Metodologia</a></li>
          <li><a href="#glosario">Glosario</a></li>
          <li class="dropdown"><a href="#monitor-explorar"><span>Monitor</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="${pageContext.request.contextPath}/explorar/monitor.html">Explorar</a></li>
	          <li><a href="${pageContext.request.contextPath}/comparador/monitor.html">Comparar</a></li>
	          <li><a href="${pageContext.request.contextPath}/ejecutor/monitor.html">Ejecutor</a></li>
            </ul>
          </li>
          
          <li><a href="#faq">Dudas</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="${pageContext.request.contextPath}/explorar/monitor.html">Comencemos!</a>

    </div>
  </header>

  <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div class="company-badge mb-4">
                <i class="bi bi-gear-fill me-2"></i>
                Explore los datos del presupuesto Nacional
              </div>

              <h1 class="mb-4">
                Monitor<br>
                Presupuestario<br>
                
              </h1>

              <p class="mb-4 mb-md-5">
                Te damos la bienvenida al Monitor Presupuestario, una plataforma donde podrás conocer y explorar los datos sobre el presupuesto nacional desde el año 1995 para realizar tu propio monitoreo sobre cómo se distribuyen los recursos del Estado en la Argentina.
              </p>

              <div class="hero-buttons">
                <a href="${pageContext.request.contextPath}/explorar/monitor.html" class="btn btn-link mt-2 mt-sm-0 glightbox">
                  <i class="bi bi-play-circle me-1"></i>
                  Ir al monitor
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img src="assets/img/illustration-1.webp" alt="Hero Image" class="img-fluid">

              <div class="customers-badge">
                <p class="mb-0">Información desde el año 1995</p>
              </div>
            </div>
          </div>
        </div>

       

      </div>

    </section><!-- /Hero Section -->


	  <!-- Que es el monitor Section -->
     <section id="monitor" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>¿Qué es el monitor?</h2>
        <p>El Monitor Presupuestario de ACIJ es una herramienta digital pensada para promover el acceso a información presupuestaria de forma sencilla, desagregada y accesible.<br><br>
			Te permite conocer cómo el Estado nacional asigna y gasta los recursos públicos, brindando datos claros que facilitan el análisis, la incidencia y el impacto de acciones orientadas a visibilizar situaciones de discriminación y exclusión en la garantía de derechos.<br><br>
			
			</p>
      </div><!-- End Section Title -->
	  <div class="container section-title" style="font-size:1.5rem">
	  	<h2>El Monitor ofrece</h2>
	  </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-4">

          <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card d-flex" style="background-color: #f2f8fe !important">
              <div class="icon flex-shrink-0">
                <i class="bi bi-graph-up"></i>
              </div>
              <div>
                <h3>Datos históricos desde 1995</h3>
                <p>Para observar la evolución del presupuesto a lo largo del tiempo.</p>
              </div>
            </div>
          </div><!-- End Service Card -->

          <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card d-flex" style="background-color: #f2f8fe !important">
              <div class="icon flex-shrink-0">
                <i class="bi bi-cloud-download-fill"></i>
              </div>
              <div>
                <h3>Actualización diaria</h3>
                <p>Con la última información publicada por el Gobierno Nacional</p>
              </div>
            </div>
          </div><!-- End Service Card -->

          <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card d-flex"  style="background-color: #f2f8fe !important">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Ajuste por inflación</h3>
                <p>Para comparar los recursos en términos reales</p>
              </div>
            </div>
          </div><!-- End Service Card -->

          <div class="col-lg-12" data-aos="fade-up" data-aos-delay="400">
            <div class="service-card d-flex" style="background-color: #f2f8fe !important">
              <div class="icon flex-shrink-0">
                <i class="bi bi-diagram-3"></i>
              </div>
              <div>
                <h3>Gasto programático y funcional</h3>
                <p>
                  Permite explorar el presupuesto por ministerio, entidad, programa y actividad, así como por finalidad y función (educación, salud, deuda, entre otras).</p>
              </div>
            </div>
          </div><!-- End Service Card -->




        </div>

      </div>

    </section>
    <!-- /Que es el monitor Section -->
	
	
	
	
	 <!-- Como usar  Section -->
    <section id="como-usar" class="features section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Cómo usar el Monitor</h2>
        <p>El Monitor tiene tres funciones principales para que puedas conocer y analizar el presupuesto nacional de manera sencilla</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="d-flex justify-content-center">

          <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">

            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#explorar-tab-1">
                <h4>Explorar</h4>
              </a>
            </li><!-- End tab nav item -->

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#comparar-tab-2">
                <h4>Comparar</h4>
              </a><!-- End tab nav item -->

            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#ejecucion-tab-3">
                <h4>Analizar la ejecución mensual</h4>
              </a>
            </li><!-- End tab nav item -->

         
          </ul>

        </div>

        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

          <div class="tab-pane fade active show" id="explorar-tab-1">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Explorar</h3>
                <p class="fst-italic">
                 Navegá el presupuesto filtrando por ministerio, entidad, programa, actividad, o por finalidad y función, y descubrí cómo se distribuyen los recursos públicos
                </p>
              
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-illustration-1.webp" alt="" class="img-fluid">
              </div>
            </div>
          </div><!-- End tab content item -->

          <div class="tab-pane fade" id="comparar-tab-2">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Comparar</h3>
                <p class="fst-italic">
                  Agrupá distintas categorías y analizá su evolución a lo largo del tiempo, con datos históricos ajustados por inflación que permiten hacer comparaciones reales
                </p>
               
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-illustration-2.webp" alt="" class="img-fluid">
              </div>
            </div>
          </div><!-- End tab content item -->

          <div class="tab-pane fade" id="ejecucion-tab-3">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Analizar la ejecución mensual</h3>
                <p class="fst-italic">
                Consultá cómo se ejecutó una misma partida mes a mes y compará distintos años para detectar patrones, variaciones o retrasos en el gasto.
                </p>
                
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-illustration-3.webp" alt="" class="img-fluid">
              </div>
            </div>
          </div><!-- End tab content item -->

         

          

        </div>

      </div>

    </section><!-- /Como usar Section -->
  


<!-- Metodologia Section -->
     <section id="metodologia" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Metodología</h2>
        <p>
        Para desarrollar el Monitor presupuestario utilizamos la información oficial publicada por el Ministerio de Economía de la Nación, específicamente los datasets de <strong>Presupuesto de gastos y su ejecución detallada - agrupación mensual desde 1995 hasta la actualidad</strong>, disponibles en <a href="https://www.presupuestoabierto.gob.ar/sici/datos-abiertos" target="_blank">presupuestoabierto.gob.ar/sici/datos-abiertos.</a>
        <br><br>
		Los datos son <strong>actualizados diariamente</strong>, asegurando que reflejen los últimos registros publicados por el gobierno.
		 <br><br>
		Para permitir comparaciones en términos reales, ajustamos todos los montos por inflación. Utilizamos el <strong>IPC de cobertura nacional del INDEC desde diciembre de 2016</strong>, 
		empalmado hacia atrás con el <strong>IPC GBA hasta abril de 2016</strong>, y luego con un <strong>IPC promedio ponderado por gasto de los índices de la Ciudad de Buenos Aires, Córdoba y San Luis.</strong> 
		Para estimar el presupuesto vigente a precios constantes del año actual, incorporamos el último dato del <strong>Relevamiento de Expectativas de Mercado (REM) del BCRA</strong>, 
		calculando la inflación mensual promedio esperada hacia fin de año.
		 <br><br>
		El Monitor incluye exclusivamente el presupuesto de la <strong>Administración Pública Nacional</strong>
		 <br><br>
		A continuación tienes el <strong>Glosario</strong> con definiciones claras y ajustadas al Manual de Clasificadores de la ONP (2016) y adaptadas al Monitor:
			</p>
      </div><!-- End Section Title -->

    </section>
    <!-- /Metodologia Section -->
  
	<section id="glosario" class="features-cards section" style="padding-top: 0px">

       <!-- Section Title -->
       <div class="container section-title" data-aos="fade-up">
        <h2>Glosario</h2>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Jurisdicción</h4>
                <p> Organización pública sin personería jurídica que integra la Administración Central (ministerios, poderes del Estado)</p>
              </div>
            </div>
          </div>

          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Entidad</h4>
                <p>Organismo con personería jurídica y patrimonio propio dentro del sector público (Institutos, Secretarías, etc).</p>
              </div>
            </div>
          </div>

          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Programa</h4>
                <p>Conjunto de acciones agrupadas con un mismo objetivo dentro de una entidad o jurisdicción;</p>
              </div>
            </div>
          </div>
        
          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Actividad</h4>
                <p>Unidad mínima de ejecución dentro de un programa o proyecto, con identidad y propósito definidos</p>
              </div>
            </div>
          </div>

         <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Finalidad</h4>
                <p>Clasificación macro del gasto según el gran objetivo estatal (ej. “Servicios sociales”, “Defensa”), ligada a políticas públicas</p>
              </div>
            </div>
          </div>
         
          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Función</h4>
                <p>Subdivisión más específica dentro de una finalidad (ej. dentro de Servicios sociales: “Educación”, “Salud”) y alineada a responsabilidades institucionales.</p>
              </div>
            </div>
          </div>
          
           <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Ajuste por inflación acumulada anual</h4>
                <p>Actualización de montos utilizando la variación del índice de precios (IPC) durante todo el año, para expresar valores en términos reales</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Ajuste por inflación promedio interanual</h4>
                <p>Actualización de los montos tomando el índice de precios promedio del año y comparándolo con el índice promedio del año anterior. Esto permite calcular la variación interanual promedio de la inflación, suavizando picos mensuales, y es especialmente útil en contextos de alta inflación.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Crédito presupuestado</h4>
                <p>Monto inicialmente aprobado en la Ley de Presupuesto (crédito inicial)</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Crédito vigente</h4>
                <p>Monto actualizado del presupuesto tras modificaciones, reasignaciones o ampliaciones durante el año (crédito modificado)</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>Crédito ejecutado</h4>
                <p>Monto devengado efectivamente en el año por bienes, servicios o transferencias (crédito gastado).</p>
              </div>
            </div>
          </div>
          
             <div class="col-md-12" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box blue d-flex align-items-center">
              <i class="bi bi-book fs-2 me-3"></i>
              <div>
                <h4>% de ejecución</h4>
                <p> Porcentaje del crédito vigente que efectivamente se ejecutó. Se calcula como (crédito ejecutado ÷ crédito vigente) × 100</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section><!-- /Features Cards Section -->



<section id="monitor" class="call-to-action section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row content justify-content-center align-items-center position-relative">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-4 mb-4">Ingrese al monitor presupuestario</h2>
            <a href="${pageContext.request.contextPath}/explorar/monitor.html" class="btn btn-cta">Explorar</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="${pageContext.request.contextPath}/comparador/monitor.html" class="btn btn-cta">Comparar</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="${pageContext.request.contextPath}/ejecutor/monitor.html" class="btn btn-cta">Ejecutor</a>
          </div>

          <!-- Abstract Background Elements -->
          <div class="shape shape-1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z" transform="translate(100 100)"></path>
            </svg>
          </div>

          <div class="shape shape-2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z" transform="translate(100 100)"></path>
            </svg>
          </div>

          <!-- Dot Pattern Groups -->
          <div class="dots dots-1">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
            </svg>
          </div>

          <div class="dots dots-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern-2)"></rect>
            </svg>
          </div>

          <div class="shape shape-3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z" transform="translate(100 100)"></path>
            </svg>
          </div>
        </div>

      </div>

    </section><!-- /Call To Action Section -->



 <section class="faq-9 faq section light-background" id="faq">

      <div class="container">
        <div class="row">

          <div class="col-lg-5" data-aos="fade-up">
            <h2 class="faq-title">Preguntas frecuentes</h2>
            <p class="faq-description">En esta sección vas a encontrar algunas preguntas frecuentes a la hora de analizar el presupuesto y una serie de materiales complementarios para hacer ese análisis.</p>
            <div class="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
              <svg class="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-container">

              <div class="faq-item faq-active">
                <h3>¿Cómo puedo ver el presupuesto de mi provincia?</h3>
                <div class="faq-content">
                  <p>Te recomendamos que navegues la web de la Dirección Nacional de Asuntos Provinciales y busques en la web oficial del Ministerio o Secretaría de Hacienda, Finanzas o Economía de tu provincia. Si en esas páginas no hay información disponible, puede estar en la página del Tribunal de Cuentas o de la Contaduría de la provincia, e incluso puede que la encuentres en las webs de los Ministerios o Secretarías que ejecutan los programas o políticas que querés analizar. Si no hay información disponible en línea, podés presentar un pedido de acceso a la información pública ante esas dependencias. En la página 47 de la Guía para el Análisis Presupuestario de Políticas contra la Violencia de Género en Argentina encontrarás un modelo para hacer ese pedido.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3>¿Cómo puedo saber qué hace una dependencia o programa determinado?</h3>
                <div class="faq-content">
                  <p>Podés leer los fascículos por entidad o jurisdicción que a nivel nacional se encuentran publicados en la web de la Oficina Nacional de Presupuesto. Estos documentos incluyen las descripciones de los objetivos de cada uno de los programas que administran las diferentes entidades o jurisdicciones, con sus correspondientes actividades y metas físicas.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3>¿De dónde vienen los recursos de la Nación?</h3>
                <div class="faq-content">
                  <p>El Estado Nacional obtiene los recursos a través de la recaudación de impuestos y tasas, de la venta de activos, a partir de operaciones de financiamiento como la toma de deuda pública, o de préstamos provenientes de la cooperación internacional, entre otros.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3>¿Como puedo saber en qué se gastó el dinero de un programa determinado?</h3>
                <div class="faq-content">
                  <p>Podés buscar el clasificador presupuestario según el objeto del gasto, es decir según el tipo de bienes y servicios que compra o contrata. Esa información está disponible tanto en los fascículos por jurisdicción o entidad publicados en la web de la Oficina Nacional de Presupuesto como en los informes de seguimiento físico financiero trimestrales o en las cuentas de inversión.
                  </p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
                <div class="faq-content">
                  <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                <div class="faq-content">
                  <p>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

            </div>
          </div>

        </div>
      </div>
    </section><!-- /Faq Section -->
  </main>

 
  <footer id="footer" class="footer">

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Monitor presupuestario</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">ACIJ</a> 
      </div>
    </div>

  </footer>


  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="./resources/ilanding/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="./resources/ilanding/vendor/php-email-form/validate.js"></script>
  <script src="./resources/ilanding/vendor/aos/aos.js"></script>
  <script src="./resources/ilanding/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="./resources/ilanding/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="./resources/ilanding/vendor/purecounter/purecounter_vanilla.js"></script>
  
  
  <!-- Main JS File -->
  <script src="./resources/ilanding/js/main.js"></script>

</body>





</html>

