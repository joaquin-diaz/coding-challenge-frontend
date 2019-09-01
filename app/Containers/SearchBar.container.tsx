import * as React from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../configure.store';
import {
  fetchFilms,
  fetchSuggestions,
  clearSuggestions,
  setSearchValue,
} from '../actions/films.actions';

const SearchBarContainer = () => {
  const isLoading = useSelector((store: ApplicationState) => store.films.isLoading);
  const isLoadingSuggestions = useSelector(
    (store: ApplicationState) => store.films.isLoadingSuggestions,
  );
  const searchValue = useSelector((store: ApplicationState) => store.films.query);
  const dispatch = useDispatch();

  const handleQueryChange = (query: string) => {
    dispatch(setSearchValue(query));
  };
  const handleSubmit = (query: string) => {
    dispatch(fetchFilms(query, 10));
  };
  const handleFetchSuggestions = (query: string) => {
    dispatch(fetchSuggestions(query));
  };
  const handleClearSuggestions = () => {
    dispatch(clearSuggestions());
  };

  return (
    <SearchBar
      isLoading={isLoading}
      isLoadingSuggestions={isLoadingSuggestions}
      query={searchValue}
      onQueryChange={handleQueryChange}
      onSubmitSearch={handleSubmit}
      onFetchSuggestions={handleFetchSuggestions}
      clearSuggestions={handleClearSuggestions}
    />
  );
};

export default SearchBarContainer;
