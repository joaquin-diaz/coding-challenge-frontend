import * as React from 'react';
import styled from '@emotion/styled';

interface SpinnerProps {
  color: string;
}

const SpinnerStyles = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: scale(0.4);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${props => props.color};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: React.FC<SpinnerProps> = props => {
  return (
    <SpinnerStyles {...props}>
      <div />
      <div />
      <div />
      <div />
    </SpinnerStyles>
  );
};

export default Spinner;
