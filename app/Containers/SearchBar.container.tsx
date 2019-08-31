import * as React from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../configure.store';
import { fetchFilms } from '../actions/films.actions';

const SearchBarContainer = () => {
  const isLoading = useSelector((store: ApplicationState) => store.films.isLoading);
  const dispatch = useDispatch();
  const handleSubmit = (query: string) => {
    dispatch(fetchFilms(query, 10));
  };

  return <SearchBar isLoading={isLoading} onSubmitSearch={handleSubmit} />;
};

export default SearchBarContainer;
