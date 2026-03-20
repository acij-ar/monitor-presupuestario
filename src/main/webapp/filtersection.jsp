<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<script src="../resources/js/colors.js"></script>

<form:form method="POST" action="list.html">
					<spring:bind path="*">
				        <div class="filters-card">
				          <!-- Campos -->
				          <div class="mb-2">
				            <div class="d-flex align-items-center justify-content-between">
				              <h6 class="mb-1 cascadia">Año</h6>
				            </div>
				            <form:select path="anio" cssClass="form-control select2bs4 cmbAnio chartUpdate" >
								<form:options items="${command.anios}" />
							</form:select>
				          </div>
				
				          <div class="mb-2">
				            <h6 class="mb-1 cascadia" style="display:inline-block"  >Tipo de presupuesto</h6>
				            <form:select path="tipo" cssClass="form-control select2bs4 cmbTipo">
				            	<form:option value="-1">TODOS</form:option>
								<form:option value="1">Inicial</form:option>
								<form:option value="2">Vigente</form:option>
								<form:option value="3">Devengado</form:option>
								<form:option value="5">% Ejecucion</form:option>
							</form:select>
				          </div>
				          
				           <div class="mb-2">
				            <h6 class="mb-1 cascadia" style="display:inline-block">Ajuste por inflación</h6>
				           <form:select path="ajuste" cssClass="form-control select2bs4 cmbAjuste">
								<form:option value="1">Valores nominales (sin ajuste)</form:option>
								<form:option value="2">Valores reales (inflación promedio interanual) - RECOMENDADO</form:option>
								<form:option value="3">Valores reales (inflación acumulada anual)</form:option>
							</form:select>
				          </div>
				          
				          <div class="mb-2">
				            <h6 class="mb-1 cascadia" style="display:inline-block">Tipo de filtro</h6>
				           <form:select path="tipoFiltro" cssClass="form-control select2bs4 cmbTipoFiltro">
								<form:option value="1">Filtro por Jurisdicción/Organismo/Programa/Actividad</form:option>
								<form:option value="2">Filtro por Función/Finalidad</form:option>
							</form:select>
				          </div>
				          
				          
				          <div class="mb-2 tipoFiltro2">
				            <h6 class="mb-1 cascadia">Finalidad</h6>
				            <form:select path="finalidad.id" cssClass="form-control  select2bs4 cmbFinalidad chartUpdate">
								<form:option value="-1">TODOS</form:option>
							  	<form:options items="${command.finalidades}" itemValue="id" itemLabel="descripcion" />
							</form:select>
				          </div>
				
				
				           <div class="mb-2 tipoFiltro2">
				            <h6 class="mb-1 cascadia">Función</h6>
				            <form:select path="funcion.id" cssClass="form-control select2bs4 cmbFuncion chartUpdate selectWithComments">
								<form:option value="-1" data-description="" data-periodo-agrupado="" data-periodo="" data-f="-1">TODOS</form:option>
								<c:forEach items="${command.funciones}" var="item">
							  		<option value="${item.id}" data-description="${item.detalle}" data-f="${item.idFinalidad}">${item.descripcion}</option>	
							  	</c:forEach>
							</form:select>
							
				          </div>
				
				          <div class="mb-2 tipoFiltro1">
				            <h6 class="mb-1 cascadia " >Jurisdicción</h6>
				            <form:select path="jurisdiccion.id" cssClass="form-control select2bs4 cmbJurisdiccion chartUpdate">
								<form:option value="-1">TODOS</form:option>
								<form:options items="${command.jurisdicciones}" itemValue="id" itemLabel="descripcion" />
							</form:select>
				          </div>
				
				          <div class="mb-2 tipoFiltro1">
				            <h6 class="mb-1 cascadia">Organismo</h6>
				            <form:select path="entidad.id" cssClass="form-control  cmbEntidad chartUpdate selectWithComments">
								<form:option value="-1" data-description="" data-periodo-agrupado="" data-periodo="" data-j="-1">TODOS</form:option>
								<c:forEach items="${command.entidades}" var="item">
							  		<option value="${item.id}" data-description="${item.detalle}" data-periodo="${item.periodo}" data-periodo-agrupado="${item.peridoEnJurisdiccion}" data-j="${item.idJurisdiccion}">${item.descripcion}</option>	
							  	</c:forEach>
							</form:select>
				          </div>
				
				          <div class="mb-2 tipoFiltro1">
				            <h6 class="mb-1 cascadia">Programa</h6>
				            <form:select path="programa.id" cssClass="form-control  cmbPrograma chartUpdate selectWithComments">
								<form:option value="-1" data-description="" data-periodo-agrupado="" data-periodo="" data-j="-1" data-e="-1">TODOS</form:option>
								<c:forEach items="${command.programas}" var="item">
							  		<option value="${item.id}" data-description="${item.detalle}" data-periodo="${item.periodo}" data-periodo-agrupado="${item.peridoEnJurisdiccion}"  data-j="${item.idJurisdiccion}" data-e="${item.idEntidad}">${item.descripcion}</option>	
							  	</c:forEach>
							</form:select>
				          </div>
				
				          <div class="mb-2 tipoFiltro1">
				            <h6 class="mb-1 cascadia">Actividad</h6>
				           	<form:select path="actividad.id" cssClass="form-control select2bs4 cmbActividad chartUpdate selectWithComments">
									<form:option value="-1" data-j="-1" data-e="-1" data-p="-1">TODOS</form:option>
									<c:forEach items="${command.actividades}" var="item">
								  		<option value="${item.id}" data-description="${item.detalle}" data-j="${item.idJurisdiccion}" data-e="${item.idEntidad}" data-p="${item.idPrograma}" data-periodo="${item.anio}" data-periodo-agrupado="${item.peridoEnJurisdiccion}" >${item.descripcion}</option>	
								  	</c:forEach>
							</form:select>
				          </div>
				
				          <!-- Botones Grupo 1 / Grupo 2 + tacho -->
						   <div class="col-12 d-flex justify-content-between pl-4  mt-3" style="padding: 0px !important" >
							  <div>
							    <button type="button" id="addToGroup1" class="btn-round compareButton">
							      <i class="fa fa-plus"></i>&nbsp;Grupo 1
							    </button>
							    <button type="button" id="addToGroup2" class="btn-round compareButton">
							      <i class="fa fa-plus"></i>&nbsp;Grupo 2
							    </button>
							  </div>
							
							  <button type="button" id="limpiar" class="btn-trash ">
							   <img src="../resources/icons/trash.svg" alt="Eliminar" style="width:16px; height:16px;" />
							  </button>
							</div>

				
				
							<div class="row compareComponent mt-3">
							  <div class="col-sm-12 col-md-6">
							    <div class="group-wrapper">
							      <div class="group-title cascadia" style="font-weight : 100 !important">Grupo 1</div>
							      <div class="group-box">
							        <div id="group1" class="sortable-container"></div>
							      </div>
							    </div>
							  </div>
							
							  <div class="col-sm-12 col-md-6">
							    <div class="group-wrapper">
							      <div class="group-title cascadia" style="font-weight : 100 !important">Grupo 2</div>
							      <div class="group-box">
							        <div id="group2" class="sortable-container"></div>
							      </div>
							    </div>
							  </div>
							</div>
				        
	        </div>
      	</spring:bind>
