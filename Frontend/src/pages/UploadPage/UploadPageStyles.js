import styled from 'styled-components';
import {
  colors,
  DEFAULT_GAP,
  DEFAULT_HEIGHT,
  DEFAULT_SHADOW,
  GRADIENT_PURPLE,
  GRADIENT_YELLOW,
} from '@/styles/contants.js';

export const StyledUploadPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: ${DEFAULT_GAP};
  & > label {
    padding: 1em 3em;
    background: ${GRADIENT_YELLOW};
    border-radius: 5px;
    color: white;
    font-weight: bold;
  }
  & > input {
    display: none;
  }
  & > div:last-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${DEFAULT_GAP};
    overflow: hidden;
  }
`;

export const StyledSelectedContents = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.baseColor2};
  border-radius: 10px;
  overflow: hidden;

  & > img {
    height: 100%;
    object-fit: contain;
    box-shadow: ${DEFAULT_SHADOW};
    background: #808080;
  }
  & > video {
    height: 100%;
    object-fit: contain;
    box-shadow: ${DEFAULT_SHADOW};
    z-index: 0;
  }
`;

export const StyledInfoInputs = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${DEFAULT_GAP};
  padding: ${DEFAULT_GAP};
  background: ${colors.baseColor2};
  border-radius: 10px;

  & > div {
    width: 70%;
  }

  & > button {
    padding: 1em 3em;
    border-radius: 5px;
    background: ${GRADIENT_PURPLE};
    & > h3 {
      color: white;
      font-weight: bold;
    }
  }
`;

export const StyledInfoInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  position: relative;
  & > label {
    width: 20%;
    color: white;
    white-space: nowrap;
  }
  & > input,
  & > select {
    width: 80%;
    height: 3em;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
  }
  & > button {
    height: 100%;
    position: absolute;
    right: 0;
    padding: 10px;
    font-size: 10px;
    &:hover {
      background: ${colors.baseColor2};
      color: white;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 0 0 3px black;
    }
  }
`;

export const StyledSelectedTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 10px 4px 10px;
  gap: 1em;
  border-radius: 5px;
  overflow-x: scroll;
  white-space: nowrap;
  background: ${colors.baseColor3};

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${GRADIENT_PURPLE};
    border-radius: 10000px;
  }

  & > div {
    padding: 10px;
    color: white;
    background: ${colors.baseColor2};
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const StyledCharacterSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  * {
    color: white;
  }
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    & > button {
      font-size: 10px;
    }
  }
  & > div:last-child {
    display: flex;
    gap: 1em;
    & > img {
      width: 30%;
      border-radius: 5px;
      object-fit: cover;
    }
    & > div {
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
        }
        & > h4 {
          position: absolute;
          padding: 10px;
          right: 0;
          font-size: 10px;
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
        & > button {
          padding: 5px;
          border-radius: 5px;
          background: ${colors.baseColor1};
          font-size: 10px;
          cursor: pointer;
          text-align: left;
          &:hover {
            background: ${colors.baseColor2};
          }
        }
      }
    }
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
`;
