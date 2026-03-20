<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="datatable" uri="WEB-INF/tld/datatable.tld"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

 <style>
    /* El div define el tamaño del gráfico */
    #chart-anual-ejecutor {
      width: 100%;         /* Ocupa todo el ancho del contenedor padre */
      max-width: 1300px;
      margin: auto;
   	  height:520px;
   	  background-color: transparent;
   	  font-family:  'Cascadia Mono', monospace !important;
    }
    
    @media (min-width: 768px) {
	  #chart-anual-ejecutor {
	    height: 470px; /* Altura para pantallas md o mayores */
	  }
	}
  </style>
  
  
<div id="chart-anual-ejecutor"></div>

<script>



var chartDomAnualEjecutor;
var charAnualEjecutor;

	$(document).ready(function() {
		chartDomAnualEjecutor = document.getElementById('chart-anual-ejecutor');
		charAnualEjecutor = echarts.init(chartDomAnualEjecutor);
		
		 window.addEventListener('resize', () => {
			 if (charAnualEjecutor){ 
				 charAnualEjecutor.resize();
			 }
			 
		   });
		 
		 $('#tabsGraficos a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		      const target =e.target.id
		      if (target === 'ejecucion-tab') {
		        setTimeout(() => {
		        	charAnualEjecutor.resize();
		        }, 10);
		      }
		    });
	
	});
	    
    function fillChartEjecucionMensual() {
    	let queryString = "&type="+ $(".cmbTipo").val();
    	queryString += "&ajuste=" + $(".cmbAjuste").val();
    	queryString += "&tipoFiltro=" + $(".cmbTipoFiltro").val();
    	queryString += "&idFinalidad=" + $(".cmbFinalidad").val();
    	queryString += "&idFuncion=" + $(".cmbFuncion").val();
    	queryString += "&idJurisdiccion=" + $(".cmbJurisdiccion").val();
    	queryString += "&idEntidad=" + $(".cmbEntidad").val();
    	queryString += "&idPrograma=" + $(".cmbPrograma").val();
    	queryString += "&idActividad=" + $(".cmbActividad").val();

    	
    	if (!charAnualEjecutor) {
    		charAnualEjecutor = echarts.init(chartDomAnualEjecutor);
    	}
    	

		 const mesesString = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
			const isMobile = window.innerWidth < 768; // breakpoint "mobile"
    	 // Cargar datos del backend
    	charAnualEjecutor.showLoading({ text: 'Cargando...',   maskColor: 'rgba(0,0,0,0)',  });
        fetch("getMesAMesBubbleChart?anio=" + $(".cmbAnio").val() + queryString)
          .then(res => {
        	  charAnualEjecutor.hideLoading();
            if (!res.ok) throw new Error('Error HTTP ' + res.status);
            return res.json();
          })
          .then(data => {
        	  const { anios, meses, datos } = data;

        	  const valores = datos.map(d => d[2]).filter(v => v > 0);
              const minVal = Math.min(...valores);
              const maxVal = Math.max(...valores);


          		const minSize = 1;
				const maxSize = 10;
				
				const minSizeBubble=5;
				
				function sizeScale(valor) {
				  if (valor <= 0) return 0;
				  return (minSize + (maxSize - minSize) * ( (valor - minVal) / (maxVal - minVal) )) * minSizeBubble;
				}
				
				
				const unicos = [...new Set(datos.filter(v => v[2] > 0).map(d => d[0]))];
				const firstIndex = Math.min(...unicos);
				const lastIndex = Math.max(...unicos);

				  var startValue = anios[firstIndex];
	        	  var endValue = anios[lastIndex];
	        	  
	        	  if (parseInt(endValue) -10 > parseInt(startValue)) {
	        		  startValue ="" + (parseInt(endValue) -10); 
	        	  }
	        	  
              const option = {
            		  color: ['#0d3a63'],
           		  textStyle: {
           		        fontFamily:'Cascadia Mono, monospace ',
           		        fontSize: isMobile ? 8  : 12  // fuente más chica en mobile
           		    },
               
                tooltip: {
                  formatter: function (param) {
                    return "Año : " + anios[param.value[0]] + "<br>Mes : " + meses[param.value[1]]+ "<br>Monto : $ " + param.value[2].toLocaleString();
                  }
                },
                grid: { 
                	left: isMobile ? 35 : 100, 
                	top: 20, 
                	right: isMobile ? 5 :50, 
                	bottom: 110 
                	
               },
              
	              legend: {
	                top: 10
	              },
	              dataZoom: [
	                { type: 'slider', show: true, xAxisIndex: 0,  startValue: startValue, endValue: endValue},
	                { type: 'inside', xAxisIndex: 0 }
	              ],
                xAxis: {
                  type: 'category',
                  data: anios,
                  axisLabel: {
                	    rotate: 90, // gira 90 grados
                	    fontSize: isMobile ? 8 : 12
                	}
                },
                yAxis: {
                  type: 'category',
                  data: mesesString,
                  name: isMobile ? '' : 'Mes',
                  nameLocation: 'middle',
                  nameGap: isMobile ? 0 : 100,
                  scale: true,
                  axisLabel: {
                      fontSize: isMobile ? 8 : 12,
                  	  formatter: val => {
                 		// en mobile: abreviar con K / M
                  		        if (isMobile) {
                  		          	return val.substring(0, 3);
                  		        }
                  		        return val;
                  		      }
                    }
                },
                series: [{
                  type: 'scatter',
                  symbolSize: function (val) {
                	  return sizeScale(val[2]);
                  },
                  data: datos,
                  emphasis: { focus: 'series' },
                  itemStyle: {
                	color: '#0d3a63',
             
                  }
                }]
              };
              charAnualEjecutor.hideLoading();
              charAnualEjecutor.setOption(option);
          })
          .catch(err => {
        	  charAnualEjecutor.hideLoading();
        	  showErrorMessage(charAnualEjecutor, "Hubo un problema cargando el gráfico.\nHaga click aquí para intentar recargarlo.", fillChartEjecucionMensual);
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