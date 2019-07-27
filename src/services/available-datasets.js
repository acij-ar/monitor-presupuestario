const path = require('path');

const dataFolderPath = path.join(__dirname, '..', '..', 'data');
const rawDataFolderPath = path.join(dataFolderPath, 'raw');
const finalFolderPath = path.join(dataFolderPath, 'cleaned');

module.exports = [
    {
        id: '1cTGxXnGG1nvVwW4BXhk7jrX1LeAHp3tb',
        filename: '2007.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2007.csv'),
        filePath: path.join(finalFolderPath, '2007.csv'),
    },
    {
        id: '15VvixVddZqvzUfKTEu-LCo2Ik0Io4k5Z',
        filename: '2008.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2008.csv'),
        filePath: path.join(finalFolderPath, '2008.csv'),
    },
    {
        id: '1JEgnFqf26DYo4n-t-cgAMIaqYWK_1Ijp',
        filename: '2009.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2009.csv'),
        filePath: path.join(finalFolderPath, '2009.csv'),
    },
    {
        id: '1dBHVYJWdkP_Gk0Eu_KT7-g_dMmCDtJ29',
        filename: '2010.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2010.csv'),
        filePath: path.join(finalFolderPath, '2010.csv'),
    },
    {
        id: '1JRgbOXi1PI8JE8P1ejEotzuAJHlEPRkO',
        filename: '2011.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2011.csv'),
        filePath: path.join(finalFolderPath, '2011.csv'),
    },
    {
        id: '1efU5B0pwj09_VBYKrjIS3hvVs8oeo9hV',
        filename: '2012.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2012.csv'),
        filePath: path.join(finalFolderPath, '2012.csv'),
    },
    {
        id: '1DePIOGl2zTyPZfhZD_Kc-FzdmDl1VBvx',
        filename: '2013.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2013.csv'),
        filePath: path.join(finalFolderPath, '2013.csv'),
    },
    {
        id: '1REctQhQff-pDxVYAWTC1BRcy9tJlG7p1',
        filename: '2014.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2014.csv'),
        filePath: path.join(finalFolderPath, '2014.csv'),
    },
    {
        id: '10yqGo_IqD0d7B13BSCTVzUI5TmDv0pS9',
        filename: '2015.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2015.csv'),
        filePath: path.join(finalFolderPath, '2015.csv'),
    },
    {
        id: '1Ai6a8R3BVS3Q1NLnw8hfDftQ0cI2_cqW',
        filename: '2016.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2016.csv'),
        filePath: path.join(finalFolderPath, '2016.csv'),
    },
    {
        id: '1Ex-4L78EtcPKU0kNnp1om5juyc8c7eYo',
        filename: '2017.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2017.csv'),
        filePath: path.join(finalFolderPath, '2017.csv'),
    },
    {
        id: '1DYr5WYp-7_dd8OD4kgo0y0Gqp5jHsp5n',
        filename: '2018.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2018.csv'),
        filePath: path.join(finalFolderPath, '2018.csv'),
    },
    {
        id: '1zv_DaTi17EZomXv6DalNKlnEvzCjRDap',
        filename: '2019.csv',
        isYearDataset: true,
        rawPath: path.join(rawDataFolderPath, '2019.csv'),
        filePath: path.join(finalFolderPath, '2019.csv'),
    },
    {
        id: '1XvWj4sCcL5vNnEJoyrst8DCwzHK4dHtM',
        filename: 'inflacion.csv',
        isYearDataset: false,
        rawPath: path.join(rawDataFolderPath, 'inflacion.csv'),
        filePath: path.join(finalFolderPath, 'inflacion.csv'),
    },
];
