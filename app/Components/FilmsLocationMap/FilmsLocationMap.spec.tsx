import * as React from 'react';

import FilmsLocationMap from './FilmsLocationMap';
import { shallow } from 'enzyme';
import { fakeFilm } from '../../utils/test.fixtures';

const noop = () => {};

describe('<FilmsLocationMap />', () => {
  it('should render with markers', () => {
    const wrapper = shallow(<FilmsLocationMap films={[fakeFilm, fakeFilm]} onMarkerClick={noop} />);
    const markers = wrapper.find('Marker');

    expect(wrapper).toMatchSnapshot();
    expect(markers.length).toEqual(2);
    expect(markers.at(0).prop('film')).toEqual(fakeFilm);
    expect(markers.at(0).prop('lat')).toEqual(fakeFilm.coordinates.lat);
    expect(markers.at(0).prop('lng')).toEqual(fakeFilm.coordinates.lng);
    expect(markers.at(0).prop('onClick')).toEqual(noop);
  });
});
