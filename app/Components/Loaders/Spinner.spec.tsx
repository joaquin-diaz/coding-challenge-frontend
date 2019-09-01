import * as React from 'react';

import Spinner from './Spinner';
import { mount } from 'enzyme';

describe('<Spinner />', () => {
  it('should render', () => {
    const wrapper = mount(<Spinner color="black" />);
    expect(wrapper).toMatchSnapshot();
  });
});
