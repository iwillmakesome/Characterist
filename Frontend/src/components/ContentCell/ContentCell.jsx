// react
import { Link } from 'react-router-dom';

// styles
import { StyledContentCell, StyledInfo } from './ContentCellStyles.js';
import { colors } from '@/styles/contants.js';

// components
import Tags from '../Tags/Tags.jsx';
import FlameSvg from '../svgs/FlameSvg.jsx';
import StarSvg from '../svgs/StarSvg.jsx';

export default function ContentCell({ contentData }) {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

  return (
    <StyledContentCell>
      <Link to={`/scene/${contentData.id}`}>
        <img
          src={`${BACKEND_HOST}/files/preview?type=${contentData.type}&id=${contentData.id}`}
          alt={'img'}
        />
      </Link>
      <StyledInfo>
        <h3>
          <Link to={`/scene/${contentData.id}`}>{contentData.title}</Link>
        </h3>
        <div>
          <div>
            <FlameSvg color={colors.yellow1} width={10} height={10} />
            <h4>{contentData.flame}</h4>
          </div>
          <div>
            <StarSvg color={colors.yellow1} width={10} height={10} />
            <h4>{contentData.star}</h4>
          </div>
        </div>
        <Tags
          tags={[
            {
              tagName: contentData.character,
              tagType: 'character',
            },
            {
              tagName: contentData.media,
              tagType: 'media',
            },
          ]}
        />
      </StyledInfo>
    </StyledContentCell>
  );
}