</form:form>
  
  <script>
var preventHandlerJ = false;
var preventHandlerE = false;
var preventHandlerP = false;
var preventHandlerF = false;

function seleccionarOpcionPorIndice($select, index) {
	  const valor = $select.find('option').eq(index).val();
	  $select.val(valor).trigger('change');
}

//Función para agregar un label con color personalizado
function addLabelToGroup(groupId) {
  const obj = getDataSelected();
  var groups = getGroupIds();
  let startColor = "#03624c";
  let endColor = "#97ffe7";
  let index = groups.grupo1.length;
  if (groupId == 'group2') {
	  startColor = "#7f2606";
	  endColor = "#ffb093";
	  index = groups.grupo2.length;
  }
  
  let color = getColor(startColor, endColor, index);
  
  const label = '<div  class="label-item cascadia" data-tipo="'+obj.tipo+'" data-id="' + obj.id + '" data-anio="' + obj.anio+ '" style="width:100%;background-color: transparent; color: '+color+'">'+obj.texto+' <i>('+obj.anio+')</i><i style="color: #0f6a57" class="fas fa-times remove"></i></div>'
  $("#"+  groupId).append(label);
  fillCharts();
}


$(document).ready(function() {
	$('.select2bs4').select2({
    	theme: 'bootstrap4',
    	  templateResult: function (state) {
              if (!state.id) return state.text;
              var info = $(state.element).attr('data-content');
              // span con popover
              var $state = $('<span>'+state.text+ '</span>');
              return $state;
            },
           
	});

	  // Inicializar Sortable
    $("#group1, #group2").sortable({
      connectWith: ".sortable-container",
      placeholder: "ui-state-highlight",
      receive: function (event, ui) {
    	  var groups = getGroupIds();
    	    if (this.id === "group1") {
   	    	  let startColor = "#03624c";
   	    	  let endColor = "#97ffe7";
   	    	  let index = groups.grupo1.length;
   	          let color = getColor(startColor, endColor, index);
   	       	  ui.item.css("color", color);
    	    } else if (this.id === "group2") {
    	    	startColor = "#7f2606";
    	   	  	endColor = "#ffb093";
    	   	  	index = groups.grupo2.length;
    	   	  	console.log(index);
    	    	let color = getColor(startColor, endColor, index);
    	   	    ui.item.css("color", color);
    	    }
    	  },
      update: function( ) {
			fillCharts(); 
		}
    }).disableSelection();

    // Botones de agregar
    $('#addToGroup1').click(() => addLabelToGroup('group1'));  
    $('#addToGroup2').click(() => addLabelToGroup('group2'));  

	
    $('#toggleLeftTop').on('click', function () {
      const $content = $('#leftTopContent');
      const $button = $(this);

      $content.toggleClass('d-none');

      if ($content.hasClass('d-none')) {
        $button.text('+');
        $(".general").attr('style', 'height: auto !important;');
      } else {
        $button.text('−');
        $(".general").attr('style', 'height: 100% !important;');
      }
    });
	
	$("#limpiar").click(function() {	
		seleccionarOpcionPorIndice($(".cmbAnio"), 0);
		$("#group1").empty();
		$("#group2").empty();
		fillChartComparadorAnual();
	});

	$(".tipoFiltro2").hide();
	$(".tipoFiltro1").show();
	
	$(".cmbTipoFiltro").change(function() {
		if ($(".cmbTipoFiltro").val() == 1) {
			$(".tipoFiltro2").hide();
			$(".tipoFiltro1").show();
			loadJurisdicciones();	
			
		} else {
			$(".tipoFiltro1").hide();
			$(".tipoFiltro2").show();
			loadFinalidades();
		}
		
	});
	
	$(".cmbJurisdiccion").change(function() {
		if (preventHandlerJ){
			  var selectedJ = $(this).val();
		        $(".cmbEntidad option").each(function() {
		            if ($(this).attr("data-j") !== selectedJ && $(this).attr("data-j") != "-1") {
		                $(this).remove();
		            }
		        });
		    $('.cmbEntidad').trigger('update');
			preventHandlerJ = false;
			return;
		}
		loadEntidades();
	})
	
	$(".cmbEntidad").change(function() {
		if (preventHandlerE){
			
			var selectedJ = $(".cmbJurisdiccion").val();
			var selectedE = $(this).val();
	        $(".cmbPrograma option").each(function() {
	            if ($(this).attr("data-j") !== selectedJ && $(this).attr("data-e") !== selectedE && $(this).attr("data-j") != "-1") {
	                $(this).remove();
	            }
	        });
	    	$('.cmbPrograma').trigger('update');
				
			
			preventHandlerE = false;
			return;
		}
		
		if ($(this).val() != "-1"){
			$(".cmbJurisdiccion").val($('.cmbEntidad').find(':selected').data('j').toString());
			preventHandlerJ = true;
			$('.cmbJurisdiccion').trigger('change');
		}
		loadProgramas();
	})
	
	$(".cmbPrograma").change(function() {
		if (preventHandlerP){
			
			var selectedJ = $(".cmbJurisdiccion").val();
			var selectedE = $(".cmbEntidad").val();
			var selectedP = $(this).val();
	        $(".cmbActividad option").each(function() {
	            if ($(this).attr("data-j") !== selectedJ && $(this).attr("data-e") !== selectedE && $(this).attr("data-p") !== selectedP && $(this).attr("data-j") != "-1") {
	                $(this).remove();
	            }
	        });
	    	$('.cmbActividad').trigger('update');
			
			preventHandlerP = false;
			return;
		}
		
		if ($(this).val() != "-1"){
			$(".cmbJurisdiccion").val($('.cmbPrograma').find(':selected').data('j').toString());
			$(".cmbEntidad").val($('.cmbPrograma').find(':selected').data('e').toString());
			
			preventHandlerJ = true;
			preventHandlerE = true;
			$('.cmbJurisdiccion').trigger('change');
			$('.cmbEntidad').trigger('change');
		}
		
		loadActividades();
	})
	
	
	$(".cmbActividad").change(function() {
		
		if ($(this).val() != "-1"){
			$(".cmbJurisdiccion").val($('.cmbActividad').find(':selected').data('j').toString());
			$(".cmbEntidad").val($('.cmbActividad').find(':selected').data('e').toString());
			$(".cmbPrograma").val($('.cmbActividad').find(':selected').data('p').toString());
			
			preventHandlerJ = true;
			preventHandlerE = true;
			preventHandlerP = true;
			$('.cmbJurisdiccion').trigger('change');
			$('.cmbEntidad').trigger('change');
			$('.cmbPrograma').trigger('change');
		}
		
		fillCharts();	
	});
	
	
	$(".cmbFinalidad").change(function() {
		if (preventHandlerF){
			  var selectedF = $(this).val();
		        $(".cmbFuncion option").each(function() {
		            if ($(this).attr("data-f") !== selectedF && $(this).attr("data-f") != "-1") {
		                $(this).remove();
		            }
		        });
		    $('.cmbFuncion').trigger('update');
			preventHandlerF = false;
			return;
		}
		loadFunciones();
	})
	
	
	$(".cmbFuncion").change(function() {
		if ($(this).val() != "-1"){
			$(".cmbFinalidad").val($('.cmbFuncion').find(':selected').data('f').toString());
			
			preventHandlerF = true;
			$('.cmbFinalidad').trigger('change');
		}
		
		fillCharts();
	})
	
	$(".cmbAnio").change(function() {
		if ($(".cmbTipoFiltro").val() == 1) {
			loadJurisdicciones();	
		} else {
			loadFinalidades();
		}
	});
	
	
	$(".cmbTipo").change(function() {
		fillCharts();
	});
	
	$(".cmbAjuste").change(function() {
		fillCharts();
	});
	
	
	$(".select2bs4Tooltip").select2({
		  theme: 'bootstrap4',
		  templateResult: function (data) {
	          if (!data.id) return data.text; // Placeholder
	          var $data = $('<span title="'+data.element.title+'">'+data.text+'</span>');
	          return $data;
	        }
	});
	
	 
	
	$('.selectWithComments').select2({
		  theme: 'bootstrap4',
		  templateResult: function (data) {
		    if (!data.id) {
		      return data.text;
		    }

		    var description = $(data.element).data('description');
		    var periodo = $(data.element).data('periodo');
		    var periodoAgrupado = $(data.element).data('periodo-agrupado');
		    
		    if (description == "" || description === undefined || periodo=="" || periodo === undefined){
		    	var $result = $('<div><strong>' + data.text + '</strong></div>');
			    return $result;
		    } else {
		    	if (periodoAgrupado != "") {
		    		return $('<div><strong>' + data.text + '</strong>' + ' (' + periodo + ')' + '<br><small class="text-muted">En ' + description + '<strong> desde ' + periodoAgrupado + ' </strong></small></div>');
		    	} else {
		    		return $('<div><strong>' + data.text + '</strong>' + ' (' + periodo + ')' + '<br><small class="text-muted">En ' + description + ' </small></div>');
		    	}
		    }
		    
	  }
	});
});




