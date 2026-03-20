<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

 <style>
    /* El div define el tamaño del gráfico */
    #chart-navegacion {
      width: 100%;         /* Ocupa todo el ancho del contenedor padre */
	  height: 60vh;
      max-width: 1300px;
      margin: auto;
    }
    
    
     .select2-container--bootstrap4 .select2-selection--single .select2-selection__rendered {
 		color: #0f6a57 !important;
 	}
    
    .select2-container--bootstrap4 .select2-selection--single .select2-selection__arrow b {
    border-color: #0f6a57 transparent transparent transparent !important; /* color de la flecha */
}
    

    

  </style>
 <script src="../resources/js/colors.js"></script>
<div class="card-left-navega" style="border: 3px solid green; border-radius:25px">
	  	<form:form method="POST" action="list.html" >
				<spring:bind path="*">
					<form:hidden path="tipo" />
					<form:hidden path="ajuste" />
					<form:hidden path="jurisdiccion.id"  class="cmbJurisdiccion"/>
					<form:hidden path="entidad.id" class="cmbEntidad"/>
					<form:hidden path="programa.id" class="cmbPrograma"/>
					<form:hidden path="actividad.id" class="cmbActividad"/>
					<form:hidden path="finalidad.id" class="cmbFinalidad"/>
					<form:hidden path="funcion.id" class="cmbFuncion"/>
					
					
					<div class="mb-2" style="color: #0f6a57;width:90%">
				            <div class="d-flex align-items-center justify-content-between">
				              <h6 class="mb-1">Año</h6>
				            </div>
				            <form:select path="anio" cssClass="form-control select2bs4 cmbAnio chartUpdate" >
								<form:options items="${command.anios}" />
							</form:select>
							<div class="d-flex align-items-center justify-content-between mt-2">
				              <h6 class="mb-1">Tipo de filtro</h6>
				            </div>
				            <form:select path="tipoFiltro" cssClass="form-control select2bs4 cmbTipoFiltro chartUpdate" >
								<form:option value="1">Filtro por Jurisdicción/Organismo/Programa/Actividad</form:option>
								<form:option value="2">Filtro por Función/Finalidad</form:option>
							</form:select>
							<div class="d-flex align-items-center justify-content-between mt-1">
				              <h6 class="mb-1 tipoFiltro1">Jurisdicción > Organismo > Programa > Actividad</h6>
				              <h6 class="mb-1 tipoFiltro2">Finalidad > Función </h6>
				              
				            </div>
				  </div>
				</spring:bind>
		</form:form>
	  
	<div id="chart-navegacion" ></div>
</div>

<script>
$(document).ready(function() {
	$('.select2bs4').select2({
    	theme: 'bootstrap4',
	});
	
	$(".cmbAnio").change(function() {
		historyStack = [];
		currentNode = null;
		loadData();
	});
	
	$(".cmbTipoFiltro").change(function() {
		if ($(".cmbTipoFiltro").val() =="1") {
			$(".tipoFiltro1").show();
			$(".tipoFiltro2").hide();
		} else {
			$(".tipoFiltro1").hide();
			$(".tipoFiltro2").show();
		}
		historyStack = [];
		currentNode = null;
		loadData();
	});
	
	if ($(".cmbTipoFiltro").val() =="1") {
		$(".tipoFiltro1").show();
		$(".tipoFiltro2").hide();
	} else {
		$(".tipoFiltro1").hide();
		$(".tipoFiltro2").show();
	}
	
});


var chartDomNavegacion;
var chartNavegacion;

var actividadView="";
var programaView="";
var entidaddView="";
var jurisdiccionView="";


var finalidadView="";
var funcionView="";

function fillTitleGraficoExplorar() {
	var title = '';
	var strTipo="";
	var anio=$(".cmbAnio").val();
	
	if (actividadView != "") {
		title = "Presupuesto " + strTipo + " de la actividad <strong>" +  actividadView + "</strong>";
	} else if (programaView != "") {
		title = "Presupuesto " + strTipo + " del programa <strong>" +  programaView + "</strong>";
	} else if (entidaddView != "") {
		title = "Presupuesto " + strTipo + " del organismo <strong>" +  entidaddView + "</strong>";
	} else if (jurisdiccionView != "") {
		title = "Presupuesto " + strTipo + " de la jurisdicción <strong>" +  jurisdiccionView + "</strong>";
	} else {
		title = "Presupuesto " + strTipo;
	}
	
	title += " para el año " +anio +"<br>";
	
	title += "<span style='font-size:0.9rem;font-family:\"cascadia, monospace\"'>Expresado en valores nominales, sin ajuste por inflación</span>";
	$(".txtTitleGraficoExplorar").html(title);
}

