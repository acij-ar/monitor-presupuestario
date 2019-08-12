const db = require('..');
const _ = require('lodash');
const availableYears = require('../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../app/pages/monitor/helpers/available-budgets');

module.exports = async ({selectedYears, selectedBudgets, selectedEntities}) => {
    const years = _.sortBy((selectedYears || availableYears).map(year => year.label));
    const budgets = (selectedBudgets || availableBudgets).map(budget => budget.value);
    const entities = selectedEntities || [{table: 'años', name: 'Presupuesto total'}];

    const series = [];
    const seriesPromises = entities.map(({table, name}) => (
        db.sqlite.all(`SELECT year, ${budgets.join(', ')} FROM ${table} WHERE name = ? ORDER BY year ASC`, name)
            .then((results) => {
                budgets.map(budget => {
                    const serie = {
                        name: `${name} - ${budget}`,
                        data: [],
                    };
                    const budgetByYear = {};
                    results.map(result => budgetByYear[result.year] = result[budget]);
                    years.map(year => serie.data.push(budgetByYear[year] || 0));
                    series.push(serie);
                })
            })
    ));
    await Promise.all(seriesPromises);

    return {
        chart: {type: 'column'},
        title: {text: 'Presupuesto'},
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Presupuesto (millones de pesos)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series,
    }
};
