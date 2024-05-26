import styled from 'styled-components';
import { colors, DEFAULT_SHADOW } from '@/styles/contants.js';
import { DEFAULT_BLUR } from '../../styles/contants.js';

export const StyledSlide = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  & > div:first-child {
    height: 100%;
    display: flex;
    font-weight: bold;
  }
`;

export const StyledBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 45%;
  ${(props) => (props.$side === 'left' ? 'left: 10px' : 'right: 10px')};

  svg {
    filter: drop-shadow(0 0 5px gray);

    transform: ${(props) =>
      props.$side === 'left' ? 'rotate(270deg)' : 'rotate(90deg)'};
  }

  & > div {
    height: 100%;
    width: calc(100% - 100px);
    & > a > div {
      height: calc(100% - 30px);
    }
  }
`;

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  gap: 10px;
  top: 95%;
`;

export const StyledPageBtn = styled.button`
  width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 100000px;
  box-shadow: ${(props) =>
    props.selected ? `0 0 5px 1px ${colors.purple1}` : '0 0 5px 1px gray'};
  background: ${(props) => (props.selected ? colors.purple1 : 'white')};
`;

export const StyledSections = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  transform: ${(props) => ` translateX(-${props.$page}00%)`};
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  overflow: hidden;

  & > img {
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  & > img:first-child {
    width: 100%;
    filter: blur(100px);
  }
  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    & > img {
      height: 100%;
      object-fit: cover;
    }
  }

  & > div:first-of-type {
    position: absolute;
    width: 100%;
    height: 50%;
    background: linear-gradient(transparent, black);
    //filter: blur(10px);
  }

  & > div:last-child {
    position: absolute;
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    bottom: 0;
    gap: 1em;

    border-radius: 10px;

    & > div:first-of-type {
      display: flex;
      gap: 1em;
      & > div {
        display: flex;
        gap: 5px;
      }
    }
  }
`;
