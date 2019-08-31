import * as React from 'react';
import styled from '@emotion/styled';
import Card from '../Card';

interface ContainerProps {
  hidden: boolean;
}

const Container = styled(Card)<ContainerProps>`
  position: absolute;
  bottom: 35px;
  width: 200px;
  left: -100px;
  right: 0;
  padding: 10px 20px;
  font-size: 15px;

  ${props => (props.hidden ? 'opacity: 0;' : 'opacity: 1;')}
`;

interface MarkerContentProp {
  title: string;
  address: string;
  hidden: boolean;
}

const MarkerContent: React.FC<MarkerContentProp> = props => {
  return (
    <Container hidden={props.hidden}>
      {props.title} <br /> {props.address}
    </Container>
  );
};

export default MarkerContent;
