import * as React from 'react';

import Button from './Button';
import { mount } from 'enzyme';

describe('<Button />', () => {
  it('should render', () => {
    const wrapper = mount(<Button type="submit">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
