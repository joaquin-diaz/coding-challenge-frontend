import * as React from 'react';
import styled from '@emotion/styled';

import Card from '../Card';
import Input from '../Input';
import Button from '../Button';
import SuggestionsContainer from '../../Containers/Suggestions.container';

import debounce from 'lodash/debounce';

const { useState } = React;

const searchBarWidth = '40%';

const Container = styled(Card)`
  position: absolute;
  width: ${searchBarWidth};
  height: 50px;
  z-index: 10;
  left: 30px;
  top: 30px;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

const InputContainer = styled.div`
  flex: 0.7;
`;

const Suggestions = styled.div`
  position: absolute;
  left: 30px;
  top: 100px;
  z-index: 10;
  width: ${searchBarWidth};
`;

const SearchButton = styled(Button)`
  position: absolute;
  right: -100px;
  height: 50px;
  font-weight: bold;
  padding: 15px;
`;

interface SearchBarProps {
  isLoading: boolean;
  query: string;
  onQueryChange: (query: string) => void;
  onSubmitSearch: (query: string) => void;
  onFetchSuggestions: (query: string) => void;
  clearSuggestions: () => void;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const [debouncedSearch] = useState(() => debounce(props.onFetchSuggestions, 300));
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmitSearch(props.query);
    props.clearSuggestions();
  };
  const onChange = (value: string) => {
    props.onQueryChange(value);
    debouncedSearch(value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitSearch}>
        <Container>
          <InputContainer>
            <Input
              value={props.query}
              onChange={onChange}
              placeholder="Search by title, release year or main actor"
            />
          </InputContainer>
          <SearchButton type="submit" disabled={props.isLoading}>
            SEARCH
          </SearchButton>
        </Container>
      </form>
      <Suggestions>
        <SuggestionsContainer />
      </Suggestions>
    </React.Fragment>
  );
};

export default SearchBar;
