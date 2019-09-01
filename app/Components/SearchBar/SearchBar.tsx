import * as React from 'react';
import styled from '@emotion/styled';

import Card from '../Card';
import Input from '../Input';
import Button from '../Button';

import debounce from 'lodash/debounce';
import Suggestions from './Suggestions';
import { Film } from '../../types/Film';

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

const SuggestionsContainer = styled.div`
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
  onSubmitSearch: (query: string) => void;
  onFetchSuggestions: (query: string) => void;
  suggestedFilms: Array<Film>;
  onClearSuggestions: () => void;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearch] = useState(() => debounce(props.onFetchSuggestions, 300));
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmitSearch(searchValue);
  };
  const onChange = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);
  };
  const handleSuggestionClick = (title: string) => {
    setSearchValue(title);
    props.onSubmitSearch(title);
    props.onClearSuggestions();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitSearch}>
        <Container>
          <InputContainer>
            <Input
              value={searchValue}
              onChange={onChange}
              placeholder="Search by title, release year or main actor"
            />
          </InputContainer>
          <SearchButton type="submit" disabled={props.isLoading}>
            SEARCH
          </SearchButton>
        </Container>
      </form>
      <SuggestionsContainer>
        <Suggestions
          suggestedFilms={props.suggestedFilms}
          query={searchValue}
          onSuggestionClick={handleSuggestionClick}
        />
      </SuggestionsContainer>
    </React.Fragment>
  );
};

export default SearchBar;