function loadFinalidades() {
	let queryString = "?anio=" + $(".cmbAnio").val();
	
	
	$('.cmbFinalidad').empty();
	$.getJSON('findFinalidades' + queryString, function(result) {
		if (result != null) {
			$('.cmbFinalidad').append($('<option>').text('TODOS').attr('value', -1));
			if (result.length > 0) {
				$.each(result, function(key, value) {
					$('.cmbFinalidad').append($('<option>').text(value.descripcion).attr('value', value.id));
				});
			}
			$('.cmbFinalidad').trigger('update');
			loadFunciones();
		}
	});
}

function loadFunciones() {
	let queryString = "?anio=" + $(".cmbAnio").val();
	queryString += "&idFinalidad=" + $(".cmbFinalidad").val();
	
	$('.cmbFuncion').empty();
	$.getJSON('findFunciones' + queryString, function(result) {
		if (result != null) {
			$('.cmbFuncion').append($('<option>').text('TODOS')
					.attr('value', -1)
					.attr("data-f","-1")
					.attr("data-description", "")
				);
			if (result.length > 0) {
				$.each(result, function(key, value) {
					$('.cmbFuncion')
						.append($('<option>')
										.text(value.descripcion)
										.attr('value', value.id)
										.attr("data-f", value.idFinalidad)
										.attr("data-description", value.detalle)
						);
				});
			}
			$('.cmbFuncion').trigger('update');
			fillCharts();
		}
	});

}

