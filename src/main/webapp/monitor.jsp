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
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.0/font/bootstrap-icons.css">

  <!-- Select2 -->
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@x.x.x/dist/select2-bootstrap4.min.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.full.min.js"></script>


  <!-- DataTables -->
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

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cascadia+Mono:ital,wght@0,200..700;1,200..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<!-- Apache ECharts -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js"></script>

<!-- Main CSS File -->
<link type="text/css" href="../resources/css/acij2.css" rel="stylesheet">
<link type="text/css" href="../resources/css/icons.css" rel="stylesheet">

<style>
	.monto {
      font-size: 2.5rem;
      font-weight: bold;
      color: #0f6a57;
    }
    
    .badge-presupuesto {
      background-color: #0f6a57;
      color: #fff;
      font-size: 0.8rem;
      margin-left: 5px;
      border-radius: 4px;
      padding: 3px 6px;
    }
    
    .titulo-seccion {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    .nombre {
      font-size: 1.1rem;
      font-weight: normal;
    }

	.hr-verde {
	  border: none;
	  height: 2px;
	  background-color: #0f6a57;
	  border-radius: 3px;
	}
	
	 @media (max-width: 1000px) {
	  	 #tablaMonitor {
      		min-width:1000px;
      	}
      }
	
	  @media (max-width: 767.98px) {
	  	 .site-footer {
      		margin-top : 80px ! important;
      	}
      	
      	.monto {
	      font-size: 2.0rem !important;
	      display : inline-grid !important;
	      gap : 5px !important;
	    }
	    
	    .badge-presupuesto {
	      font-size: 0.6rem !important;
	    }
	    
	    .titulo-seccion {
	      font-size: 0.9rem !important;
	    }
	    
	    .nombre {
	      font-size: 0.9rem !important;
	      font-weight: normal !important;
	    }
      	
      	
      }
      
      
    }
</style>

