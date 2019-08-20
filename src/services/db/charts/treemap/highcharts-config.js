module.exports = ({ data, name, color }) => ({
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        color,
        name,
        data,
    }],
    tooltip: {
        headerFormat: '<span style="font-size:12px">{series.name}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{point.name}: </td>' +
            '<td style="padding:0 0 0 10px; text-align: right"><b>$ {point.value:,.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    title: {text: null},
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