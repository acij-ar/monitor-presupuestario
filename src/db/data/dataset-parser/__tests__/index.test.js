const mockDatasetToJSON = jest.fn();
jest.mock('../dataset-to-json', () => mockDatasetToJSON);
jest.mock('../../files', () => [
  { id: 1, year: 2019 },
  { id: 2, year: 2019 },
  { id: 3, year: 2020 },
  { id: 4, inflation: true, path: 'path-to-inflation.csv' },
]);
const mockReadCSV = jest.fn(({onData}) => {
  onData({ ejercicio_presupuestario: '2019', tasa_ajuste_inflacion: '1.2' });
  onData({ ejercicio_presupuestario: '2020', tasa_ajuste_inflacion: '1' });
});
jest.mock('../../../../utils/read-csv', () => mockReadCSV);

const datasetParser = require('..');

describe('Dataset parser', () => {
  it('should iterate through each file and call datasetToJSON on them', async (done) => {
    await datasetParser();
    expect(mockReadCSV).toHaveBeenCalledTimes(1);
    expect(mockReadCSV.mock.calls[0][0].path).toBe('path-to-inflation.csv');
    expect(mockDatasetToJSON).toHaveBeenCalledTimes(2);
    expect(mockDatasetToJSON.mock.calls[0][0]).toEqual({ files: [{id: 1, year: 2019}, { id: 2, year: 2019 }], inflation: 1.2 });
    expect(mockDatasetToJSON.mock.calls[1][0]).toEqual({ files: [{id: 3, year: 2020}], inflation: 1 });
    done();
  });
});