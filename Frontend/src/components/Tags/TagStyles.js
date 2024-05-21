import styled from 'styled-components';

export const StyledTags = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledTag = styled.div`
  border-radius: 5px;
  background: rgba(141, 141, 141, 0.5);
  & > a {
    display: flex;
    padding: 5px 10px;
    font-size: 10px;
    color: white;
  }
`;