</head>
<body>
 <!-- Top bar -->
	<jsp:include page="main-header.jsp"></jsp:include>

	<div class="container-fluid py-4 layout-container">
		<div class="middle-row">
			<div class="left-side">
				<div class="row mb-3" >
					<div class="col-lg-12 mb-3 mb-lg-0" style="overflow: hidden">
						<div class="tab-rail"
							style="background-color: #03624C !important;" id="divLeft">
							<ul class="nav nav-pills" id="leftTab" role="tablist">
								<li class="nav-item">
									
									<a class="nav-link vertical" id="nav-navegar-tab" href="navega.html" > <span class="icon-navegar"></span> Navegar</a>
	
									<div class="arc-container"></div>
								</li>
								<li class="nav-item">
									
									<a class="nav-link vertical active" id="nav-explorar-tab" data-toggle="tab" href="#nav-explorar" role="tab"><span class="icon-explorar"></span>Explorar</a>
									<div class="arc-container"></div>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="nav-comparar-tab" data-toggle="tab" href="#nav-navegar2" role="tab">
									<span class="icon-comparar"></span>Comparar</a>
									<div class="arc-container"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row" >
					<div class="col-lg-12">
						<jsp:include page="filtersection.jsp"></jsp:include>
					</div>
				</div>
			</div>
			<div class="right-side">
				<div class="row mb-3">
					<div class="col-lg-12 mb-3 mb-lg-0" style="overflow: hidden">
						<div class="tab-rail"
							style="background-color: transparent !important;">
							<ul class="nav nav-pills" style="justify-content: center !important" id="tabsGraficos" role="tablist">
							
								<li class="nav-item">
									<a class="nav-link vertical" id="anual-tab" data-toggle="tab" href="#anual" role="tab"> <span class="icon-grafico"></span> Gráfico</a>
									<div class="arc-container"></div>
									<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="tabla-tab" data-toggle="tab" href="#tabla" role="tab"> <span class="icon-tabla"></span>Tabla</a>
									<div class="arc-container"></div>
									<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="ejecucion-tab"data-toggle="tab" href="#ejecucion" role="tab"><span class="icon-ejecucion"></span> Mes a mes</a>
									<div class="arc-container"></div>
									<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
								<li class="nav-item"><a class="nav-link vertical" id="resumen-tab" data-toggle="tab" href="#resumen" role="tab"> <span class="icon-resumen"></span> Resumen </a>
								<div class="arc-container"></div>
								<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="timeline-tab" data-toggle="tab" href="#timeline" role="tab"> <i class="fa-regular fa-circle-check"></i> Timeline</a>
									<div class="arc-container"></div>
									<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="comparador-tab" data-toggle="tab" href="#comparador" role="tab"> <span class="icon-grafico"></span> Comparador</a>
									<div class="arc-container"></div>
									<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row"  >
					<div class="col-lg-12">
						<div class="col-lg-12">
							<div class="content-card">
								<div class="tab-content" id="rightTabContent">
									<div class="tab-pane fade show active" id="anual" role="tabpanel" aria-labelledby="ejecucion-tab">
										<h5 class="mb-1 txtTitleGraficoExplorar " style="" ></h5>
										<div class="d-flex justify-content-end mb-2">
										  <div class="dropdown">
										    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										      <i class="fa-solid fa-download"></i>
										    </button>
										    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
										      <li><a class="dropdown-item" href="javascript:downloadExcelGrafico()" >Excel</a></li>
										      <li><a class="dropdown-item" href="javascript:downloadPng()" >PNG</a></li>
										    </ul>
										  </div>
										</div>
										<jsp:include page="chart-comparador-anual.jsp"></jsp:include>
									</div>
											<div class="tab-pane fade" id="tabla" role="tabpanel" aria-labelledby="tabla-tab">
											<h5 class="mb-1 txtTitleGraficoExplorar "></h5>
											  <div class="d-flex justify-content-end mb-4">
												  <div class="dropdown">
												    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												      <i class="fa-solid fa-download"></i>
												    </button>
												    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
												      <li><a class="dropdown-item" href="javascript:downloadExcel()" >Excel</a></li>
												      <li><a class="dropdown-item" href="javascript:downloadCsv()">CSV</a></li>
												    </ul>
												  </div>
												</div>
												
							     			<div class="table-responsive cascadia" >
											    <datatable:table tableName="tablaMonitor" enableView="false" enableRemove="false" enableUpdate="false" horizontalScroll="false" responsive="false" >
													<datatable:column path="jurisdiccion" columnName="Jurisdiccion" align="left" orderColumnName="jurisdiccion" width="50%"  />
													<datatable:column path="entidad" columnName="Organismo" orderColumnName="entidad"   width="50%"/>
													<datatable:column path="programa" columnName="Programa" align="left" orderColumnName="programa" width="50%" />
													<datatable:column path="actividad" columnName="Actividad" align="left"  orderColumnName="actividad" width="50%" />
													<datatable:column path="finalidad" columnName="Finalidad" align="left"  orderColumnName="finalidad"  width="50%"/>
													<datatable:column path="funcion" columnName="Funcion" align="left"  orderColumnName="funcion"  width="50%"/>
													<datatable:column path="inicial" columnName="Inicial" align="right" type="money"  orderColumnName="inicial" />
													<datatable:column path="vigente" columnName="Vigente" align="right" type="money"  orderColumnName="vigente" />
													<datatable:column path="devengado" columnName="Devengado" align="right" type="money"  orderColumnName="devengado" />
													<datatable:column path="ejecutado" columnName="Ejecucion (%)" align="center" type="money"  orderColumnName="ejecutado" />
												</datatable:table>
										 	</div>
										 	
									</div>
									
									<div class="tab-pane fade" id="ejecucion" role="tabpanel" aria-labelledby="ejecucion-tab">
										<h5 class="mb-1 txtTitleGraficoExplorar "></h5>
										<div class="d-flex justify-content-end mb-2">
										  <div class="dropdown">
										    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										      <i class="fa-solid fa-download"></i>
										    </button>
										    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
										      <li><a class="dropdown-item" href="javascript:downloadPngBubble()" >PNG</a></li>
										      <li><a class="dropdown-item" href="javascript:downloadExcelMesAMes()" >EXCEL</a></li>
										      <li><a class="dropdown-item" href="javascript:downloadCsvMesAMes()" >CSV</a></li>
										      
										    </ul>
										  </div>
										</div>
										<jsp:include page="chart-bubble.jsp"></jsp:include>
									</div>
									<div class="tab-pane fade" id="resumen" role="tabpanel" aria-labelledby="resumen-tab" style="min-height:570px">
									
											<div class="container" style="max-height: 600px; overflow-y: auto">
						 						 <div class="card-presupuesto">
											      <div class="titulo-seccion">Presupuesto anual de <span id="spanAnio"></span></div>
											      <div class="monto"><span id="spanPresupuestoAnio"></span></div>
											    </div>
											
												<hr class="hr-verde card-jurisdiccion">
											    <!-- Jurisdicción -->
											    <div class="card-presupuesto card-jurisdiccion">
											      <div class="titulo-seccion"></div>
											      <div class="nombre"></div>
											      <div class="monto">
											        <span class="txtMonto"></span>
											        <span class="badge-presupuesto del-presupuesto"></span>
											      </div>
											    </div>
												
												<hr class="hr-verde card-entidad">
												
											    <!-- Entidad -->
											    <div class="card-presupuesto card-entidad">
											      <div class="titulo-seccion"></div>
											      <div class="nombre"></div>
											      <div class="monto">
											      	<span class="txtMonto"></span>
											        <span class="badge-presupuesto del-presupuesto"></span>
											        <span class="badge-presupuesto del-padre"></span>
											      </div>
											    </div>
												
												<hr class="hr-verde card-programa">
											    <!-- Programa -->
											    <div class="card-presupuesto card-programa">
											      <div class="titulo-seccion"></div>
											      <div class="nombre"></div>
											      <div class="monto">
											      	<span class="txtMonto"></span>
											        <span class="badge-presupuesto del-presupuesto"></span>
											        <span class="badge-presupuesto del-padre"></span>
											      </div>
											    </div>
											    
											    <hr class="hr-verde card-actividad">
											    <div class="card-presupuesto card-actividad">
											      <div class="titulo-seccion"></div>
											      <div class="nombre"></div>
											      <div class="monto">
											       	<span class="txtMonto"></span>
											        <span class="badge-presupuesto del-presupuesto"></span>
											        <span class="badge-presupuesto del-padre"></span>
											      </div>
											    </div>
											    
											    <hr class="hr-verde card-finalidad">
											    <div class="card-presupuesto card-finalidad">
											      <div class="titulo-seccion"></div>
											      <div class="nombre"></div>
											      <div class="monto">
											      	<span class="txtMonto"></span>
											        <span class="badge-presupuesto del-presupuesto"></span>
											      </div>
											    </div>
											    
											    <hr class="hr-verde card-funcion">
											    <div class="card-presupuesto card-funcion">
											      <div class="titulo-seccion"></div>
											      <div class="nombre"></div>
											      <div class="monto">
											       	<span class="txtMonto"></span>
											        <span class="badge-presupuesto del-presupuesto"></span>
											        <span class="badge-presupuesto del-padre"></span>
											      </div>
											    </div>
						 					
											</div>
									</div>
									<div class="tab-pane fade" id="#timeline" role="tabpanel"
										aria-labelledby="timeline-tab">
										<h5 class="mb-1">Timeline</h5>
										<hr />
										 <ul class="timeline position-relative" id="timeline-container"></ul>
									</div>
									<div class="tab-pane fade" id="comparador" role="tabpanel"
										aria-labelledby="comparador-tab">
											<div class="d-flex justify-content-end mb-2">
										  <div class="dropdown">
										    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										      <i class="fa-solid fa-download"></i>
										    </button>
										    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
										    <li><a class="dropdown-item" href="javascript:downalodCsvComparador()" >CSV</a></li>
										      <li><a class="dropdown-item" href="javascript:downalodExcelComparador()" >Excel</a></li>
										      <li><a class="dropdown-item" href="javascript:downloadPngComparador()" >PNG</a></li>
										    </ul>
										  </div>
										</div>
										<jsp:include page="chart-comparador-stacked-por-grupo.jsp"></jsp:include>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-12 " style="text-align: right;">
							<span style="font-size:0.75rem;color:black;font-style:italic" >*Monitor Presupuestario de ACIJ en base a Presupuesto Abierto.<br>
							 ${sessionScope.lastupdate}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		
	</div>

	<jsp:include page="footer.jsp"></jsp:include>
