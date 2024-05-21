import styled from 'styled-components';
import { HEADER_HEIGHT } from '@/styles/contants.js';

export const StyledLoading = styled.div`
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    img {
      width: 10%;
    }
  }
`;
