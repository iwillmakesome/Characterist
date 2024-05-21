import styled from 'styled-components';
import {
  colors,
  DEFAULT_GAP,
  DEFAULT_HEIGHT,
  GRADIENT_PURPLE,
  GRADIENT_YELLOW,
  SEARCHBAR_WIDTH,
} from '@/styles/contants.js';

export const StyledScenePage = styled.div``;

export const StyledContent = styled.div`
  width: 100%;
  height: 70%;
  background: ${colors.baseColor2};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  & > img,
  & > video {
    background: white;
    box-shadow: 0 0 50px gray;
    object-fit: contain;
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
  height: 30%;
  background: ${colors.baseColor2};
  border-radius: 10px;
  padding: 2em;
  display: flex;
  justify-content: space-between;
`;

export const StyledInfoBasic = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: flex-end;
  h1 {
    color: white;
    font-size: 2em;
  }
  & > a {
    padding-left: 10px;
    color: white;
    font-size: 1em;
    text-align: left;
    &:hover {
      color: ${colors.baseColor3};
    }
  }
`;

export const StyledTags = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  & > a {
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;

    background: white;
    color: ${colors.baseColor2};
    &:hover {
      background: ${colors.baseColor3};
      color: ${colors.baseColor1};
    }
  }
  & > a:first-child {
    background: ${GRADIENT_PURPLE};
    color: white;
    &:hover {
      background: ${colors.purple2};
    }
  }
`;

export const StyledInfoExtra = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const StyledExtras = styled.div`
  display: flex;
  gap: 10px;
  div {
    font-size: 10px;
    color: ${colors.baseColor3};
  }
`;
export const StyledButtons = styled.div`
  height: 30px;
  display: flex;
  gap: 10px;
  button:first-child {
    background: transparent;
    color: ${colors.baseColor3};
    font-weight: normal;
    &:hover {
      color: ${colors.baseColor1};
      background: transparent;
    }
  }
  button {
    padding: 5px 10px;
    display: flex;
    align-items: end;
    gap: 10px;

    background: ${GRADIENT_YELLOW};
    color: white;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      background: ${colors.yellow1};
    }
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
