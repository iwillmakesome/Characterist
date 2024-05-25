import styled from 'styled-components';
import { colors, DEFAULT_GAP, DEFAULT_SHADOW } from '../../styles/contants.js';

export const StyledAddCharacterPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: ${DEFAULT_GAP};
`;

export const StyledSelectedContents = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.baseColor2};
  border-radius: 10px;
  overflow: hidden;

  & > img,
  & > video {
    height: 100%;
    object-fit: contain;
    box-shadow: ${DEFAULT_SHADOW};
    background: #808080;
  }
`;

export const StyledInfoInputs = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${DEFAULT_GAP};
  padding: ${DEFAULT_GAP};
  background: ${colors.baseColor2};
  border-radius: 10px;

  & > div {
    width: 70%;
  }
  input,
  select {
    font-size: 15px;
  }
`;
