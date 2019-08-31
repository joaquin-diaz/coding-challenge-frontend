import * as React from 'react';
import Film from '../../types/Film';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 500px;
  background-color: white;
  height: 100%;
  overflow: hidden;
`;

interface FilmDetailsProps {
  film: Film | null;
}

const FilmDetails: React.FC<FilmDetailsProps> = props => {
  const { film } = props;
  const styles = useSpring({
    config: {
      mass: 1,
      tension: 150,
      friction: 20,
    },
    from: {
      opacity: 0,
      right: -500,
      display: 'none',
    },
    to: {
      opacity: film ? 1 : 0,
      right: film ? 0 : -500,
      display: film ? 'block' : 'none',
    },
  });

  return <Container style={styles}>{film && film.title}</Container>;
};

export default FilmDetails;