$(document).ready(function() {
  chartDomNavegacion = document.getElementById('chart-navegacion');
  chartNavegacion = echarts.init(chartDomNavegacion);

  window.addEventListener('resize', () => {
    if (chartNavegacion){ 
      chartNavegacion.resize();
    }
  });
  
  $('#tabsGraficos a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    const target = $(e.target).attr('data-bs-target');
    if (target === '#grafico') {
      setTimeout(() => chartNavegacion.resize(), 10);
    }
  });
});

var currentNode = null;
var historyStack = [];

// Función para mapear los datos del backend al formato de ECharts
function lighten(color, factor) {
    // Convierte hex a RGB
    let c = hexToRgb(color);
    // c = [r, g, b, a]
    let r = Math.min(255, c.r + 255 * factor);
    let g = Math.min(255, c.g + 255 * factor);
    let b = Math.min(255, c.b + 255 * factor);
    return rgbToHex(r,g,b);
}

function mapData(items, baseColor = "#0583b0") {
	 return items.map((item, index) => {
	        let factor = index / items.length; // de 0 a 1
	        return {
	            name: item.name,
	            value: item.value,
	            value1: item.value1,
	            value2: item.value2,
	            id: item.id,
	            tipo: item.tipo,
	            children: [],
	            itemStyle: { color: lighten(baseColor, factor) }
	        };
	    });
}

