import * as React from 'react';

import Card from './Card';
import { mount } from 'enzyme';

describe('<Card />', () => {
  it('should render', () => {
    const wrapper = mount(<Card>Test</Card>);
    expect(wrapper).toMatchSnapshot();
  });
});
