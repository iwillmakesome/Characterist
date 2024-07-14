import styled from 'styled-components';
import { DEFAULT_GAP } from '@/styles/contants.js';

export const StyledList = styled.div`
  height: 1000px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1em;
`;
