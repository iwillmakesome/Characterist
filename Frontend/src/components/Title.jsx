import styled from 'styled-components';
import { colors, SEARCHBAR_WIDTH } from '../styles/contants.js';

export default function Title({ title, children }) {
  return (
    <>
      <StyledTitle>
        <div>
          <h2>{title}</h2>
          <div>{children}</div>
        </div>
      </StyledTitle>
    </>
  );
}

const StyledTitle = styled.div`
  width: 100%;
  max-width: ${SEARCHBAR_WIDTH};
  height: 100px;
  padding: 1em;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  background: ${colors.baseColor2};

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: bold;
      color: white;
    }
    & > div {
      color: white;
    }
  }
`;
