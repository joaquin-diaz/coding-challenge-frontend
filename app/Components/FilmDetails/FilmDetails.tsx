import * as React from 'react';
import { FilmWithCoordinates } from '../../types/Film';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import Title from './Title';
import styles from '../../constants/styles';
import Details from './Details';
import { Close } from '../../Components/Icons';

const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 500px;
  background-color: white;
  height: 100%;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
`;

const ImageContainer = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid ${styles.colors.primary};
  img {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  margin: 25px;
`;

const StyledCloseIcon = styled(Close)`
  position: absolute;
  left: -40px;
  top: 15px;
  cursor: pointer;
`;

interface FilmDetailsProps {
  film: FilmWithCoordinates | null;
  posterURL: string | null;
  onClose: () => void;
}

const FilmDetails: React.FC<FilmDetailsProps> = props => {
  const { film, posterURL } = props;
  const styles = useSpring({
    config: {
      mass: 1,
      tension: 170,
      friction: 20,
    },
    from: {
      opacity: film ? 0 : 1,
      right: film ? -500 : 0,
      display: film ? 'none' : 'block',
    },
    to: {
      opacity: film ? 1 : 0,
      right: film ? 0 : -500,
      display: film ? 'block' : 'none',
    },
  });
  const renderFilmDetails = () => {
    if (!film || !posterURL) return null;

    return (
      <React.Fragment>
        <StyledCloseIcon onClick={props.onClose} />
        <Title>{film.address}</Title>
        <DetailsContainer>
          <ImageContainer>
            <img src={posterURL} />
          </ImageContainer>
          <Details film={film} />
        </DetailsContainer>
      </React.Fragment>
    );
  };

  return <Container style={styles}>{renderFilmDetails()}</Container>;
};

export default FilmDetails;
