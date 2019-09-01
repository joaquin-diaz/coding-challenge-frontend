import * as React from 'react';

import Marker from './Marker';
import { mount } from 'enzyme';
import { fakeFilm } from '../../utils/test.fixtures';
import MarkerContent from './MarkerContent';

const noop = () => {};

describe('<Marker />', () => {
  it('should render', () => {
    const wrapper = mount(<Marker film={fakeFilm} lat={123} lng={456} onClick={noop} />);
    const markerContent = wrapper.find(MarkerContent);

    expect(wrapper).toMatchSnapshot();
    expect(markerContent.props()).toEqual({
      address: 'Epic Roasthouse (399 Embarcadero)',
      hidden: true,
      title: '180',
    });
  });

  it('should trigger hover', () => {
    const wrapper = mount(<Marker film={fakeFilm} lat={123} lng={456} onClick={noop} />);
    const marker = wrapper.find('div').at(1);

    expect(marker.prop('onMouseEnter')).toBeDefined();
    expect(marker.prop('onMouseLeave')).toBeDefined();
    marker.simulate('mouseEnter');

    const markerContent = wrapper.find(MarkerContent);
    expect(markerContent.length).toEqual(1);
    expect(markerContent.prop('hidden')).toEqual(false);
  });

  it('should trigger click', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<Marker film={fakeFilm} lat={123} lng={456} onClick={onClickMock} />);
    wrapper.simulate('click');

    expect(onClickMock).toBeCalled();
  });
});
