const { join } = require('path');

const filePath = filename => join(__dirname, 'datasets', filename);

const files = [
  { filename: '2007.csv', id: '1cTGxXnGG1nvVwW4BXhk7jrX1LeAHp3tb' },
  { filename: '2008.csv', id: '15VvixVddZqvzUfKTEu-LCo2Ik0Io4k5Z' },
  { filename: '2009.csv', id: '1JEgnFqf26DYo4n-t-cgAMIaqYWK_1Ijp' },
  { filename: '2010.csv', id: '1dBHVYJWdkP_Gk0Eu_KT7-g_dMmCDtJ29' },
  { filename: '2011.csv', id: '1JRgbOXi1PI8JE8P1ejEotzuAJHlEPRkO' },
  { filename: '2012.csv', id: '1efU5B0pwj09_VBYKrjIS3hvVs8oeo9hV' },
  { filename: '2013.csv', id: '1DePIOGl2zTyPZfhZD_Kc-FzdmDl1VBvx' },
  { filename: '2014.csv', id: '1REctQhQff-pDxVYAWTC1BRcy9tJlG7p1' },
  { filename: '2015.csv', id: '10yqGo_IqD0d7B13BSCTVzUI5TmDv0pS9' },
  { filename: '2016.csv', id: '1Ai6a8R3BVS3Q1NLnw8hfDftQ0cI2_cqW' },
  { filename: '2017.csv', id: '1Ex-4L78EtcPKU0kNnp1om5juyc8c7eYo' },
  { filename: '2018.csv', id: '1DYr5WYp-7_dd8OD4kgo0y0Gqp5jHsp5n' },
  { filename: '2019.csv', id: '1zv_DaTi17EZomXv6DalNKlnEvzCjRDap' },
  { filename: 'inflacion.csv', id: '1XvWj4sCcL5vNnEJoyrst8DCwzHK4dHtM' },
  { filename: 'presupuesto-original-2016.csv', id: '1vISO7WCVQnHGxNlKXe-QWaWa_6t12CjV' },
  { filename: 'presupuesto-original-2017.csv', id: '1gNFuCwq97L4svplUWAT06JyBe2AVcCTg' },
  { filename: 'presupuesto-original-2018.csv', id: '1NsyiqXXxbZed6s_eKmQof_W-9XcTwrn1' },
  { filename: 'presupuesto-original-2019.csv', id: '1_5fJeKOXZYk-na7PR2j30oJDIOOt8rSM' }
];

module.exports = files.map(file => {
  file.path = filePath(file.filename);
  return file;
});
