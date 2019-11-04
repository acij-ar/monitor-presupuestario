const { join } = require('path');

const filePath = filename => join(__dirname, 'datasets', filename);

const files = [
  { 
    filename: '2007.csv',
    id: '1cTGxXnGG1nvVwW4BXhk7jrX1LeAHp3tb',
    year: 2007,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2008.csv',
    id: '15VvixVddZqvzUfKTEu-LCo2Ik0Io4k5Z',
    year: 2008,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2009.csv',
    id: '1JEgnFqf26DYo4n-t-cgAMIaqYWK_1Ijp',
    year: 2009,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2010.csv',
    id: '1dBHVYJWdkP_Gk0Eu_KT7-g_dMmCDtJ29',
    year: 2010,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2011.csv',
    id: '1JRgbOXi1PI8JE8P1ejEotzuAJHlEPRkO',
    year: 2011,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2012.csv',
    id: '1efU5B0pwj09_VBYKrjIS3hvVs8oeo9hV',
    year: 2012,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2013.csv',
    id: '1DePIOGl2zTyPZfhZD_Kc-FzdmDl1VBvx',
    year: 2013,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2014.csv',
    id: '1REctQhQff-pDxVYAWTC1BRcy9tJlG7p1',
    year: 2014,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2015.csv',
    id: '10yqGo_IqD0d7B13BSCTVzUI5TmDv0pS9',
    year: 2015,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2016.csv',
    id: '1Ai6a8R3BVS3Q1NLnw8hfDftQ0cI2_cqW',
    year: 2016,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2017.csv',
    id: '1Ex-4L78EtcPKU0kNnp1om5juyc8c7eYo',
    year: 2017,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2018.csv',
    id: '1DYr5WYp-7_dd8OD4kgo0y0Gqp5jHsp5n',
    year: 2018,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  { 
    filename: '2019.csv',
    id: '1zv_DaTi17EZomXv6DalNKlnEvzCjRDap',
    year: 2019,
    baseDataset: true,
    hasOriginalBudget: false,
  },
  {
    filename: 'inflacion.csv',
    id: '1XvWj4sCcL5vNnEJoyrst8DCwzHK4dHtM',
    year: null,
    baseDataset: false,
    hasOriginalBudget: false,
  },
  { 
    filename: 'presupuesto-original-2016.csv',
    id: '1vISO7WCVQnHGxNlKXe-QWaWa_6t12CjV',
    year: 2016,
    baseDataset: false,
    hasOriginalBudget: true,
  },
  { 
    filename: 'presupuesto-original-2017.csv',
    id: '1gNFuCwq97L4svplUWAT06JyBe2AVcCTg',
    year: 2017,
    baseDataset: false,
    hasOriginalBudget: true,
  },
  { 
    filename: 'presupuesto-original-2018.csv',
    id: '1NsyiqXXxbZed6s_eKmQof_W-9XcTwrn1',
    year: 2018,
    baseDataset: false,
    hasOriginalBudget: true,
  },
  { 
    filename: 'presupuesto-original-2019.csv',
    id: '1_5fJeKOXZYk-na7PR2j30oJDIOOt8rSM',
    year: 2019,
    baseDataset: false,
    hasOriginalBudget: true,
  }
];

module.exports = files.map(file => {
  file.path = filePath(file.filename);
  return file;
});