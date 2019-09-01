import * as React from 'react';

import Overlay from '../Overlay';
import { Ripple } from '../../Components/Loaders';
import styles from '../../constants/styles';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const LoadingMessage = styled.div`
  font-style: italic;
  margin-top: 15px;
  color: ${styles.colors.primary};
`;

interface LoadingScreenProps {
  isLoading: boolean;
  query: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = props => {
  if (!props.isLoading) return null;

  return (
    <Overlay>
      <Container>
        <Ripple color={styles.colors.primary} />
        <LoadingMessage>Loading locations{props.query && ` for "${props.query}"`}</LoadingMessage>
      </Container>
    </Overlay>
  );
};

export default LoadingScreen;
