import styled from 'styled-components';
import { DEFAULT_BLUR, colors } from '@/styles/contants.js';

export const StyledWorksPage = styled.div`
  & > div:first-child {
    width: 100%;
    height: 400px;
    position: relative;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      position: absolute;
    }
    & > img:first-child {
      filter: ${DEFAULT_BLUR};
    }
    & > div:first-of-type {
      width: 100%;
      height: 100%;
      background: linear-gradient(transparent, black);
      filter: blur(5px);
      border-radius: 10px;
      position: absolute;
    }
    & > div:last-child {
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
