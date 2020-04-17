const React = require('react');
const mockPost = jest.fn();
const mockGet = jest.fn();
jest.mock('axios', () => ({ get: mockGet, post: mockPost }));
const { shallow } = require('enzyme');
jest.mock('../dataset-table', () => () => <div id="dataset-table" />);
jest.useFakeTimers();

const DatasetForm = require('../datasets-form');

describe('Dataset form', () => {
  beforeEach(() => {
    mockPost.mockClear();
    mockGet.mockClear();
  });

  it('should match snapshot when loading', async () => {
    mockGet.mockReturnValueOnce(Promise.reject());
    const wrapper = await shallow(<DatasetForm />);
    expect(wrapper).toMatchSnapshot();
    expect(mockGet).toHaveBeenCalledWith('/api/admin/dataset_job_status');
  });

  it('should match snapshot when got datasets', async () => {
    mockGet.mockReturnValueOnce(Promise.resolve({ data: { result: [{}] } }));
    const wrapper = await shallow(<DatasetForm />);
    expect(wrapper).toMatchSnapshot();
    expect(mockGet).toHaveBeenCalledWith('/api/admin/dataset_job_status');
  });

  it('should show negative feedback when fails to trigger the dataset update', async () => {
    mockGet.mockReturnValueOnce(Promise.resolve({ data: { result: [{}] } }));
    mockPost.mockReturnValueOnce(Promise.reject());
    const wrapper = await shallow(<DatasetForm />);
    await wrapper.find('button').simulate('click');
    expect(mockPost).toHaveBeenCalledWith('/api/admin/update_datasets');
    expect(wrapper).toMatchSnapshot();
  });

  it('should show possitive feedback after triggering the dataset update', async () => {
    mockGet.mockReturnValueOnce(Promise.resolve({ data: { result: [{}] } }))
      .mockReturnValueOnce(Promise.reject());
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = await shallow(<DatasetForm />);
    await wrapper.find('button').simulate('click');
    expect(mockPost).toHaveBeenCalledWith('/api/admin/update_datasets');
    expect(mockGet).toHaveBeenCalledWith('/api/admin/dataset_job_status');
    expect(wrapper).toMatchSnapshot();
  });

  it('should retry when the process still is running', async () => {
    mockGet.mockReturnValueOnce(Promise.resolve({ data: { result: [{}] } }))
      .mockReturnValueOnce(Promise.resolve({}));
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = await shallow(<DatasetForm />);
    await wrapper.find('button').simulate('click');
    expect(mockPost).toHaveBeenCalledWith('/api/admin/update_datasets');
    expect(mockGet).toHaveBeenCalledWith('/api/admin/dataset_job_status');
    expect(wrapper).toMatchSnapshot();
  });

  it('should possitive feedback when the process finished', async () => {
    mockGet.mockReturnValueOnce(Promise.resolve({ data: { result: [{}], lastExecution: { start: '20 min ago', end: '10 min ago', error: 'some-error' } } }))
      .mockReturnValueOnce(Promise.resolve({ data: { result: {} } }));
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = await shallow(<DatasetForm />);
    await wrapper.find('button').simulate('click');
    expect(mockPost).toHaveBeenCalledWith('/api/admin/update_datasets');
    expect(mockGet).toHaveBeenCalledWith('/api/admin/dataset_job_status');
    expect(wrapper).toMatchSnapshot();
  });
});
