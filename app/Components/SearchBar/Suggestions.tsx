import * as React from 'react';
import Card from '../../Components/Card';
import styled from '@emotion/styled';
import styles from '../../constants/styles';
import { Suggestion } from '../../types/Film';

const Container = styled(Card)`
  width: 100%;
  padding: 10px 0;
`;

const SuggestionRow = styled.div`
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

interface SuggestionsProps {
  onSuggestionClick: (title: string) => void;
  suggestions: Array<Suggestion>;
}

const Suggestions: React.FC<SuggestionsProps> = props => {
  const { suggestions, onSuggestionClick } = props;

  const renderSuggestion = (suggestion: Suggestion, key: number) => {
    const { title, subtitle } = suggestion;
    const handleClick = () => {
      onSuggestionClick(title);
    };

    return (
      <SuggestionRow key={key} onClick={handleClick}>
        <div>{title}</div>
        <Match>{subtitle}</Match>
      </SuggestionRow>
    );
  };

  if (suggestions.length === 0) return null;

  return <Container>{suggestions.map(renderSuggestion)}</Container>;
};

export default Suggestions;
