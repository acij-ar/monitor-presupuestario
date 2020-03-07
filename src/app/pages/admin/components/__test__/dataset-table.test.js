const React = require('react');
const {shallow} = require('enzyme');

const DatasetTable = require('../dataset-table');

describe('Dataset table', () => {
  it('should match snapshot', () => {
    const props = {
      datasets: [
        {
          filename: '2007.csv',
          upToDate: true,
          lastModified: '2020-03-02T19:16:34.003Z',
          lines: 98162,
        },
        {
          filename: '2008.csv',
          upToDate: false,
          lastModified: null,
          lines: null,
        },
      ]
    };

    const wrapper = shallow(<DatasetTable {...props} />);
    expect(wrapper).toMatchSnapshot();

  });
});