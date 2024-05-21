import styled from 'styled-components';
import bmo from '/public/bmo.png';
import { Link } from 'react-router-dom';

export default function ContentTypeList() {
  return (
    <StyledContentTypeList>
      <Link to={'/list?type=video'}>
        <img src={bmo} alt={'img'} />
        <h3>Video</h3>
      </Link>
      <Link to={'/list?type=image'}>
        <img src={bmo} alt={'img'} />
        <h3>Image</h3>
      </Link>
      <Link to={'/list?type=gif'}>
        <img src={bmo} alt={'img'} />
        <h3>Gif</h3>
      </Link>
    </StyledContentTypeList>
  );
}

const StyledContentTypeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  gap: 1em;

  & > a {
    width: 100%;
    display: flex;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    & > img {
      object-fit: cover;
      overflow: hidden;
    }
    & > h3 {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      color: white;
    }
  }
`;
