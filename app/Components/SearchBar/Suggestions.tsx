import * as React from 'react';
import { consolidateSuggestions, Film } from '../../types/Film';
import Card from '../../Components/Card';
import styled from '@emotion/styled';
import styles from '../../constants/styles';

const Container = styled(Card)`
  width: 100%;
  padding: 10px 0;
`;

const Suggestion = styled.div`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${styles.colors.gray};
  }
`;

const Match = styled.div`
  font-size: 12px;
  font-style: italic;
`;

const { useState, useEffect } = React;

interface SuggestionsProps {
  suggestedFilms: Array<Film>;
  query: string;
  onSuggestionClick: (title: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = props => {
  const [suggestions, setSuggestions] = useState<Array<string>>([]);
  useEffect(() => {
    const s = consolidateSuggestions(props.suggestedFilms, props.query);
    setSuggestions(s);
  }, [props.suggestedFilms.length]);

  const renderSuggestion = (suggestion: string, key: number) => {
    const [title, match] = suggestion.split('//');
    const handleClick = () => {
      props.onSuggestionClick(title);
    };

    return (
      <Suggestion key={key} onClick={handleClick}>
        <div>{title}</div>
        <Match>{match}</Match>
      </Suggestion>
    );
  };

  if (suggestions.length === 0) return null;

  return <Container>{suggestions.map(renderSuggestion)}</Container>;
};

export default Suggestions;
