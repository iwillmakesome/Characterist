import styled from 'styled-components';
import { DEFAULT_GAP } from '@/styles/contants.js';

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${DEFAULT_GAP};
  & > div:first-child {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${DEFAULT_GAP};
  }
`;

export const StyledPagination = styled.div`
  color: white;
`;
