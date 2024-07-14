import styled from 'styled-components';
import { colors, SEARCHBAR_WIDTH } from '../../styles/contants.js';

export const StyledSearchBar = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: relative;

  & > div:last-of-type {
    z-index: 1000;
    width: 100%;
    max-width: ${SEARCHBAR_WIDTH};
    display: flex;
    background: white;
    border-radius: 10000px;
    justify-content: flex-end;
    position: relative;
    & > input {
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
    & > button {
      width: 50px;
      height: 50px;
      border-radius: 10000px;
      position: absolute;
    }
  }
`;

export const StyledAutoComplete = styled.div`
  position: absolute;
  width: 100%;
  padding: 70px 10px 10px 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);

  border-radius: 25px;
  & > button {
    width: 100%;
    text-align: center;
    border-radius: 10000px;
    //color: black;
    padding: 10px;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
