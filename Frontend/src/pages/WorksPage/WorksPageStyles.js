import styled from 'styled-components';
import { DEFAULT_BLUR, DEFAULT_GAP } from '@/styles/contants.js';

export const StyledWorksPage = styled.div`
  & > div:first-child {
    width: 100%;
    height: 400px;
    position: relative;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      border-radius: 10px;
    }
    & > img:first-child {
      filter: ${DEFAULT_BLUR};
    }
    & > div {
      width: 80%;
      height: 100%;
      position: absolute;
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 1em;
      color: white;
    }
  }
`;
