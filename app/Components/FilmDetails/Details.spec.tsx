import * as React from 'react';

import Details from './Details';
import { mount } from 'enzyme';
import { fakeFilm } from '../../utils/test.fixtures';

describe('<Details />', () => {
  it('should render', () => {
    const wrapper = mount(<Details film={fakeFilm} />);
    expect(wrapper).toMatchSnapshot();
  });
});
