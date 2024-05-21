import styled from 'styled-components';
import { GRADIENT_PURPLE, GRADIENT_YELLOW } from '@/styles/contants.js';

export const StyledProfileTags = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  color: white;
  & > div {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
  }
  & > div:nth-child(-n + 2) {
    background: ${GRADIENT_YELLOW};
  }
  & > div:nth-child(n + 3) {
    background: ${GRADIENT_PURPLE};
  }
`;
