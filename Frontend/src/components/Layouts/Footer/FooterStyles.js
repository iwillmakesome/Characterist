import styled from 'styled-components';
import {
  colors,
  DEFAULT_GAP,
  FOOTER_HEIGHT,
  SEARCHBAR_WIDTH,
} from '@/styles/contants.js';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  & > div {
    background: ${colors.baseColor2};
    width: 100%;
    max-width: ${SEARCHBAR_WIDTH};
    height: ${FOOTER_HEIGHT};
    padding: 20px;
    border-radius: 10px 10px 0 0;
    h1 {
      font-size: 2em;
      color: white;
    }
    div {
      padding-top: 1em;
      display: flex;
      gap: ${DEFAULT_GAP};
      a {
        color: white;
        border-radius: 5px;
        background: ${colors.baseColor1};
        padding: 5px;
        &:hover {
          color: ${colors.baseColor3};
        }
      }
    }
  }
`;