function loadJurisdicciones() {
	let queryString = "?anio=" + $(".cmbAnio").val();
	
	
	$('.cmbJurisdiccion').empty();
	$.getJSON('findJurisdicciones' + queryString, function(result) {
		if (result != null) {
			$('.cmbJurisdiccion').append($('<option>').text('TODOS').attr('value', -1));
			if (result.length > 0) {
				$.each(result, function(key, value) {
					
					$('.cmbJurisdiccion').append($('<option>').text(value.descripcion).attr('value', value.id));
				});
			}
			$('.cmbJurisdiccion').trigger('update');
			loadEntidades();
		}
	});
}


function loadEntidades() {
	let queryString = "?anio=" + $(".cmbAnio").val();
	queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
	

	$('.cmbEntidad').empty();
	$.getJSON('findEntidades' + queryString, function(result) {
		if (result != null) {
			$('.cmbEntidad').append($('<option>').text('TODOS')
					.attr('value', -1)
					.attr("data-j","-1")
					.attr("data-description", "")
					.attr("data-periodo", "")
					.attr("data-periodo-agrupado", "")
				);
			if (result.length > 0) {
				$.each(result, function(key, value) {
					$('.cmbEntidad')
						.append($('<option>')
										.text(value.descripcion)
										.attr('value', value.id)
										.attr("data-j", value.idJurisdiccion)
										.attr("data-description", value.detalle)
										.attr("data-periodo", value.periodo)
										.attr("data-periodo-agrupado", value.peridoEnJurisdiccion)
						);
				});
			}
			$('.cmbEntidad').trigger('update');
			loadProgramas();
			
		}
	});

}

