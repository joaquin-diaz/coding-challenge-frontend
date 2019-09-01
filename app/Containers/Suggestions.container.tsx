import * as React from 'react';
import Suggestions from '../Components/SearchBar/Suggestions';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../configure.store';
import { setSearchValue, fetchFilms, clearSuggestions } from '../actions/films.actions';
import { Suggestion, consolidateSuggestions } from '../types/Film';

const { useState, useEffect } = React;

const SuggestionsContainer: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);
  const filmSuggestions = useSelector((state: ApplicationState) => state.films.filmSuggestions);
  const query = useSelector((state: ApplicationState) => state.films.query);
  const dispatch = useDispatch();

  const handleSuggestionClick = (title: string) => {
    dispatch(setSearchValue(title));
    dispatch(fetchFilms(title, 10));
    dispatch(clearSuggestions());
  };

  useEffect(() => {
    setSuggestions(consolidateSuggestions(filmSuggestions, query));
  }, [filmSuggestions.length]);

  return <Suggestions onSuggestionClick={handleSuggestionClick} suggestions={suggestions} />;
};

export default SuggestionsContainer;
