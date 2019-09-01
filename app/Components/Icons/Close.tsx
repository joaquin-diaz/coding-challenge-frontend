import styled from '@emotion/styled';
import styles from '../../constants/styles';

const Close = styled.div`
  width: 32px;
  height: 32px;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: ${styles.colors.primary};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export default Close;
