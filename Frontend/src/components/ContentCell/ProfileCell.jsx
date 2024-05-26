import { Link } from 'react-router-dom';
import { StyledContentCell, StyledProfileInfo } from './ContentCellStyles.js';

export default function ProfileCell({ contentData }) {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

  return (
    <>
      <StyledContentCell>
        <Link to={`/scene/${contentData.id}`}>
          <img
            src={`${BACKEND_HOST}/files/preview?type=${contentData.type}&id=${contentData.id}`}
            alt={'img'}
          />
        </Link>
        <StyledProfileInfo>
          <h3>
            <Link to={`/scene/${contentData.id}`}>{contentData.title}</Link>
          </h3>
        </StyledProfileInfo>
      </StyledContentCell>
    </>
  );
}
