import * as React from 'react';
import styled from '@emotion/styled';
import styles from '../../constants/styles';

const StyledButton = styled.button`
  background-color: ${styles.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);

  &:disabled {
    background-color: ${styles.colors.disabled};
    cursor: initial;
  }
`;

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton className={props.className} disabled={props.disabled} type={props.type}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
