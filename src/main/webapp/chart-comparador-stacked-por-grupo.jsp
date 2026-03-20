<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

 <style>
    /* El div define el tamaño del gráfico */
    #chart-anual-stacked {
      width: 100%;         /* Ocupa todo el ancho del contenedor padre */
      margin: auto;
      height: 80vh;
      max-height: 750px;
    }
    
    @media (min-width: 768px) {
	  #chart-anual-stacked" {
	    height: 80vh; /* Altura para pantallas md o mayores */
	    max-height: 750px;
	  }
	}
  </style>
  
  
<div id="chart-anual-stacked"></div>

<script>

var chartStackDomAnual;
var charStackAnual;

	$(document).ready(function() {
		chartStackDomAnual = document.getElementById('chart-anual-stacked');
		charStackAnual = echarts.init(chartStackDomAnual);
		
		 window.addEventListener('resize', () => {
			 if (charStackAnual){ 
				 charStackAnual.resize();
			 }
			 
		   });
		 
		 $('#tabsGraficos a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		      const target = e.target.id;
		      if (target === 'comparador-tab') {
		        setTimeout(() => {
		       	 charStackAnual.resize();
		        }, 10);
		      }
		    });
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
	  });
	    
    function fillChartComparadorAnual() {
    	if (!charStackAnual) {
    		charStackAnual = echarts.init(chartStackDomAnual);
    	}
    	
    	const result = getGroupIds();
    	const isMobile = window.innerWidth < 768; // breakpoint "mobile"
    	 // Cargar datos del backend
    	charStackAnual.showLoading({ text: 'Cargando...',   maskColor: 'rgba(0,0,0,0)',  });
    	  $.ajax({
  		    url: 'getComparadorGrupos?tipo=' + $(".cmbTipo").val()+  "&ajuste=" + $(".cmbAjuste").val(),
  		    type: 'POST',
  		    contentType: 'application/json',
  		    data: JSON.stringify(result),
  		    success: function (data) {
  		    	
  		    	const legendRows = Math.ceil(data.series.length / 3); // suponiendo 4 ítems por fila
  		    	const legendHeight = legendRows * 20; // 20px de alto por fila aprox
  		    	const categories = data.categories;
  		    	
  		    	let data1= null;
  		    	let firstIndex = 0;
  		    	let lastIndex = data.categories.length;
  		    	
  		    	if (data.series[0]!== undefined) {
  		    		data1 = data.series[0].data;
        	  		firstIndex = data1.findIndex(v => v > 0);
        	  		lastIndex = data1.length - 1 - [...data1].reverse().findIndex(v => v > 0);
  		    	}
        	  
  		    	if (data.series[1]!== undefined) {
        	  		data1 = data.series[1].data;
        	  		firstIndex = Math.min(firstIndex,data1.findIndex(v => v > 0));
        	  		lastIndex = Math.max(lastIndex,data1.length - 1 - [...data1].reverse().findIndex(v => v > 0));
  		    	}
        	  
	        	  if (lastIndex>=10 && lastIndex-10 > firstIndex) {
	        		  firstIndex=lastIndex-10 ;
	        	  }
	        	  // asigno las categorías correspondientes
	        	  const startValue = categories[firstIndex];
	        	  const endValue = categories[lastIndex];
	  		    	
  		    	 const option = {
  		    			 textStyle: {
  	          		        fontFamily: 'Cascadia Mono, monospace',
  	          		        fontSize: isMobile ? 10 : 12  // fuente más chica en mobile
  	          		    },
  		          		legend: {
  		          		    show: true,
  		          		    bottom: 0, // o 'top', 'left', etc.
  		          		  	type: 'plain',   // asegura que pueda hacer wrap (se parte en varias filas)
  		          	  		orient: 'horizontal'
  		          		    
  		          		  },
  		              tooltip: {
  		                trigger: 'axis',
  		                axisPointer: { type: 'shadow' },
  		                formatter: params => {
  		                  let html = params[0].axisValue + '<br/>';
  		                  params.forEach(p => {
  		                    html += p.marker + " " + p.seriesName + " : $ " + p.value.toLocaleString("es-AR") + "<br>";
  		                  });
  		                  return html;
  		                }
  		              },
  		              dataZoom: [
  		                { type: 'slider', show: true, xAxisIndex: 0, startValue: startValue, endValue: endValue,  bottom: legendHeight + 60 },
  		                { type: 'inside', xAxisIndex: 0 }
  		              ],
  		              xAxis: {
  		                type: 'category',
  		                data: data.categories,
  		                nameLocation: 'middle',
  		                nameGap: 30,
  		                axisLabel: {
	  	            	    rotate: 90, // gira 90 grados
	  	            	    fontSize: isMobile ? 8 : 12
  	            		}
  		              },
  		              yAxis: {
  		                type: 'value',
  		             	name: (isMobile ? '' : 'millones de pesos'), 
  		                nameLocation: 'middle',
  		             	 nameGap: isMobile ? 0 : 100,
  		                axisLabel: {
  		                  fontSize: isMobile ? 9 : 12,
  		               	  formatter: val => {
  		             		// en mobile: abreviar con K / M
  		              		        if (isMobile) {
  		              		          if (val >= 1000000) return '$' + (parseFloat(val) / 1000000).toFixed(2) + 'M';
  		              		          if (val >= 1000) return '$' + (parseFloat(val) / 1000).toFixed(2) + 'K';
  		              		        }
  		              		        return '$' + val.toLocaleString('es-AR');
  		              		      }
  		                }
  		              },
  		              series: data.series,
  		               
  		              grid: {
  		            	  top: 5,
  		            	  left: isMobile ? 60 : 140, // menos margen en mobile
  		                  bottom: legendHeight + 60 + 90
  		              }
  		            };

  		    		charStackAnual.hideLoading();
  		            charStackAnual.setOption(option, true);
  		    	
  		    	
  		    },
  		    error: function (xhr, status, error) {
  		    	 charStackAnual.hideLoading();
  		    	 showErrorMessage(charStackAnual, "Hubo un problema cargando el gráfico.\nHaga click aquí para intentar recargarlo.", fillChartComparadorAnual);
  		    }
  		  });
    }
    
    
    function showErrorMessage(chart, message, reloadFunction) {
       	chart.clear(); // limpia el gráfico previo

       	chart.setOption({
       	    graphic: [
       	      {
       	        type: 'text',
       	        left: 'center',
       	        top: 'middle',
       	        style: {
       	          text: message,
       	          fontSize: 18,
       	          fontWeight: 'bold',
       	          fill: 'red',
       	          textAlign: 'center'
       	        },
       	        onclick: () => {
       	          // Al hacer click, reintenta cargar los datos
       	          reloadFunction();
       	        },
       	        cursor: 'pointer' // muestra el cursor de mano
       	      }
       	    ]
       	  });
       	}


   
  </script>