import * as React from 'react';

import LoadingScreen from './LoadingScreen';
import { mount } from 'enzyme';

describe('<LoadingScreen />', () => {
  it('should render', () => {
    const wrapper = mount(<LoadingScreen isLoading query="Something" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Loading locations for "Something"');
  });

  it('should not render', () => {
    const wrapper = mount(<LoadingScreen isLoading={false} query="Something" />);
    expect(wrapper.text()).toBe('');
  });

  it('should render just loading', () => {
    const wrapper = mount(<LoadingScreen isLoading query="" />);
    expect(wrapper.text()).toBe('Loading locations');
  });
});
