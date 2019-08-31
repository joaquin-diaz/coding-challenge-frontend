import * as React from 'react';
import styled from '@emotion/styled';
import styles from '../../constants/styles';

import MarkerContent from './MarkerContent';
import Film from '../../types/Film';

const { useState } = React;

const Container = styled.div`
  position: relative;
`;

const StyledMarker = styled.div`
  position: absolute;
  left: -20px;
  bottom: 0px;

  border-radius: 50% 50% 50% 0;
  border: 4px solid ${styles.colors.primary};
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);

  &:after {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    background-color: ${styles.colors.primary};
  }

  &:hover {
    cursor: pointer;
  }
`;

interface MarkerProps {
  lat: number;
  lng: number;
  film: Film;
  onClick: (film: Film) => void;
}

const Marker: React.FC<MarkerProps> = props => {
  const { film, onClick } = props;
  const [hovered, onHover] = useState<boolean>(false);
  const onMouseEnter = () => {
    onHover(true);
  };
  const onMouseLeave = () => {
    onHover(false);
  };
  const handleOnClick = () => {
    onClick(film);
  };

  return (
    <Container onClick={handleOnClick}>
      <StyledMarker onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <MarkerContent title={film.title} address={film.address} hidden={!hovered} />
    </Container>
  );
};

export default Marker;
