import * as React from 'react';
import styled from '@emotion/styled';

interface ContainerProps {
  hidden: boolean;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  background: white;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  box-sizing: border-box;

  bottom: 35px;
  width: 200px;
  left: -100px;
  right: 0;
  padding: 10px 20px;
  border-radius: 5px;
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
