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

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div>
      <Container>
        <InputContainer>
          <Input
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search by title, release year or main actor"
          />
        </InputContainer>
        <SearchButton>SEARCH</SearchButton>
      </Container>
    </div>
  );
};

export default SearchBar;
