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
  width: 100%;
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
  & > select,
  & > select > option {
    width: 80%;
    height: 3em;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    color: black;
  }
`;

export const StyledSearchSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    & > a {
      font-size: 10px;
      &:hover {
        color: ${colors.baseColor3};
      }
    }
  }
  & > div:last-child {
    height: 200px;
    display: flex;
    gap: 1em;
    & > div:first-child {
      width: 30%;

      border-radius: 5px;
      background: ${colors.baseColor1};
      box-shadow: 0 0 10px -5px black inset;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      & > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    & > div:last-child {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      & > div:first-child {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid ${colors.baseColor3};
        border-radius: 5px;
        & > input {
          width: 100%;
          border: none;
          background: transparent;
          padding: 1em;
          color: white;
        }
        & > div {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 5px;
          right: 0;
          font-size: 10px;
          padding: 10px;
          & > button {
            border-radius: 1000px;
            &:hover {
              background: ${colors.baseColor3};
            }
          }
        }
      }
      & > div:last-child {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 1em;
        background: ${colors.baseColor1};
        border-radius: 5px;
        box-shadow: 0 0 10px -5px black inset;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-thumb {
          background: ${GRADIENT_PURPLE};
          border-radius: 10000px;
        }
        & > button {
          display: flex;
          justify-content: space-between;
          padding: 5px;
          border-radius: 5px;
          background: ${colors.baseColor1};
          font-size: 10px;
          cursor: pointer;
          &:hover {
            background: ${colors.baseColor2};
          }
        }
      }
    }
  }
`;
