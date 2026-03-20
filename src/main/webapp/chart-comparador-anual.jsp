<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

 <style>
    /* El div define el tamaño del gráfico */
    #chart-anual {
      width: 100%;         /* Ocupa todo el ancho del contenedor padre */
      max-width: 1300px;
      margin: auto;
      height: 100%;
      max-height: 480px;
      font-family:  'Cascadia Mono', monospace !important;
    }
    
    @media (min-width: 768px) {
	  #chart-anual {
	    height: 100%; /* Altura para pantallas md o mayores */
	    max-height: 480px;
	  }
	}
  </style>
  
  
<div id="chart-anual"></div>

<script>

var chartDomAnual;
var charAnual;

	$(document).ready(function() {
		chartDomAnual = document.getElementById('chart-anual');
		charAnual = echarts.init(chartDomAnual);
		
		 window.addEventListener('resize', () => {
			 if (charAnual){ 
				 charAnual.resize();
			 }
			 
		   });
		 
		 $('#tabsGraficos a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		      const target = e.target.id
		      if (target === 'anual-tab') {
		        setTimeout(() => {
		       	 charAnual.resize();
		        }, 10);
		      }
		    });
	});
	    
    function fillChartAnual() {
    	let queryString = "&type="+ $(".cmbTipo").val();
    	queryString += "&ajuste=" + $(".cmbAjuste").val();
    	queryString += "&tipoFiltro=" + $(".cmbTipoFiltro").val();
    	queryString += "&idFinalidad=" + $(".cmbFinalidad").val();
    	queryString += "&idFuncion=" + $(".cmbFuncion").val();
    	queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
    	queryString += "&idEntidad=" + $(".cmbEntidad").val();
    	queryString += "&idPrograma=" + $(".cmbPrograma").val();
    	queryString += "&idActividad=" + $(".cmbActividad").val();

    	
    	if (!charAnual) {
    		charAnual = echarts.init(chartDomAnual);
    	}
    	const isMobile = window.innerWidth < 768; // breakpoint "mobile"
    	 // Cargar datos del backend
    	charAnual.showLoading({ text: 'Cargando...',   maskColor: 'rgba(0,0,0,0)',  });
        fetch("findComparadorAnual?anio=" + $(".cmbAnio").val() + queryString)
          .then(res => {
        	  charAnual.hideLoading();
            if (!res.ok) throw new Error('Error HTTP ' + res.status);
            return res.json();
          })
          .then(data => {
        	  
        	  const data1 = data.series[0].data;
        	  const categories = data.categories;
        	  
        	  
        	  let firstIndex = data1.findIndex(v => v > 0);
        	  let lastIndex = data1.length - 1 - [...data1].reverse().findIndex(v => v > 0);

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
          		    top: 'top', // o 'top', 'left', etc.
        		    textStyle: {
         		        fontSize: isMobile ? 10 : 12
         		      }
          		  },
              tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                formatter: params => {
                  let html = params[0].axisValue + '<br/>';
                  params.forEach(p => {
                	  if ($(".cmbTipo").val() != 5) {  
                    	html += p.marker + " " + p.seriesName + " : $ " + p.value.toLocaleString("es-AR") + "<br>";
                	  } else {
                		  html += p.marker + " " + p.seriesName + " : " + p.value.toLocaleString("es-AR") + "%<br>";
                	  }
                  });
                  return html;
                }
              },
            
              legend: {
                top: 10
              },
              dataZoom: [
                { type: 'slider', show: true, xAxisIndex: 0, startValue: startValue, endValue: endValue},
                { type: 'inside', xAxisIndex: 0 }
              ],
              xAxis: {
                type: 'category',
                axisLabel: {
            	    rotate: 90, // gira 90 grados
            	    fontSize: isMobile ? 8 : 12
            	},
                data: data.categories,
                nameLocation: 'middle',
                nameGap: 30
              },
              yAxis: {
                type: 'value',
                name: (isMobile ? '' : 'millones de pesos'), // podés ocultar en mobile
                nameLocation: 'middle',
                nameGap: isMobile ? 0 : 100,
                axisLabel: {
                  fontSize: isMobile ? 9 : 12,
              	  formatter: val => {

              		  		if ($(".cmbTipo").val() != 5) {
	              		  		if (isMobile) {
	              		          if (val >= 1000000) return '$' + (parseFloat(val) / 1000000).toFixed(1) + 'M';
	              		          if (val >= 1000) return '$' + (parseFloat(val) / 1000).toFixed(1) + 'K';
	              		        }
	              		        return '$' + val.toLocaleString('es-AR');
              		  		} else {
              		  		 	return  val + "%";
              		  		}
              		}
                }
              },
              series: data.series,
               
              grid: {
            	  left: isMobile ? 60 : 140, // menos margen en mobile
            	  right: 20,
                  bottom: 120
              }
            };

            charAnual.setOption(option, true);
          })
          .catch(err => {
        	  charAnual.hideLoading();
        	  showErrorMessage(charAnual, "Hubo un problema cargando el gráfico.\nHaga click aquí para intentar recargarlo.", fillChartAnual);
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