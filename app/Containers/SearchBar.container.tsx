import * as React from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../configure.store';
import { fetchFilms, fetchSuggestions, clearSuggestions } from '../actions/films.actions';

const SearchBarContainer = () => {
  const isLoading = useSelector((store: ApplicationState) => store.films.isLoading);
  const filmSuggestions = useSelector((store: ApplicationState) => store.films.filmSuggestions);

  const dispatch = useDispatch();
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
      onSubmitSearch={handleSubmit}
      onFetchSuggestions={handleFetchSuggestions}
      suggestedFilms={filmSuggestions}
      onClearSuggestions={handleClearSuggestions}
    />
  );
};

export default SearchBarContainer;
