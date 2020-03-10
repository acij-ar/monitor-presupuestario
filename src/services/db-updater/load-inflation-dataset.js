const {datasets} = require('../../config');
const readCSV = require('../../utils/read-csv');

const {path} = datasets.files.find(({filename}) => filename === 'inflacion.csv');

module.exports = async () => {
  const inflation = {};
  await readCSV({
    path,
    onData: (row) => {
      inflation[row.ejercicio_presupuestario] = parseFloat(row.tasa_ajuste_inflacion);
    },
  });
  return inflation
};
