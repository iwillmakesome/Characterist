import Tags from '../Tags/Tags.jsx';
import { Link } from 'react-router-dom';
import { StyledContentCell, StyledInfo } from './ContentCellStyles.js';
import FlameSvg from '../svgs/FlameSvg.jsx';
import StarSvg from '../svgs/StarSvg.jsx';
import { colors } from '@/styles/contants.js';

export default function ContentCell({ content }) {
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
        <StyledInfo>
          <Link to={`/scene?id=${content.id}`}>
            <h3>{content.title}</h3>
          </Link>
          <div>
            <div>
              <FlameSvg color={colors.yellow1} width={10} height={10} />
              <h4>{content.flame}</h4>
            </div>
            <div>
              <StarSvg color={colors.yellow1} width={10} height={10} />
              <h4>{content.star}</h4>
            </div>
          </div>
          <Tags
            tags={[
              {
                tagName: content.character,
                tagType: 'character',
              },
              {
                tagName: content.works,
                tagType: 'works',
              },
            ]}
          />
        </StyledInfo>
      </StyledContentCell>
    </>
  );
}
