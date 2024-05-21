import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import copyToClipboard from '@/utils/copyToClipboard.js';
import { customAxios } from '@/utils/customAxios.js';

// styles
import {
  StyledContent,
  StyledInfo,
  StyledInfoBasic,
  StyledInfoExtra,
  StyledButtons,
  StyledExtras,
  StyledScenePage,
  StyledTags,
} from './ScenePageStyles.js';

// components
import FlameSvg from '@/components/svgs/FlameSvg.jsx';
import StarSvg from '@/components/svgs/StarSvg.jsx';
import Loading from '@/components/Loading/Loading.jsx';

export default function ScenePage() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');

  const [content, setContent] = useState();

  const fetchData = async () => {
    try {
      const contentRes = await customAxios.get(`/scenes?id=${queryId}`);
      setContent(contentRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const incFlame = () => {
    customAxios.patch(`/content/flame?id=${queryId}`);
  };
  const incStar = () => {
    axios.patch(`${BACKEND_HOST}/content/star?id=${queryId}`);
  };

  useEffect(() => {
    fetchData();
    // incFlame();
  }, []);

  if (content === undefined || !Array.isArray(content)) {
    return <Loading />;
  }

  if (content) {
    return (
      <StyledScenePage>
        <StyledContent>
          {content.type === 'image' ? (
            <img
              src={`${BACKEND_HOST}/files?location=${content.location}`}
              alt={'img'}
            />
          ) : (
            <>
              <video controls={true}>
                <source
                  src={`${BACKEND_HOST}/files?location=${content.location}`}
                />
              </video>
            </>
          )}
        </StyledContent>

        <StyledInfo>
          <StyledInfoBasic>
            <h1>{content.title}</h1>
            <Link to={`/character/${content.people}`}>{content.people}</Link>
            <Link to={`/works/${content.view_group}`}>
              {content.view_group}
            </Link>

            <StyledTags>
              <Link to={`/list?type=${content.type}`} key={0}>
                {content.type}
              </Link>
              {content.tags.map((tag, key) => (
                <Link to={`/list?search=${tag}`} key={key + 1}>
                  {tag}
                </Link>
              ))}
            </StyledTags>
          </StyledInfoBasic>

          <StyledInfoExtra>
            <StyledExtras>
              <div>ID : {content.id}</div>
              <div>Date : {content.date}</div>
            </StyledExtras>
            <StyledButtons>
              <button
                onClick={() => {
                  copyToClipboard(
                    content.location,
                    `파일 위치가 복사되었습니다.\n${content.location}`
                  );
                }}
              >
                Open File Location
              </button>
              <button>
                <FlameSvg color={'white'} />
                <div>{content.flame}</div>
              </button>
              <button onClick={incStar}>
                <StarSvg color={'white'} />
                <div>{content.star}</div>
              </button>
            </StyledButtons>
          </StyledInfoExtra>
        </StyledInfo>
      </StyledScenePage>
    );
  }
}
