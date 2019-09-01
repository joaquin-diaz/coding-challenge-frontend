import * as React from 'react';

import Close from './Close';
import { mount } from 'enzyme';

describe('<Close />', () => {
  it('should render', () => {
    const wrapper = mount(<Close />);
    expect(wrapper).toMatchSnapshot();
  });
});