function loadProgramas() {
	let queryString = "?anio=" + $(".cmbAnio").val();
	queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
	queryString += "&idEntidad=" + $(".cmbEntidad").val();
	
	
	$('.cmbPrograma').empty();
	$.getJSON('findProgramas' + queryString, function(result) {
		if (result != null) {
			$('.cmbPrograma').append($('<option>').text('TODOS')
					.attr('value', -1)
					.attr("data-j","-1")
					.attr("data-e","-1")
					.attr("data-description", "")
					.attr("data-periodo", "")
					.attr("data-periodo-agrupado", "")	
				);
			if (result.length > 0) {
				$.each(result, function(key, value) {
				
					$('.cmbPrograma').append($('<option>')
											.text(value.descripcion)
											.attr('value', value.id)
											.attr("data-j", value.idJurisdiccion)
											.attr("data-e", value.idEntidad)
											.attr("data-description", value.detalle)
											.attr("data-periodo", value.periodo)
											.attr("data-periodo-agrupado", value.peridoEnJurisdiccion)
									);
				});
			}
	
			$('.cmbPrograma').trigger('update');
	
			loadActividades();
			
		}
	});
}


function loadActividades() {
	let queryString = "?anio=" + $(".cmbAnio").val();
	queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
	queryString += "&idEntidad=" + $(".cmbEntidad").val();
	queryString += "&idPrograma=" + $(".cmbPrograma").val();
	
	
	$('.cmbActividad').empty();
	$.getJSON('findActividades' + queryString, function(result) {
		if (result != null) {
			$('.cmbActividad').append($('<option>').text('TODOS')
										.attr('value', -1)
										.attr("data-j","-1")
										.attr("data-e","-1")
										.attr("data-p","-1")
										.attr("data-description", "")
										.attr("data-periodo", "")
										.attr("data-periodo-agrupado", "")	
									);
			if (result.length > 0) {
				$.each(result, function(key, value) {
					$('.cmbActividad').append(
										$('<option>').text(value.descripcion)
													 .attr('value', value.id)
													 .attr("data-j", value.idJurisdiccion)
													 .attr("data-e", value.idEntidad)
													 .attr("data-p", value.idPrograma)
													 .attr("data-description", value.detalle)
													 .attr("data-periodo", value.anio)
													 .attr("data-periodo-agrupado", value.peridoEnJurisdiccion)
										);
				});
			}
		
			$('.cmbActividad').trigger('update');
			fillCharts();
		}
	});
}