function loadData(id = 0, tipo = null, parentNode = null) {
	let color;
	if (id == 0 && tipo == null){
		 $(".cmbJurisdiccion").val("-1");
		 $(".cmbEntidad").val("-1");
		 $(".cmbPrograma").val("-1");
		 $(".cmbActividad").val("-1");
		 
		 $(".cmbFinalidad").val("-1");
		 $(".cmbFuncion").val("-1");
		 $('#tablaMonitor').DataTable().ajax.url(getUri_tablaMonitor()).load();
		 fillTitleGraficoExplorar();
		 color = "#0583b0;"
	 } else {
		 switch(tipo) {
		 case "j":
			 $(".cmbJurisdiccion").val(id);
			 $(".cmbEntidad").val("-1");
			 $(".cmbPrograma").val("-1");
			 $(".cmbActividad").val("-1");
			 
			 $(".cmbFinalidad").val("-1");
			 $(".cmbFuncion").val("-1");
			 color = "#01594d;"
			 break;
		 case "e":
			 $(".cmbEntidad").val(id);
			 $(".cmbPrograma").val("-1");
			 $(".cmbActividad").val("-1");
			 
			 $(".cmbFinalidad").val("-1");
			 $(".cmbFuncion").val("-1");
			 color = "#eb3c00;"
			 break;
		 case "p":
			 $(".cmbPrograma").val(id);
			 $(".cmbActividad").val("-1");
			 
			 $(".cmbFinalidad").val("-1");
			 $(".cmbFuncion").val("-1");
			 color = "#cdff8a;"
			 break;
		 case "a":
			 color = "#cdff8a;"
			 $(".cmbActividad").val(id);
			 
			 $(".cmbFinalidad").val("-1");
			 $(".cmbFuncion").val("-1");
			 break;
		 case "fin":
			 $(".cmbFinalidad").val(id);
			 $(".cmbFuncion").val("-1");
			 
			 $(".cmbJurisdiccion").val("-1");
			 $(".cmbEntidad").val("-1");
			 $(".cmbPrograma").val("-1");
			 $(".cmbActividad").val("-1");
			 break;
		 case "fun":
			 $(".cmbFuncion").val(id);
			 
			 $(".cmbJurisdiccion").val("-1");
			 $(".cmbEntidad").val("-1");
			 $(".cmbPrograma").val("-1");
			 $(".cmbActividad").val("-1");
			 break;
		 }
		 $('#tablaMonitor').DataTable().ajax.url(getUri_tablaMonitor()).load();
	 }
	
	var currentYear = parseInt($(".cmbAnio").val());
	var tipoFiltro = parseInt($(".cmbTipoFiltro").val());
	
	chartNavegacion.showLoading({ text: 'Cargando...',   maskColor: 'rgba(0,0,0,0)',  });
    $.ajax({
        url: "drilldown",
        method: 'GET',
        data: {
            id: id,
            type: tipo,
            tipo: 1,
            tipoFiltro : tipoFiltro,
            ajuste: 1,
            anio: currentYear
        },
        success: function(data) {
        	chartNavegacion.hideLoading();
            var nodes = mapData(data, color);

            if (!parentNode) {
                // Primer nivel
				
                chartNavegacion.setOption({
                	 tooltip: {
                		 position: 'right',
                         trigger: 'item',
                         formatter: p => p.marker + " " + p.name + "<br>" +
                           "Inicial : $" + p.value.toLocaleString() + "<br>" +
                           "Vigente : $" + p.data.value1.toLocaleString() + "<br>" +
                           "Devengado : $" + p.data.value2.toLocaleString()  
                       },
                       nodeClick: function(event) {
                           // event.data.nivel es nuestro nivel
                           // Retorna 'false' para evitar que el sunburst haga drill-down automáticamente
                           return false;
                       },
                    series: [{
                        type: 'sunburst',
                        data: nodes,
                        radius: ['40%', '90%'],
                        label: { show: false },
                        itemStyle: { borderWidth: 2,   borderColor: '#e5eeff',  borderRadius: 7 }
                    }]
                });
            	jurisdiccionView = "";
	           	 entidaddView="";
	           	 programaView="";
	           	 actividadView="";
	           	 

	           	finalidadView="";
	           	funcionView="";
	           	fillTitleGraficoExplorar();
                currentNode = null;
                historyStack = [];
            } else {
                // Insertamos los hijos en el nodo actual
                parentNode.children = nodes;
                chartNavegacion.setOption({
                	 tooltip: {
                		 position: 'right',
                         trigger: 'item',
                         formatter: p => p.marker + " " + p.name + "<br>" +
                         "Inicial : $" + p.value.toLocaleString() + "<br>" +
                         "Vigente : $" + p.data.value1.toLocaleString() + "<br>" +
                         "Devengado : $" + p.data.value2.toLocaleString() 
                       },
                       nodeClick: function(event) {
                           // event.data.nivel es nuestro nivel
                           // Retorna 'false' para evitar que el sunburst haga drill-down automáticamente
                           return event.data.tipo !== 'a'
                       },
                    series: [{
                        type: 'sunburst',
                        data: [parentNode],
                        radius: ['40%', '90%'],
                        label: { show: false },
                        itemStyle: { borderWidth: 2,   borderColor: '#e5eeff',  borderRadius: 7 }
                    }]
                });
                currentNode = parentNode;
                if (currentNode.tipo == "j") {
                	jurisdiccionView = currentNode.name;
                	 entidaddView="";
                	 programaView="";
                	 actividadView="";
                	 
                	 finalidadView="";
     	           	funcionView="";
                } else if (currentNode.tipo == "e") {
                	 entidaddView=currentNode.name;
	               	 programaView="";
	               	 actividadView="";
	               	 
	               	finalidadView="";
		           	funcionView="";
                } else if (currentNode.tipo == "p") {
	               	 programaView=currentNode.name;
	               	 actividadView="";
	               	 
	               	finalidadView="";
		           	funcionView="";
	            } else if (currentNode.tipo == "a") {
	               	 actividadView=currentNode.name;
	               	 
	               	finalidadView="";
		           	funcionView="";
	            }
                
                
                if (currentNode.tipo == "fin") {
               	 	finalidadView=currentNode.name;
    	           	funcionView="";
    	           	
    	        	jurisdiccionView = "";
                   	entidaddView="";
                   	programaView="";
                   	actividadView="";
                } else if (currentNode.tipo == "fun") {
                	funcionView=currentNode.name;
                	
                	jurisdiccionView = "";
                   	entidaddView="";
                   	programaView="";
                   	actividadView="";
                } 
                
                
                fillTitleGraficoExplorar();
                
                historyStack.push(parentNode);
            }
        }
    });
}

