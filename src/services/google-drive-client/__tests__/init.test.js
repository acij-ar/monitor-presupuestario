const mockInit = jest.fn();

jest.mock('..', () => (class MockClien {
  init() {
    mockInit();
  }
}));

describe('GoogleDriveClient init.js', () => {
  it('should init the client', () => {
    require('../init');
    expect(mockInit).toHaveBeenCalledTimes(1);
  });
});