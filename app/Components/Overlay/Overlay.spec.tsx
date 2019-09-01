import * as React from 'react';

import Overlay from './Overlay';
import { mount } from 'enzyme';

describe('<Overlay />', () => {
  it('should render', () => {
    const wrapper = mount(<Overlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
