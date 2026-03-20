	
function onTabsChange() {
	  $('#tabsGraficos a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	    const target = $(e.target).attr('data-bs-target');
	    const compareComponent = $(".compareComponent");
	    const compareButton = $(".compareButton");

	    if (target === '#comparador-anual') {
	      compareComponent.removeClass('d-none').addClass('d-flex');
	      compareButton.show();
	    } else {
	      compareComponent.removeClass('d-flex').addClass('d-none');
	      compareButton.hide();
	    }
	  });

	  // Ocultar por defecto
	  $(".compareComponent").removeClass('d-flex').addClass('d-none');
	  $(".compareButton").hide()
	}





function downloadExcel() {
	$("#command").attr("action", "excel");
	$("#command").submit();
}


function downloadExcelGrafico() {
	$("#command").attr("action", "excelGrafico");
	$("#command").submit();
}



$(document).ready(function() {
	 //onTabsChange();
	
	 //ajustarAmbos();
	 	
	table_tabla.on('xhr.dt', function (ev, settings, json, xhr) {
		const j =  $(".cmbJurisdiccion").val();
		const e = $(".cmbEntidad").val();
		const p = $(".cmbPrograma").val();
		const a = $(".cmbActividad").val();
		
		if (a != "-1" || p != "-1"){
			table_tabla.column(0).visible(false);	
			table_tabla.column(1).visible(false);
			table_tabla.column(2).visible(false);
			table_tabla.column(3).visible(true);
		} else if (e != "-1"){
			table_tabla.column(0).visible(false);	
			table_tabla.column(1).visible(false);
			table_tabla.column(2).visible(true);
			table_tabla.column(3).visible(false);
		} else if (j != "-1"){
			table_tabla.column(0).visible(false);	
			table_tabla.column(1).visible(true);
			table_tabla.column(2).visible(false);
			table_tabla.column(3).visible(false);
		} else {
			table_tabla.column(0).visible(true);	
			table_tabla.column(1).visible(false);
			table_tabla.column(2).visible(false);
			table_tabla.column(3).visible(false);
		}
		
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
		 fillChartNavegacion();
	 })
	 
	  // Inicializar Sortable
    $("#group1, #group2").sortable({
      connectWith: ".sortable-container",
      placeholder: "ui-state-highlight",
      update: function( ) {
			fillCharts(); 
		}
    }).disableSelection();

  
   
    // Evento para eliminar
    $(document).on('click', '.label-item .remove', function () {
      $(this).parent().remove();
      fillCharts();
    });

	   fillCharts();
	   fillChartNavegacion();
	   fillChartEjecucionMensual();
});

function getGroupIds() {
	  const group1Data = [];
	  const group2Data = [];
	
	  $('#group1 .label-item').each(function () {
	    group1Data.push({
	      id: $(this).data('id'),
	      anio: $(this).data('anio'),
	      tipo: $(this).data('tipo')
	    });
	  });
	
	  $('#group2 .label-item').each(function () {
	    group2Data.push({
	      id: $(this).data('id'),
	      anio: $(this).data('anio'),
	      tipo: $(this).data('tipo')
	    });
	  });
	
	  return {
	    grupo1: group1Data,
	    grupo2: group2Data
	  };
	}

  // Botón para mostrar IDs en consola
  $('#showGroupIds').click(() => {
    const result = getGroupIds();
    console.log("Grupo 1 IDs:", result.grupo1);
    console.log("Grupo 2 IDs:", result.grupo2);
  });

var myChartNavegacion = null;

function fillCharts() {
	let queryString = "&type="+ $(".cmbTipo").val();
	queryString += "&ajuste=" + $(".cmbAjuste").val();
	queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
	queryString += "&idEntidad=" + $(".cmbEntidad").val();
	queryString += "&idPrograma=" + $(".cmbPrograma").val();
	queryString += "&idActividad=" + $(".cmbActividad").val();
	 
	
	$.getJSON("getResumen?anio=" + $(".cmbAnio").val() + queryString , function(data) {
	  	
		$("#spanAnio").html(data.anio );
		$("#spanPresupuestoAnio").html("$" + toMoneyFormat(data.presupuestoAño) + "<br>");
		
		let porcentajeDelTotal = 0;
		let porcentajeDelPadre = 0;
		if (data.jurisdiccion != "") {
			
			porcentajeDelTotal = data.presupuestoJurisdiccion / data.presupuestoAño * 100;
			$("#txtJurisdiccion").html("Jurisdicción<br>" + data.jurisdiccion + "<br>$ " + toMoneyFormat(data.presupuestoJurisdiccion) + "<br>" + toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto");
			$("#txtJurisdiccion").show();
			if (data.entidad != "") {
				porcentajeDelTotal = data.presupuestoEntidad / data.presupuestoAño * 100;
				porcentajeDelPadre  = data.presupuestoEntidad / data.presupuestoJurisdiccion * 100;
				$("#txtEntitdad").html("Entidad<br>" +data.entidad + "<br>$ " + toMoneyFormat(data.presupuestoEntidad) + "<br>" + toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto<br>" + toMoneyFormat(porcentajeDelPadre) + "% del " + data.jurisdiccion );
				$("#txtEntitdad").show();
				if (data.programa != "") {
					porcentajeDelTotal = data.presupuestoPrograma / data.presupuestoAño * 100;
					porcentajeDelPadre  = data.presupuestoPrograma / data.presupuestoEntidad * 100;
					$("#txtPrograma").html("Programa<br>" +data.programa + "<br>$ " + toMoneyFormat(data.presupuestoPrograma) + "<br>" + toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto<br>" + toMoneyFormat(porcentajeDelPadre) + "% del " + data.entidad );
					$("#txtPrograma").show();
					if (data.actividad != "") {
						porcentajeDelTotal = data.presupuestoActividad / data.presupuestoAño * 100;
						porcentajeDelPadre  = data.presupuestoActividad / data.presupuestoPrograma * 100;
						$("#txtActividad").html("Actividad<br>" +data.actividad + "<br>$ " + toMoneyFormat(data.presupuestoActividad) + "<br>" + toMoneyFormat(porcentajeDelTotal) + "% del total del presupuesto<br>" + toMoneyFormat(porcentajeDelPadre) + "% del " + data.programa );
						$("#txtActividad").show();
					} 
				} else {
					$("#txtActividad").hide();
				}
			} else {
				$("#txtPrograma").hide();
				$("#txtActividad").hide();
			}
		} else {
			$("#txtJurisdiccion").hide();
			$("#txtEntitdad").hide();
			$("#txtPrograma").hide();
			$("#txtActividad").hide();
		}
	 	
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$("#txtJurisdiccion").hide();
		$("#txtEntitdad").hide();
		$("#txtPrograma").hide();
		$("#txtActividad").hide();
		$('#loading').hide();
	    alert("Error al cargar los datos: " + textStatus + "\nDetalles: " + errorThrown);
	    console.error("Respuesta del servidor:", jqXHR.responseText);
	});
	
	


	  $('#tabla').DataTable().ajax.url(getUri_tabla()).load();
	  fillChartAnual()
	  fillChartEjecucionMensual();
	  fillChartComparadorAnual();
	  
	  
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

