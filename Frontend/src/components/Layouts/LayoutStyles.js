import styled from 'styled-components';
import {
  colors,
  GRADIENT_PURPLE,
  SEARCHBAR_WIDTH,
  DEFAULT_GAP,
} from '@/styles/contants.js';

export const StyledLayout = styled.div`
  height: 100vh;
  overflow-y: auto;
  background: ${colors.baseColor1};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${GRADIENT_PURPLE};
    border-radius: 10000px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.baseColor1};
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  & > div {
    width: 100%;
    max-width: ${SEARCHBAR_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${DEFAULT_GAP};
    padding: ${DEFAULT_GAP} 0;
  }
`;