</body>

<style>

#tablaMonitor td:nth-last-child(-n+4),
#tablaMonitor th:nth-last-child(-n+4) {
  white-space: nowrap !important;   /* que nunca salten de línea */
}
</style>


<script>
var currentTab = 'Explorar';
var currentOption = 'Grafico';

function onTabsChange() {
	$('#tabsGraficos a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  const target = e.target.id;
		  currentOption=target;
		  fillTitleGraficoExplorar();
	});
	
	  $('#leftTab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	    const target = e.target.id;

	    const compareComponent = $(".compareComponent");
	    const compareButton = $(".compareButton");

	    // Ocultar elementos de comparación por defecto
	    compareComponent.hide();
	    compareButton.hide();
	    // Manejo de visibilidad de tabs secundarios
	    const allTabs = $('#tabsGraficos .nav-link');
	    allTabs.parent().hide(); // ocultamos todos
	    allTabs.removeClass('active'); // desactivamos todos

	    $(".cmbTipo").val(1);
	    
	      var $select = $(".cmbTipo");

	      // opciones que queremos controlar
	   	   var opts = [
	   	     { value: "5", text: "% Ejecucion" },
	   	     { value: "-1", text: "TODOS" }
	   	   ];
	   	
	   	   if (target === 'nav-comparar-tab') {
	   	     // quitar si existen
	   	     opts.forEach(function(opt) {
	   	       $select.find('option[value="' + opt.value + '"]').remove();
	   	     });
	   	   } else {
	   	     // agregar si no existen
	   	     opts.forEach(function(opt) {
	   	       if ($select.find('option[value="' + opt.value + '"]').length === 0) {
	   	         $select.append($('<option>', opt));
	   	       }
	   	     });
	   	   }
	   		$(".cmbTipo").trigger('update');
	   		
	   		
	    if (target === 'nav-comparar-tab') {
	      currentTab = 'Comparar';
	      compareComponent.show();
	      compareButton.show();

	      // Mostrar y activar solo comparador-tab
	      $('#comparador-tab').parent().show();
	      $('#comparador-tab').tab('show');

	    } else if (target === 'nav-navegar-tab') {
	      currentTab = 'Mapa';
	      $('#grafico-tab').parent().show();
	      $('#grafico-tab').tab('show');
	      fillChartNavegacion();
	    } else if (target === 'nav-explorar-tab') {
	      currentTab = 'Explorar';
	      const mostrar = ['#anual-tab','#tabla-tab','#resumen-tab','#ejecucion-tab'];
	      mostrar.forEach(function(id) {
	        $(id).parent().show();
	      });
	      $('#anual-tab').tab('show');
	      fillCharts();
	    }
	    

	  });

	  // Ocultar por defecto los componentes de comparación
	  $(".compareComponent").hide();
	  $(".compareButton").hide();
	  
	    const allTabs = $('#tabsGraficos .nav-link');
	    allTabs.parent().hide(); // ocultamos todos
	    allTabs.removeClass('active'); // desactivamos todos

	  const mostrar = ['#anual-tab','#tabla-tab','#resumen-tab','#ejecucion-tab'];
      mostrar.forEach(function(id) {
        $(id).parent().show();
      });
      $('#anual-tab').tab('show');

}