function getDataSelected() {
	var anio = $(".cmbAnio").val();
	var j = $(".cmbJurisdiccion").val();
	var e = $(".cmbEntidad").val();
	var p = $(".cmbPrograma").val();
	var a = $(".cmbActividad").val();
	
	
	var fin = $(".cmbFinalidad").val();
	var fun = $(".cmbFuncion").val();
	
	if ($(".cmbTipoFiltro").val() == 1) {
	
	
		if (a != "-1") {
			return {
					id : parseInt(a), 
					texto : $(".cmbActividad").select2('data')[0].text, 
					anio : parseInt(anio),
					tipo :'a',
			}
		} else if (p != "-1") {
			return {
				id : parseInt(p), 
				texto : $(".cmbPrograma").select2('data')[0].text, 
				anio : parseInt(anio),
				tipo :'p',
			}
		} else if (e != "-1") {
			return {
				id : parseInt(e), 
				texto : $(".cmbEntidad").select2('data')[0].text, 
				anio : parseInt(anio),
				tipo :'e',
			}
		} else if (j != "-1") {
			return {
				id : parseInt(j), 
				texto : $(".cmbJurisdiccion").select2('data')[0].text, 
				anio : parseInt(anio),
				tipo :'j',
			}
		} else {
			return {
				id : parseInt(anio), 
				texto : 'Año completo', 
				anio : parseInt(anio),
				tipo :'y',
			}
		}
		
	} else {
		if (fun != "-1") {
			return {
				id : parseInt(fun), 
				texto : $(".cmbFuncion").select2('data')[0].text, 
				anio : parseInt(anio),
				tipo :'fun',
			}
		} else if (fin != "-1") {
			return {
				id : parseInt(fin), 
				texto : $(".cmbFinalidad").select2('data')[0].text, 
				anio : parseInt(anio),
				tipo :'fin',
			}
		} else {
			return {
				id : parseInt(anio), 
				texto : 'Año completo', 
				anio : parseInt(anio),
				tipo :'y',
			}
		}
	}
	
}




</script>

<script>
    $(function () {
     $(function () {
    $('#toggleSidebarIcon').on('click', function () {
      $('#sidebar').addClass('active');
    });

    $('#closeSidebar').on('click', function () {
      $('#sidebar').removeClass('active');
    });
  });
    });
 </script>

  