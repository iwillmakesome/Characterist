import styled from 'styled-components';
import { GRADIENT_PURPLE, GRADIENT_YELLOW, colors } from '@/styles/contants.js';

export const StyledSubmitBtn = styled.button`
  padding: 1em 3em;
  border-radius: 5px;
  background: ${GRADIENT_PURPLE};
  color: white;
  font-weight: bold;
`;

export const StyledSelectFileBtn = styled.div`
  & > label {
    display: flex;
    justify-content: center;
    padding: 1em;
    background: ${GRADIENT_YELLOW};
    border-radius: 5px;
    font-weight: bold;
  }
  & > input {
    display: none;
  }
`;

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  & > label {
    width: 20%;
    white-space: nowrap;
  }
  & > input,
  & > select {
    width: 80%;
    height: 3em;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    color: black;
  }
`;
