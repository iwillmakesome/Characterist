import styled from 'styled-components';
import { colors, DEFAULT_GAP, SEARCHBAR_WIDTH } from '../../styles/contants.js';

export const StyledMainPage = styled.div`
  gap: calc(${DEFAULT_GAP} * 2);
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${DEFAULT_GAP};
  }
`;

export const StyledTagsWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.baseColor3};
  border-radius: 10px;
  button {
    background: ${colors.baseColor2};
  }
`;
