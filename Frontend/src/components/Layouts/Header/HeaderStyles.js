import styled from 'styled-components';
import { colors, HEADER_HEIGHT } from '@/styles/contants.js';

export const StyledHeader = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  background: ${colors.baseColor1};
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  a {
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 80%;
      max-height: 50px;
    }
    h1 {
      color: white;
    }
  }
`;

export const StyledLock = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    width: 80px;
    height: 80px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10000px;
      &:hover {
        background: ${colors.baseColor2};
      }
    }
  }
`;
