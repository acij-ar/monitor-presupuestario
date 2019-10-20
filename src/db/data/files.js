const { join } = require('path');

const filePath = filename => join(__dirname, 'datasets', filename);

module.exports = [
  { path: filePath('2007.csv'), id: '1cTGxXnGG1nvVwW4BXhk7jrX1LeAHp3tb' },
  { path: filePath('2008.csv'), id: '15VvixVddZqvzUfKTEu-LCo2Ik0Io4k5Z' },
  { path: filePath('2009.csv'), id: '1JEgnFqf26DYo4n-t-cgAMIaqYWK_1Ijp' },
  { path: filePath('2010.csv'), id: '1dBHVYJWdkP_Gk0Eu_KT7-g_dMmCDtJ29' },
  { path: filePath('2011.csv'), id: '1JRgbOXi1PI8JE8P1ejEotzuAJHlEPRkO' },
  { path: filePath('2012.csv'), id: '1efU5B0pwj09_VBYKrjIS3hvVs8oeo9hV' },
  { path: filePath('2013.csv'), id: '1DePIOGl2zTyPZfhZD_Kc-FzdmDl1VBvx' },
  { path: filePath('2014.csv'), id: '1REctQhQff-pDxVYAWTC1BRcy9tJlG7p1' },
  { path: filePath('2015.csv'), id: '10yqGo_IqD0d7B13BSCTVzUI5TmDv0pS9' },
  { path: filePath('2016.csv'), id: '1Ai6a8R3BVS3Q1NLnw8hfDftQ0cI2_cqW' },
  { path: filePath('2017.csv'), id: '1Ex-4L78EtcPKU0kNnp1om5juyc8c7eYo' },
  { path: filePath('2018.csv'), id: '1DYr5WYp-7_dd8OD4kgo0y0Gqp5jHsp5n' },
  { path: filePath('2019.csv'), id: '1zv_DaTi17EZomXv6DalNKlnEvzCjRDap' },
  { path: filePath('inflacion.csv'), id: '1XvWj4sCcL5vNnEJoyrst8DCwzHK4dHtM' },
  { path: filePath('presupuesto-original-2016.csv'), id: '1vISO7WCVQnHGxNlKXe-QWaWa_6t12CjV' },
  { path: filePath('presupuesto-original-2017.csv'), id: '1gNFuCwq97L4svplUWAT06JyBe2AVcCTg' },
  { path: filePath('presupuesto-original-2018.csv'), id: '1NsyiqXXxbZed6s_eKmQof_W-9XcTwrn1' },
  { path: filePath('presupuesto-original-2019.csv'), id: '1_5fJeKOXZYk-na7PR2j30oJDIOOt8rSM' }
];
