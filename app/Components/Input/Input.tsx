import * as React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  border: none;
  width: 100%;
  font-size: 14px;

  &:hover,
  &:focus {
    outline: none;
  }
`;

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = props => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      props.onChange(event.target.value);
    }
  };

  return <StyledInput value={props.value} onChange={onChange} placeholder={props.placeholder} />;
};

export default Input;
