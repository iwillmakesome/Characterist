import styled from 'styled-components';
import { DEFAULT_GAP, colors, SEARCHBAR_WIDTH } from '@/styles/contants.js';

export const StyledModal = styled.div`
  z-index: 99;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  backdrop-filter: blur(5px);

  & > div {
    width: 100%;
    max-width: calc(${SEARCHBAR_WIDTH} / 1.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: fixed;

    background: ${colors.baseColor1};
    box-shadow: 0 0 20px -5px black;
    border-radius: 10px;
    & > div:first-child {
      width: 100%;
      display: flex;
      background: ${colors.baseColor2};
      padding: 1em;
      & > h5 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      & > button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    & > div:last-child {
      padding: ${DEFAULT_GAP};
    }
  }
`;
