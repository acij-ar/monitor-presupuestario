

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');

var sunburst_chart;

//inicializar
function init_chart(chart_data) {

  sunburst_chart = Highcharts.chart('container', {
    chart: {
      height: '100%'
    },

    title: {
      text: 'Explorar Presupuesto'
    },
    subtitle : {
      text :'Crédito Presupuestado'
    },
    series: [{
      type: "sunburst",
      data: chart_data,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.label}',
        rotationMode: 'circular'
      },
      levels: [{
        level: 1,
        color: "#97addd"
      },
      {
        level:2,
        color : "#b8cdca",

      },
      {
        level:3,
        color : "#e46e6e",

      }]

    }],
    tooltip: {
      headerFormat: "",
      pointFormat: '{point.name}: <b>{point.value}M</b>'
    }
  });

}

//document ready
$(document).ready(function(){

  //cargar data inicial
  $.getJSON('/api/data/test.json', function(response){
    init_chart(response.data);
  });

});