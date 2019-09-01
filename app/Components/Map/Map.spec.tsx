import * as React from 'react';

import Map from './Map';
import { shallow } from 'enzyme';

describe('<Map />', () => {
  it('should render', () => {
    const wrapper = shallow(<Map center={{ lat: 123, lng: 456 }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
