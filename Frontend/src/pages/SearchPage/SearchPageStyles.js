import styled from 'styled-components';
import { DEFAULT_GAP } from '@/styles/contants.js';

export const StyledListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${DEFAULT_GAP};
  padding: ${DEFAULT_GAP};
`;
