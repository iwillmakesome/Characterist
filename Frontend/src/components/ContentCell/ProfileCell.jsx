import { Link } from 'react-router-dom';
import { StyledContentCell, StyledProfileInfo } from './ContentCellStyles.js';

export default function ProfileCell({ content }) {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

  return (
    <>
      <StyledContentCell>
        <Link to={`/scene?id=${content.id}`}>
          <img
            src={`${BACKEND_HOST}/files/preview?type=${content.type}&id=${content.id}`}
            alt={'img'}
          />
          {/* no backend test */}
          {/*<img src={content.img} />*/}
        </Link>
        <StyledProfileInfo>
          <Link to={`/scene?id=${content.id}`}>
            <h3>{content.title}</h3>
          </Link>
        </StyledProfileInfo>
      </StyledContentCell>
    </>
  );
}
