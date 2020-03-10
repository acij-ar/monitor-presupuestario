const mockReadFileSync = jest.fn(() => '{"mocked": "json-data"}');
const mockWriteFileSync = jest.fn();
jest.mock('fs', () => ({
  readFileSync: mockReadFileSync,
  writeFileSync: mockWriteFileSync,
}));
const mockJoin = jest.fn((...args) => args.join('/'));
jest.mock('path', () => ({ join: mockJoin }));


describe('Texts service', () => {
  const TextsService = require('..');

  it('should initialize with the file content', () => {
    expect(TextsService.content).toEqual({ mocked: 'json-data' });
  });

  it('should write new content to file', () => {
    TextsService.saveNewContent({ new: 'json-data' });
    expect(TextsService.content).toEqual({ new: 'json-data' });
    expect(mockWriteFileSync).toHaveBeenCalledWith(expect.any(String), '{\n  "new": "json-data"\n}')
  });
});
