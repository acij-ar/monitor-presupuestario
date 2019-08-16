const ReactHighcharts = require('react-highcharts');
const Treemap = require('highcharts/modules/treemap');
const Exporting = require('highcharts/modules/exporting');
const ExportData = require('highcharts/modules/export-data');
Treemap(ReactHighcharts.Highcharts);
Exporting(ReactHighcharts.Highcharts);
ExportData(ReactHighcharts.Highcharts);
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
        thousandsSep: ",",
        decimalPoint: '.'
    }
});

const React = require('react');
const ReactDOM = require('react-dom');
const Monitor = require('../pages/monitor/view');

ReactDOM.hydrate(
    <Monitor {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
