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
    width: 100%;
    max-width: ${SEARCHBAR_WIDTH};
    height: ${FOOTER_HEIGHT};
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 20px;
    border-radius: 10px 10px 0 0;
    
    background: ${colors.baseColor2};
    &>*{
      color: white;
    }
    &>div {
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
