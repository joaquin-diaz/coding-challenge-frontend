import * as React from 'react';

import SearchBar from './SearchBar';
import { shallow } from 'enzyme';

import debounce from 'lodash/debounce';
jest.mock('lodash/debounce', () => jest.fn(fn => fn));

const noop = () => {};

describe('<SearchBar />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <SearchBar
        isLoading={false}
        isLoadingSuggestions={false}
        query="Something"
        onFetchSuggestions={noop}
        onSubmitSearch={noop}
        onQueryChange={noop}
        clearSuggestions={noop}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', () => {
    (debounce as any).mockClear();
    const onChangeMock = jest.fn();
    const onSuggestionChange = jest.fn();

    const wrapper = shallow(
      <SearchBar
        isLoading={false}
        isLoadingSuggestions={false}
        query="Something"
        onFetchSuggestions={onSuggestionChange}
        onSubmitSearch={noop}
        onQueryChange={onChangeMock}
        clearSuggestions={noop}
      />,
    );

    const input = wrapper.find('Input');
    const inputOnChange = input.prop('onChange') as any;
    inputOnChange('something');

    expect(input.exists).toBeTruthy();
    expect(onChangeMock).toBeCalledWith('something');
    expect(onSuggestionChange).toBeCalledWith('something');
  });

  it('should handle submit', () => {
    const mockSubmit = jest.fn();
    const mockClearSuggestions = jest.fn();
    const mockPreventDefault = jest.fn();

    const wrapper = shallow(
      <SearchBar
        isLoading={false}
        isLoadingSuggestions={false}
        query="Something"
        onFetchSuggestions={noop}
        onSubmitSearch={mockSubmit}
        onQueryChange={noop}
        clearSuggestions={mockClearSuggestions}
      />,
    );

    const form = wrapper.find('form');
    expect(form.exists).toBeTruthy();
    form.simulate('submit', { preventDefault: mockPreventDefault });

    expect(mockSubmit).toBeCalledWith('Something');
    expect(mockPreventDefault).toBeCalled();
    expect(mockClearSuggestions).toBeCalled();
  });

  it('should be loading', () => {
    const wrapper = shallow(
      <SearchBar
        isLoading={true}
        isLoadingSuggestions={true}
        query="Something"
        onFetchSuggestions={noop}
        onSubmitSearch={noop}
        onQueryChange={noop}
        clearSuggestions={noop}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
