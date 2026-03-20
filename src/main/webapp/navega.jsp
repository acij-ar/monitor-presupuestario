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
    .card-left-navega {
	 	border-radius: .75rem;
	 	padding: 1.35rem;
	 	min-height:711px;
	}


 
	  @media (max-width: 767.98px) {
	  	 .site-footer {
      		margin-top : 80px ! important;
      	}
      }
      
      	 @media (max-width: 1000px) {
	  	 #tablaMonitor {
      		min-width:1000px;
      	}
      }
    }
	
</style>
  

</head>
<body >
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
									<a class="nav-link vertical active" id="nav-navegar-tab" data-toggle="tab" href="#nav-navegar" role="tab" > <span class="icon-navegar"></span> Navegar</a>
									<div class="arc-container"></div>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="nav-explorar-tab"  href="monitor.html" > <span class="icon-explorar"></span>Explorar</a>
								</li>
								<li class="nav-item">
									<a class="nav-link vertical" id="nav-comparar-tab" href="monitor.html" >
									<span class="icon-comparar"></span>Comparar</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row" >
					<div class="col-lg-12 mb-4" >
						
						<jsp:include page="chart-navegacion.jsp"></jsp:include>
					</div>
				</div>
			</div>
			<div class="right-side">
				<div class="row mb-3">
					<div class="col-lg-12 mb-3 mb-lg-0">
						<div class="tab-rail"
							style="background-color: #e5eeff !important;">
							<ul class="nav nav-pills" style="justify-content: center !important" id="tabsGraficos" role="tablist">
								<li class="nav-item">
									<a class="nav-link vertical active" id="tabla-tab" data-toggle="tab" href="#tabla" role="tab"> <span class="icon-grafico"></span> Tabla</a>
										<div class="arc-container"></div>
									<div class="arc-container" style="z-index:1;top:-1px;background:var(--bg-dark-green)"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row ">
					<div class="col-lg-12 ">
						<div class="col-lg-12 card-left-navega" style="padding-top: 0px;">
							<div class="content-card ">
								<div class="tab-content  " id="rightTabContent">
									
								
									<div class="tab-pane fade show active" id="tabla" role="tabpanel" aria-labelledby="tabla-tab">
											<h5 class="mb-1 txtTitleGraficoExplorar"></h5>
											<div class="d-flex justify-content-end mb-4">
												  <div class="dropdown">
												    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												      <i class="fa-solid fa-download"></i>
												    </button>
												    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
												      <li><a class="dropdown-item" href="javascript:downloadExcel()" >Excel</a></li>
												      <li><a class="dropdown-item" href="javascript:downloadCsv()">CSV</a></li>
												      <li><a class="dropdown-item" href="javascript:downloadPng()">PNG</a></li>
												    </ul>
												  </div>
												</div>
							     			<div class="table-responsive" >
											    <datatable:table tableName="tablaMonitor" enableView="false" enableRemove="false" enableUpdate="false" horizontalScroll="false" responsive="false" >
													<datatable:column path="jurisdiccion" columnName="Jurisdiccion" align="left" orderColumnName="jurisdiccion" width="50%" />
													<datatable:column path="entidad" columnName="Organismo" orderColumnName="entidad" width="50%" />
													<datatable:column path="programa" columnName="Programa" align="left" orderColumnName="programa" width="50%"/>
													<datatable:column path="actividad" columnName="Actividad" align="left"  orderColumnName="actividad" width="50%"/>
													
													<datatable:column path="finalidad" columnName="Finalidad" align="left" orderColumnName="finalidad" width="50%"/>
													<datatable:column path="funcion" columnName="Funcion" align="left"  orderColumnName="funcion" width="50%"/>
													
													
													<datatable:column path="inicial" columnName="Inicial" align="right" type="money"  orderColumnName="inicial" />
													<datatable:column path="vigente" columnName="Vigente" align="right" type="money"  orderColumnName="vigente" />
													<datatable:column path="devengado" columnName="Devengado" align="right" type="money"  orderColumnName="devengado" />
													<datatable:column path="ejecutado" columnName="Ejecucion (%)" align="center" type="money"  orderColumnName="ejecutado" />
												</datatable:table>
										 	</div>
										 	
									</div>
								</div>
							</div>
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
$(document).ready(function() {
	 
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

   fillCharts();
});


function downloadExcel() {
	$("#command").attr("action", "excel");
	$("#command").submit();
}


function downloadExcelGrafico() {
	$("#command").attr("action", "excelGrafico");
	$("#command").submit();
}


function downloadCsv() {
	$("#command").attr("action", "csv");
	$("#command").submit();
}


function downloadPng() {
	exportEChartToPNG(chartNavegacion, "navega.png");
}

function fillCharts() {
	fillChartNavegacion();
	  $('#tablaMonitor').DataTable().ajax.url(getUri_tablaMonitor()).load();
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
    // creamos un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = imgData;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

</script>




</html>

