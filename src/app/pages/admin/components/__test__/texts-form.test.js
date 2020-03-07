const React = require('react');
const mockPost = jest.fn();
jest.mock('axios', () => ({ post: mockPost }));
const { shallow } = require('enzyme');

const TextsForm = require('../texts-form');

describe('Texts form', () => {
  const props = {
    texts: {
      "monitor": {
        "title": "Titulo Monitor",
        "description": "Descripción Monitor"
      },
      "about": {
        "rights": {
          "title": "Titulo derechos",
          "content": "Contenido derechos"
        },
        "methodology": {
          "title": "Titulo metodologia",
          "content": "Contenido metodologia"
        },
        "information": {
          "title": "Titulo información",
          "content": "Contenido informacion"
        },
        "dictionary": {
          "title": "Titulo Glosario",
          "content":"Contenido glosario"
        }
      }
    }
  };

  beforeEach(() => {
    mockPost.mockClear();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<TextsForm {...props} />);
    expect(wrapper).toMatchSnapshot();

  });

  it('should post new text changes', async () => {
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = shallow(<TextsForm {...props} />);
    wrapper.find('#monitor-title').simulate('change', { target: { value: 'new-monitor-title' } });
    wrapper.find('#monitor-description').simulate('change', { target: { value: 'new-monitor-description' } });
    wrapper.find('#rights-title').simulate('change', { target: { value: 'new-rights-title' } });
    wrapper.find('#rights-content').simulate('change', { target: { value: 'new-rights-description' } });
    wrapper.find('#methodology-title').simulate('change', { target: { value: 'new-methodology-title' } });
    wrapper.find('#methodology-content').simulate('change', { target: { value: 'new-methodology-description' } });
    wrapper.find('#information-title').simulate('change', { target: { value: 'new-information-title' } });
    wrapper.find('#information-content').simulate('change', { target: { value: 'new-information-description' } });
    wrapper.find('#dictionary-title').simulate('change', { target: { value: 'new-dictionary-title' } });
    wrapper.find('#dictionary-content').simulate('change', { target: { value: 'new-dictionary-description' } });

    await wrapper.find('button').simulate('click');
    const expectedTexts = {
      monitor: {
        title: 'new-monitor-title',
        description: 'new-monitor-description',
      },
      about: {
        rights: {
          title: 'new-rights-title',
          content: 'new-rights-description',
        },
        methodology: {
          title: 'new-methodology-title',
          content: 'new-methodology-description',
        },
        information: {
          title: 'new-information-title',
          content: 'new-information-description',
        },
        dictionary: {
          title: 'new-dictionary-title',
          content: 'new-dictionary-description',
        },
      },
    };
    expect(mockPost).toHaveBeenCalledWith('/api/admin/texts', { texts: expectedTexts });
  });

  it('should post new text changes and show possitive feedback when success', async () => {
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = shallow(<TextsForm {...props} />);
    await wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should post new text changes and show negative feedback when fails', async () => {
    mockPost.mockReturnValueOnce(Promise.reject());
    const wrapper = shallow(<TextsForm {...props} />);
    await wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});