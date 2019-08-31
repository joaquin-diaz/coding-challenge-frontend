import * as React from 'react';
import Film from '../../types/Film';
import styled from '@emotion/styled';

interface DetailsProps {
  film: Film;
}

const FilmTitle = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

const Actors = styled.div`
  font-style: italic;
`;

const Details: React.FC<DetailsProps> = props => {
  const { film } = props;

  return (
    <div>
      <FilmTitle>
        {film.title} - {film.releaseYear}
      </FilmTitle>
      <strong>Directed by</strong>: {film.director} <br />
      <Actors>
        {film.actor1}, {film.actor2}, {film.actor3}
      </Actors>
    </div>
  );
};

export default Details;