$(document).ready(function() {
	 onTabsChange();
    
    $('#tabsGraficos a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	      const target =e.target.id
	      if (target === 'tabla-tab') {
	        setTimeout(() => {
	        	table_tablaMonitor.columns.adjust();
	        }, 30);
	      }
	    });

	table_tablaMonitor.on('xhr.dt', function (ev, settings, json, xhr) {
		const j =  $(".cmbJurisdiccion").val();
		const e = $(".cmbEntidad").val();
		const p = $(".cmbPrograma").val();
		const a = $(".cmbActividad").val();
		
		var tipoFiltro = $(".cmbTipoFiltro").val();
		var finalidad = $(".cmbFinalidad").val();
		var funcion = $(".cmbFuncion").val();
		
		if (tipoFiltro == 1) {
	        if (a != "-1" || p != "-1"){
	            table_tablaMonitor.columns([0,1,2,4,5]).visible(false);
	            table_tablaMonitor.column(3).visible(true);
	        } else if (e != "-1"){
	            table_tablaMonitor.columns([0,1,3,4,5]).visible(false);
	            table_tablaMonitor.column(2).visible(true);
	        } else if (j != "-1"){
	            table_tablaMonitor.columns([0,2,3,4,5]).visible(false);
	            table_tablaMonitor.column(1).visible(true);
	        } else {
	            table_tablaMonitor.columns([1,2,3,4,5]).visible(false);
	            table_tablaMonitor.column(0).visible(true);
	        }
	    } else {
	        if (funcion != "-1" || finalidad != "-1") {
	            table_tablaMonitor.columns([0,1,2,3,4]).visible(false);
	            table_tablaMonitor.column(5).visible(true);
	        } else {
	            table_tablaMonitor.columns([0,1,2,3,5]).visible(false);
	            table_tablaMonitor.column(4).visible(true);
	        }
	    }

	    // Ahora detectás la visible y le das 65%
	    var visibles = table_tablaMonitor.columns(':visible').indexes();
	    if (visibles.length === 1) {
	        table_tablaMonitor.column(visibles[0]).nodes().to$().css('width','50%');
	    } else if (visibles.length > 1) {
	        // si querés que siempre la primera visible sea la de 65%
	        table_tablaMonitor.column(visibles[0]).nodes().to$().css('width','50%');
	    }

	    // Forzar recalculo de anchos
	    table_tablaMonitor.columns.adjust();
		
		
	});
	
	 $('#btnDescargar').on('click', function () {
	    const canvas = document.getElementById('porFechaAlta');
	    const image = canvas.toDataURL('image/png');

	    const link = document.createElement('a');
	    link.href = image;
	    link.download = 'comparacion-anual.png';
	    document.body.appendChild(link);
	    link.click();
	    document.body.removeChild(link);
	});

	 $(".cmbAnio").change(function() {
		 if (currentTab == 'Mapa') {
			 fillChartNavegacion();
		 }
	 })
	 
	
   
    // Evento para eliminar
    $(document).on('click', '.label-item .remove', function () {
      $(this).parent().remove();
      fillCharts();
    });

   fillCharts();
});


