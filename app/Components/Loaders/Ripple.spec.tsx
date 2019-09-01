import * as React from 'react';

import Ripple from './Ripple';
import { mount } from 'enzyme';

describe('<Ripple />', () => {
  it('should render', () => {
    const wrapper = mount(<Ripple color="black" />);
    expect(wrapper).toMatchSnapshot();
  });
});
