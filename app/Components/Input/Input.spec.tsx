import * as React from 'react';

import Input from './Input';
import { mount } from 'enzyme';

const noop = () => {};

describe('<Input />', () => {
  it('should render', () => {
    const wrapper = mount(<Input onChange={noop} placeholder="Test" value="123" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return the value on change', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(<Input onChange={mockOnChange} placeholder="Test" value="123" />);

    wrapper.find('input').simulate('change', { target: { value: 'asd123' } });

    expect(mockOnChange).toHaveBeenCalledWith('asd123');
  });
});