function downloadExcel() {
	$("#command").attr("action", "excel");
	$("#command").submit();
}

function downloadCsv() {
	$("#command").attr("action", "csv");
	$("#command").submit();
}


function downloadPng() {
	exportEChartToPNG(charAnual, "anual.png");
}

function downloadPngBubble() {
	exportEChartToPNG(charAnualEjecutor, "ejecucion.png");
}

function downloadPngComparador() {
	exportEChartToPNG(charStackAnual, "comparador.png");
}

function downalodExcelComparador() {
	const result = getGroupIds();
	$.ajax({
	    url: 'getExcelComparador?tipo=' + $(".cmbTipo").val() + "&ajuste=" + $(".cmbAjuste").val(),
	    type: 'POST',
	    contentType: 'application/json',
	    data: JSON.stringify(result),
	    xhrFields: {
	        responseType: 'blob' 
	    },
	    success: function (data, status, xhr) {
	        // Recuperar el nombre sugerido si backend lo manda en Content-Disposition
	        let disposition = xhr.getResponseHeader('Content-Disposition');
	        let fileName = "reporte.xlsx"; 
	        if (disposition && disposition.indexOf('filename=') !== -1) {
	            let matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
	            if (matches != null && matches[1]) fileName = matches[1].replace(/['"]/g, '');
	        }

	        // Crear blob y link de descarga
	        let blob = new Blob([data], { type: xhr.getResponseHeader('Content-Type') });
	        let link = document.createElement('a');
	        link.href = window.URL.createObjectURL(blob);
	        link.download = fileName;
	        document.body.appendChild(link);
	        link.click();
	        document.body.removeChild(link);
	    },
	    error: function (xhr, status, error) {
	        console.error("Error descargando Excel:", error);
	    }
	});
}


function downalodCsvComparador() {
	const result = getGroupIds();
	$.ajax({
	    url: 'getCsvComparador?tipo=' + $(".cmbTipo").val() + "&ajuste=" + $(".cmbAjuste").val(),
	    type: 'POST',
	    contentType: 'application/json',
	    data: JSON.stringify(result),
	    xhrFields: {
	        responseType: 'blob' 
	    },
	    success: function (data, status, xhr) {
	        // Recuperar el nombre sugerido si backend lo manda en Content-Disposition
	        let disposition = xhr.getResponseHeader('Content-Disposition');
	        let fileName = "datos.csv"; 
	        if (disposition && disposition.indexOf('filename=') !== -1) {
	            let matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
	            if (matches != null && matches[1]) fileName = matches[1].replace(/['"]/g, '');
	        }

	        // Crear blob y link de descarga
	        let blob = new Blob([data], { type: xhr.getResponseHeader('Content-Type') });
	        let link = document.createElement('a');
	        link.href = window.URL.createObjectURL(blob);
	        link.download = fileName;
	        document.body.appendChild(link);
	        link.click();
	        document.body.removeChild(link);
	    },
	    error: function (xhr, status, error) {
	        console.error("Error descargando Excel:", error);
	    }
	});
}


function exportEChartToPNG(chart, fileName = "chart.png") {

    // obtenemos la imagen en base64
   const imgData = chart.getDataURL({
        type: 'png',
        pixelRatio: 2,
        backgroundColor: '#fff',
        // excluimos todos los componentes extra
        excludeComponents: ['toolbox',  'dataZoom', 'tooltip', 'axisPointer']
    });
   const img = new Image();
   img.src = imgData;
   img.onload = function () {
       const paddingTop = 50; // px extra arriba

       // canvas con altura + padding
       const canvas = document.createElement("canvas");
       canvas.width = img.width;
       canvas.height = img.height + paddingTop;
       const ctx = canvas.getContext("2d");

       // fondo blanco
       ctx.fillStyle = "#fff";
       ctx.fillRect(0, 0, canvas.width, canvas.height);

       // dibujamos la imagen del chart con el padding arriba
       ctx.drawImage(img, 0, paddingTop);

       // generamos el nuevo PNG con padding
       const finalImg = canvas.toDataURL("image/png");

       // descargamos
       const link = document.createElement("a");
       link.href = finalImg;
       link.download = fileName;
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
   };
}




function downloadExcelGrafico() {
	$("#command").attr("action", "excelGrafico");
	$("#command").submit();
}


function downloadExcelMesAMes() {
	$("#command").attr("action", "excelMesAMes");
	$("#command").submit();
}


function downloadCsvMesAMes() {
	$("#command").attr("action", "csvMesAMes");
	$("#command").submit();
}


function fillCharts() {
	if (currentTab == 'Explorar') {
		 fillResumen();
		  $('#tablaMonitor').DataTable().ajax.url(getUri_tablaMonitor()).load();
		  fillChartAnual()
		  fillChartEjecucionMensual();
		  fillTitleGraficoExplorar();
		//fillTimeline(); Beta
	} else if (currentTab == 'Comparar') {
		  fillChartComparadorAnual();
	}
}

function fillTitleGraficoExplorar() {
	var title = '';
	var strTipo="";
	var tipo = $(".cmbTipo").val();
	var tipoAjuste =  $(".cmbAjuste").val();
	var jurisdiccion =  $(".cmbJurisdiccion").val();
	var entidad = $(".cmbEntidad").val();
	var programa = $(".cmbPrograma").val();
	var actividad = $(".cmbActividad").val();
	
	var tipoFiltro = $(".cmbTipoFiltro").val();
	var finalidad = $(".cmbFinalidad").val();
	var funcion = $(".cmbFuncion").val();
	
	
	var strInicial ="";
	
	if (currentTab == 'Explorar') {
		strInicial ="Presupuesto ";
		if(currentOption == 'ejecucion-tab') {
			strInicial ="Ejecución mensual ";
		}
	} else{ 
		strInicial ="Ejecución mensual ";
	
	}
	
	if (strInicial == "Presupuesto") {
		if (tipo == "1") {
			strTipo = "inicial";
		} else if (tipo == "2") {
			strTipo = "vigente";
		} else if (tipo == "3") {
			strTipo = "devengado";
		}
	}
	
	
	
	if (tipoFiltro == 1) {
		if (actividad != "-1") {
			title = strInicial + strTipo + " de la actividad <strong>" +  $('.cmbActividad option:selected').text() + "</strong>";
		} else if (programa != "-1") {
			title = strInicial + strTipo + " del programa <strong>" +  $('.cmbPrograma option:selected').text()+ "</strong>";
		} else if (entidad != "-1") {
			title = strInicial + strTipo + " del organismo <strong>" +  $('.cmbEntidad option:selected').text()+ "</strong>";
		} else if (jurisdiccion != "-1") {
			title = strInicial + strTipo + " de la jurisdicción <strong>" +  $('.cmbJurisdiccion option:selected').text()+ "</strong>";
		} else {
			title = strInicial + strTipo;
		}
	} else {
		if (funcion != "-1") {
			title = strInicial + strTipo + " de la funcion <strong>" +  $('.cmbFuncion option:selected').text()+ "</strong>";
		} else if (finalidad != "-1") {
			title =strInicial + strTipo + " de la finalidad <strong>" +  $('.cmbFinalidad option:selected').text()+ "</strong>";
		} else {
			title = strInicial + strTipo;
		}
		
	}
	
	const fechaActual = new Date();
	const anioActual = fechaActual.getFullYear();
	
	title += " para el año " + $(".cmbAnio").val() + "<br>";
	if (tipoAjuste == "1"){
		title += "<span style='font-size:0.9rem;font-family:\"cascadia, monospace\"'>Expresado en valores nominales, sin ajuste por inflación</span>";
	} else if (tipoAjuste == "2"){
		title += "<span style='font-size:0.9rem;font-family:\"cascadia, monospace\"''>Expresado en valores reales, ajustado por inflación promedio interanual, a precios de "+anioActual+"</span>";
	} else if (tipoAjuste == "3"){
		title += "<span style='font-size:0.9rem;font-family:\"cascadia, monospace\"''>Expresado en valores reales, ajustado por inflación acumulada anual, a precios de "+anioActual+"</span>";
	}
	
	$(".txtTitleGraficoExplorar").html(title);
}

function fillResumen() {
	let queryString = "&type="+ $(".cmbTipo").val();
	queryString += "&ajuste=" + $(".cmbAjuste").val();
	 
	if ($(".cmbTipoFiltro").val() == 1) {
		queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
		queryString += "&idEntidad=" + $(".cmbEntidad").val();
		queryString += "&idPrograma=" + $(".cmbPrograma").val();
		queryString += "&idActividad=" + $(".cmbActividad").val();
		queryString += "&idFinalidad=-1";
		queryString += "&idFuncion=-1";

	} else {
		queryString += "&idJurisdiccion=-1";
		queryString += "&idEntidad=-1";
		queryString += "&idPrograma=-1";
		queryString += "&idActividad=-1";
		
		queryString += "&idFinalidad="+ $(".cmbFinalidad").val();
		queryString += "&idFuncion="+ $(".cmbFuncion").val();
	}
	
	
	$.getJSON("getResumen?anio=" + $(".cmbAnio").val() + "&tipoFiltro=" + $(".cmbTipoFiltro").val() + queryString , function(data) {
	  	
		$("#spanAnio").html(data.anio );
		$("#spanPresupuestoAnio").html("$ " + toMoneyFormat(data.presupuestoAño) + "<br>");
		
		let porcentajeDelTotal = 0;
		let porcentajeDelPadre = 0;
		
		if ($(".cmbTipoFiltro").val() == "1") {
			$(".card-funcion").hide();
			$(".card-finalidad").hide();
			
			if (data.jurisdiccion != "") {
				porcentajeDelTotal = data.presupuestoJurisdiccion / data.presupuestoAño * 100;
				
				$(".card-jurisdiccion").show();
				$(".card-jurisdiccion .nombre").html(data.jurisdiccion);
				$(".card-jurisdiccion .txtmonto").html("$ " + toMoneyFormat(data.presupuestoJurisdiccion) +"");
				$(".card-jurisdiccion .monto .del-presupuesto").html(toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
				
				if (data.entidad != "") {
					porcentajeDelTotal = data.presupuestoEntidad / data.presupuestoAño * 100;
					porcentajeDelPadre  = data.presupuestoEntidad / data.presupuestoJurisdiccion * 100;
					
					$(".card-entidad").show();
					$(".card-entidad .nombre").html(data.entidad);
					$(".card-entidad .txtmonto").html("$ " + toMoneyFormat(data.presupuestoEntidad) );
					$(".card-entidad .del-presupuesto").html(toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
					$(".card-entidad .del-padre").html(toMoneyFormat(porcentajeDelPadre) +  "% del " + data.jurisdiccion);
					
					if (data.programa != "") {
						porcentajeDelTotal = data.presupuestoPrograma / data.presupuestoAño * 100;
						porcentajeDelPadre  = data.presupuestoPrograma / data.presupuestoEntidad * 100;
	
						$(".card-programa").show();
						$(".card-programa .nombre").html(data.programa);
						$(".card-programa .txtmonto").html("$ " +toMoneyFormat(data.presupuestoPrograma) +"");
						$(".card-programa .del-presupuesto").html(toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
						$(".card-programa .del-padre").html(toMoneyFormat(porcentajeDelPadre) +  "% del " + data.entidad);
	
						if (data.actividad != "") {
							porcentajeDelTotal = data.presupuestoActividad / data.presupuestoAño * 100;
							porcentajeDelPadre  = data.presupuestoActividad / data.presupuestoPrograma * 100;
					
							$(".card-actividad").show();
							$(".card-actividad .nombre").html(data.actividad);
							$(".card-actividad .txtmonto").html("$ " +toMoneyFormat(data.presupuestoActividad) +"");
							$(".card-actividad .del-presupuesto").html(toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
							$(".card-actividad .del-padre").html(toMoneyFormat(porcentajeDelPadre) +  "% del " + data.programa);
						} else {
							$(".card-actividad").hide();	
						}
					} else {
						$(".card-programa").hide();
						$(".card-actividad").hide();
					}
				} else {
					$(".card-entidad").hide();
					$(".card-programa").hide();
					$(".card-actividad").hide();
				}
			} else {
				$(".card-jurisdiccion").hide();
				$(".card-entidad").hide();
				$(".card-programa").hide();
				$(".card-actividad").hide();
			}
		} else {
			$(".card-jurisdiccion").hide();
			$(".card-entidad").hide();
			$(".card-programa").hide();
			$(".card-actividad").hide();
			
			if (data.finalidad != "") {
				porcentajeDelTotal = data.presupuestoFinalidad / data.presupuestoAño * 100;

				$(".card-finalidad").show();
				$(".card-finalidad .nombre").html(data.finalidad);
				$(".card-finalidad .txtmonto").html("$ " + toMoneyFormat(data.presupuestoFinalidad) +"");
				$(".card-finalidad .monto .del-presupuesto").html(toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
				
				
				if (data.funcion != "") {
					porcentajeDelTotal = data.presupuestoFuncion / data.presupuestoAño * 100;
					porcentajeDelPadre  = data.presupuestoFuncion / data.presupuestoFinalidad * 100;
			
					$(".card-funcion").show();
					$(".card-funcion .nombre").html(data.funcion);
					$(".card-funcion .txtmonto").html("$ " +toMoneyFormat(data.presupuestoFuncion) +"");
					$(".card-funcion .del-presupuesto").html(toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
					$(".card-funcion .del-padre").html(toMoneyFormat(porcentajeDelPadre) +  "% de " + data.finalidad);
				} else {
					$(".card-funcion").hide();	
				}
			} else {
				$(".card-funcion").hide();
				$(".card-finalidad").hide();
			}
		}
	 	
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$(".card-jurisdiccion").hide();
		$(".card-entidad").hide();
		$(".card-programa").hide();
		$(".card-actividad").hide();
		$('#loading').hide();
	    alert("Error al cargar los datos: " + textStatus + "\nDetalles: " + errorThrown);
	    console.error("Respuesta del servidor:", jqXHR.responseText);
	});
	
}

function fillTimeline() {
	  $.ajax({
	      url: 'getTimeline?anio=' + $(".cmbAnio").val() + queryString,
	      method: 'GET',
	      success: function (data) {
	        const contenedor = $('#timeline-container');
	        contenedor.empty();
	        data.forEach(r => {
	          var html = "";
	          
	          html+='<li class="timeline-item">';
	          html+='     <div class="card">';
	          html+='       <div class="card-body">';
	          html+='         <h6 class="card-title mb-1">'+ r.periodo+'</h6>';
	          html+='         <p class="card-text">' + r.jurisdiccion+ ' - ' + r.objetivo + '</p>';
	          html+='       </div>';
	          html+='    </div>';
	          html+='   </li>';
	            contenedor.append(html);
	        });
	      },
	      error: function (err) {
	        console.error('Error al cargar los datos:', err);
	        $('#timeline-container').append('<li>Error al cargar la línea de tiempo.</li>');
	      }
	    });
}

function toMoneyFormat(data) {
	return parseFloat(data).toLocaleString(['es'], {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'decimal'})
}


</script>




</html>

