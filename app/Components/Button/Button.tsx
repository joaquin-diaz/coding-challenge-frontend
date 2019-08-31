import * as React from 'react';
import styled from '@emotion/styled';
import styles from '../../constants/styles';

const StyledButton = styled.button`
  background-color: ${styles.colors.primary};
  color: white;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = props => {
  return <StyledButton className={props.className}>{props.children}</StyledButton>;
};

export default Button;
