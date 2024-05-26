import styled from 'styled-components';
import { DEFAULT_GAP } from '@/styles/contants.js';

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${DEFAULT_GAP};
`;

export const StyledPagination = styled.div`
  color: white;
`;
