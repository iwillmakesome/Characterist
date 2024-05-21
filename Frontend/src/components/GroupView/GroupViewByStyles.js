import styled from 'styled-components';

export const StyledGroupView = styled.div`
  height: 500px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  grid-template-rows: ${(props) =>
    props.$expansion
      ? 'repeat(2, minmax(0, 1fr))'
      : 'repeat(1, minmax(0, 1fr))'};
  gap: 1em;
`;
