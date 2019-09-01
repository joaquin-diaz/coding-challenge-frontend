import * as React from 'react';

import Title from './Title';
import { mount } from 'enzyme';

describe('<Title />', () => {
  it('should render', () => {
    const wrapper = mount(<Title>Test</Title>);
    expect(wrapper).toMatchSnapshot();
  });
});
