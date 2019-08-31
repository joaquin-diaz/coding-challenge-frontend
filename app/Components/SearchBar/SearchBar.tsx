import * as React from 'react';
import styled from '@emotion/styled';

import Card from '../Card';
import Input from '../Input';
import Button from '../Button';

const { useState } = React;

const Container = styled(Card)`
  position: absolute;
  width: 40%;
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
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmitSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <Container>
        <InputContainer>
          <Input
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search by title, release year or main actor"
          />
        </InputContainer>
        <SearchButton type="submit" disabled={props.isLoading}>
          SEARCH
        </SearchButton>
      </Container>
    </form>
  );
};

export default SearchBar;
