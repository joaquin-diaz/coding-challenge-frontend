import * as React from 'react';

import FilmDetails from './FilmDetails';
import { shallow } from 'enzyme';
import { fakeFilm } from '../../utils/test.fixtures';

const noop = () => {};

describe('<FilmDetails />', () => {
  it('should render the address, poster and details component', () => {
    const wrapper = shallow(
      <FilmDetails film={fakeFilm} posterURL={'someurl.com'} onClose={noop} />,
    );

    expect(wrapper.text()).toContain('Epic Roasthouse (399 Embarcadero)');
    expect(wrapper.find('img').prop('src')).toEqual('someurl.com');
    expect(wrapper.find('Details').prop('film')).toEqual(fakeFilm);
  });

  it('should be null if the film is null', () => {
    const wrapper = shallow(<FilmDetails film={null} posterURL={'someurl.com'} onClose={noop} />);
    expect(wrapper.text()).toEqual('');
  });

  it('should be null if the poster is null', () => {
    const wrapper = shallow(<FilmDetails film={null} posterURL={null} onClose={noop} />);
    expect(wrapper.text()).toEqual('');
  });
});
