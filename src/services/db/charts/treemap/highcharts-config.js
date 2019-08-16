module.exports = ({ data, name }) => ({
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
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
    title: {text: null}
});