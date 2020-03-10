const mockInitialize = jest.fn();
jest.mock('react-ga', () => ({ initialize: mockInitialize }));

describe('Analytics module', () => {
  it('should initialize the analytics dependency with the project id', () => {
    const initializedAnalytics = require('..');
    expect(mockInitialize).toHaveBeenCalledWith('UA-149324350-1');
    expect(mockInitialize).toHaveBeenCalledTimes(1);
    expect(initializedAnalytics).toEqual({ initialize: mockInitialize });
  });
});
