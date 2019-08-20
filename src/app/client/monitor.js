const ReactHighcharts = require('react-highcharts');
require('highcharts/modules/treemap')(ReactHighcharts.Highcharts);
require('highcharts/modules/exporting')(ReactHighcharts.Highcharts);
require('highcharts/modules/export-data')(ReactHighcharts.Highcharts);
require('highcharts/modules/pattern-fill')(ReactHighcharts.Highcharts);
ReactHighcharts.Highcharts.setOptions({
    lang: {
        loading: 'Cargando...',
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        exportButtonTitle: "Exportar",
        printButtonTitle: "Importar",
        rangeSelectorFrom: "Desde",
        rangeSelectorTo: "Hasta",
        rangeSelectorZoom: "Período",
        downloadPNG: 'Descargar imagen (PNG)',
        downloadJPEG: 'Descargar imagen (JPEG)',
        downloadPDF: 'Descargar imagen (PDF)',
        downloadSVG: 'Descargar imagen (SVG)',
        downloadCSV: 'Descargar datos (CSV)',
        downloadXLS: 'Descargar datos (XLS)',
        printChart: 'Imprimir',
        resetZoom: 'Reiniciar zoom',
        resetZoomTitle: 'Reiniciar zoom',
        thousandsSep: ".",
        decimalPoint: ',',
    }
});

const React = require('react');
const ReactDOM = require('react-dom');
const Monitor = require('../pages/monitor/view');

ReactDOM.hydrate(
    <Monitor {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
