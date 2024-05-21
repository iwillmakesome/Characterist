import styled from 'styled-components';
import { colors, SEARCHBAR_WIDTH } from '../../styles/contants.js';

export const StyledSearchBar = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    max-width: ${SEARCHBAR_WIDTH};
    display: flex;
    background: white;
    border-radius: 10000px;
    justify-content: flex-end;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border-radius: 10000px;
      border: none;
      padding-left: 20px;
      font-size: 16px;
      font-weight: bold;
      &:focus {
        outline-color: ${colors.baseColor2};
      }
    }
    button {
      width: 50px;
      height: 50px;
      border-radius: 10000px;
      background: ${colors.baseColor2};
      position: absolute;
    }
  }
`;
