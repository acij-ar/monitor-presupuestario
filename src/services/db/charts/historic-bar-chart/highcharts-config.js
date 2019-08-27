module.exports = ({ years, series }) => ({
    chart: { type: 'column', height: '400px' },
    title: {text: null},
    xAxis: {
        categories: years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Presupuesto en pesos'
        },
        labels: {
            format: '${value:,.0f}'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0 0 0 10px; text-align: right"><b>$ {point.y:,.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            animation: false,
        },
    },
    series,
    credits: {
        enabled: false
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    'printChart',
                    'separator',
                    'downloadPNG',
                    'downloadJPEG',
                    'downloadPDF',
                    'downloadSVG',
                    'separator',
                    'downloadCSV',
                    'downloadXLS',
                ],
            },
        },
    },
});