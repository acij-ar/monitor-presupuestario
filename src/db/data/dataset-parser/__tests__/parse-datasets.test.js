const mockParseDatasets = jest.fn();
jest.mock('..', () => mockParseDatasets);


describe('Dataset parse script', () => {
  it('should call and execute the dataset parse methods', () => {
    require('../parse-datasets');
    expect(mockParseDatasets).toHaveBeenCalledTimes(1);
  });
});
