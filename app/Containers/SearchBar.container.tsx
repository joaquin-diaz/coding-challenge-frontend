import * as React from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../configure.store';

const SearchBarContainer = () => {
  const isLoading = useSelector((store: ApplicationState) => store.films.isLoading);

  return <SearchBar isLoading={isLoading} />;
};

export default SearchBarContainer;
