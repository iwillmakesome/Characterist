import styled from 'styled-components';
import { colors } from '@/styles/contants.js';

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  background: ${colors.baseColor2};
  color: white;
`;

export const StyledPaginationBtn = styled.button`
  width: 30px;
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: end;
  justify-content: center;
  border-radius: 10000px;
  color: ${(props) => (props.selected ? colors.purple1 : 'white')};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.selected ? null : colors.baseColor1)};
  }
`;
