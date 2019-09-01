import * as React from 'react';

import MarkerContent from './MarkerContent';
import { mount } from 'enzyme';

describe('<MarkerContent />', () => {
  it('should render', () => {
    const wrapper = mount(<MarkerContent title="Something" address="Testy" hidden={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render hidden', () => {
    const wrapper = mount(<MarkerContent title="Something" address="Testy" hidden />);
    expect(wrapper).toMatchSnapshot();
  });
});
