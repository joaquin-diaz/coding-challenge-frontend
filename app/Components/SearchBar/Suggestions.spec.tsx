import * as React from 'react';

import Suggestions from './Suggestions';
import { mount } from 'enzyme';

const suggestions = [
  {
    title: 'Something',
    subtitle: 'Subsomething',
  },
  {
    title: 'Something',
    subtitle: 'Subsomething',
  },
];

const noop = () => {};

describe('<Suggestions />', () => {
  it('should render', () => {
    const wrapper = mount(<Suggestions suggestions={suggestions} onSuggestionClick={noop} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be null', () => {
    const wrapper = mount(<Suggestions suggestions={[]} onSuggestionClick={noop} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call on click suggestion', () => {
    const mockSuggestionClick = jest.fn();

    const wrapper = mount(
      <Suggestions suggestions={suggestions} onSuggestionClick={mockSuggestionClick} />,
    );
    const suggestionRow = wrapper.find('div').at(2);

    expect(suggestionRow.exists).toBeTruthy();
    suggestionRow.simulate('click');

    expect(mockSuggestionClick).toBeCalled();
  });
});