function fillChartNavegacion() {
  if (!chartNavegacion) {
    chartNavegacion = echarts.init(chartDomNavegacion);
  }
  loadData();

//Evento de click en el sunburst
chartNavegacion.on('click', function(params) {
       
    	if (params.data.tipo == 'a'){
    	     chartNavegacion.setOption({
             	   tooltip: {
             		  		position: 'right',
             	          trigger: 'item',
             	         formatter: p => p.marker + " " + p.name + "<br>" +
                         "Inicial : $" + p.value.toLocaleString() + "<br>" +
                         "Vigente : $" + p.data.value1.toLocaleString() + "<br>" +
                         "Devengado : $" + p.data.value2.toLocaleString() 
             	        },
             	     nodeClick: function(event) {
                       // event.data.nivel es nuestro nivel
                       // Retorna 'false' para evitar que el sunburst haga drill-down automáticamente
                       return event.data.tipo !== 'a' || event.data.tipo !== 'fun'
                   },
         	           series: [{
         	               type: 'sunburst',
         	               data: [currentNode],
         	               radius: ['40%', '90%'],
         	               label: { show: false },
         	              itemStyle: { borderWidth: 2,   borderColor: '#e5eeff',  borderRadius: 7 }
         	           }]
                });
    	     
    	     return;
    	} 
    	
	
	
      if (currentNode && params.data.id === currentNode.id) {
          // Volver un nivel atrás
          if (historyStack.length > 1) {
              historyStack.pop();
              var prevNode = historyStack[historyStack.length - 1];

              chartNavegacion.setOption({
           	   tooltip: {
           	          trigger: 'item',
           	       formatter: p => p.marker + " " + p.name + "<br>" +
                   "Inicial : $" + p.value.toLocaleString() + "<br>" +
                   "Vigente : $" + p.data.value1.toLocaleString() + "<br>" +
                   "Devengado : $" + p.data.value2.toLocaleString() 
           	        },
           	     nodeClick: function(event) {
                     // event.data.nivel es nuestro nivel
                     // Retorna 'false' para evitar que el sunburst haga drill-down automáticamente
                     return event.data.tipo !== 'a'
                 },
       	           series: [{
       	               type: 'sunburst',
       	               data: [prevNode],
       	               radius: ['40%', '90%'],
       	               label: { show: false },
       	            itemStyle: { borderWidth: 2,   borderColor: '#e5eeff',  borderRadius: 7 }
       	           }]
              });
              currentNode = prevNode;
             
              if (currentNode.tipo == "j") {
              	jurisdiccionView = currentNode.name;
              	 entidaddView="";
              	 programaView="";
              	 actividadView="";
              	 
              	finalidadView="";
              	funcionView="";
              } else if (currentNode.tipo == "e") {
              	 entidaddView=currentNode.name;
	          	 programaView="";
	          	 actividadView="";
	          	 
	         	finalidadView="";
              	funcionView="";
              } else if (currentNode.tipo == "p") {
	          	 programaView=currentNode.name;
	          	 actividadView="";
	          	 
	         	finalidadView="";
              	funcionView="";
	          } else if (currentNode.tipo == "a") {
	          	 actividadView=currentNode.name;
	          	 
	         	finalidadView="";
              	funcionView="";
	          }
              
              if (currentNode.tipo == "fin") {
             	finalidadView=currentNode.name;
  	           	funcionView="";
  	           	
  	        	jurisdiccionView = "";
                entidaddView="";
                programaView="";
                actividadView="";
              } else if (currentNode.tipo == "fun") {
              	funcionView=currentNode.name;
              	
              	jurisdiccionView = "";
                entidaddView="";
                programaView="";
                actividadView="";
              } 
              
              
              fillTitleGraficoExplorar();
          } else {
              // Volver al primer nivel
              loadData();
          }
          return;
      }

     // Si no tiene hijos cargados, traemos los datos
      loadData(params.data.id, params.data.tipo, params.data, params.data.nivel + 1);
});


}
</script>