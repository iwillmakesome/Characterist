import styled from 'styled-components';
import { colors, DEFAULT_SHADOW } from '@/styles/contants.js';

export const StyledContentCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  gap: 1em;
  & > a {
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    gap: 1em;
    background: ${colors.baseColor2};
    border-radius: 10px;
    overflow: hidden;
    & > img {
      width: 100%;
      object-fit: contain;
      box-shadow: ${DEFAULT_SHADOW};
    }
  }
`;

export const StyledInfo = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > a:first-child > h3 {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div:first-of-type {
    display: flex;
    gap: 1em;
    & > div {
      display: flex;
      gap: 5px;
    }
  }
`;

export const StyledProfileInfo = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
`;