const mockSaveNewContent = jest.fn();
jest.mock('../../../../services/texts', () => ({ saveNewContent: mockSaveNewContent }));
const updateTextsController = require('../update-texts');

describe('Update-texts api controller', () => {
  it('should call the texts service and return a success-json when completed', () => {
    const mockReq = { body: { texts: 'some-texts' } };
    const mockRes = { json: jest.fn() };
    updateTextsController(mockReq, mockRes);
    expect(mockSaveNewContent).toHaveBeenCalledWith('some-texts');
    expect(mockRes.json).toHaveBeenCalledWith({ success: true });
  });
});