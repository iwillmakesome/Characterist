import styled from 'styled-components';
import {
  colors,
  DEFAULT_BLUR,
  DEFAULT_GAP,
  GRADIENT_PURPLE,
  GRADIENT_YELLOW,
} from '@/styles/contants.js';

export const StyledCharacterPage = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledProfile = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  gap: ${DEFAULT_GAP};
  color: white;
  & > div:first-child {
    width: 30%;
    position: relative;
    display: flex;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 10px;
    }
    & > img:first-child {
      position: absolute;
      filter: ${DEFAULT_BLUR};
    }
    & > img:last-child {
      position: absolute;
    }
  }
  & > div:last-child {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
  }
`;

export const StyledTagsContainer = styled.div`
  padding: 0 10px;
`;
