// react
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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

// utils
import copyToClipboard from '@/utils/copyToClipboard.js';
import { customAxios } from '@/utils/customAxios.js';
import data from '@public/developDatas/sceneData.json';
import sampleImage from '@public/bmo.png';
import sampleVideo from '@public/sample.mp4';

export default function ScenePage() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
  const sceneId = useParams();

  const [contentData, setContentData] = useState();
  const [flame, setFlame] = useState(0);
  const [star, setStar] = useState(0);

  const getData = async () => {
    setContentData(data);
    setFlame(data.flame);
    setStar(data.star);
    console.log(sceneId.id);
    // try {
    //   const contentDataRes = await customAxios.get(`/scenes?id=${sceneId}`);
    //   setContentData(contentDataRes.data);
    //   flameRef.current = contentDataRes.data.flame;
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const incFlame = () => {
    setFlame((cur) => {
      return cur + 1;
    });
    // customAxios.patch(`/contentData/flame?id=${queryId}`);
  };
  const incStar = () => {
    setStar((cur) => {
      return cur + 1;
    });
    // customAxios.patch(`${BACKEND_HOST}/contentData/star?id=${queryId}`);
  };

  useEffect(() => {
    getData();
    incFlame();
  }, []);

  const renderContent = () => {
    const src = `${BACKEND_HOST}/files?location=${contentData.location}`;

    if (contentData.type === 'image') {
      return <img src={sampleImage} alt={'img'} />;
    } else {
      return (
        <video controls={true}>
          <source src={sampleVideo} />
        </video>
      );
    }
  };

  if (!contentData) {
    return <Loading />;
  }

  if (contentData) {
    return (
      <StyledScenePage>
        <StyledContent>{renderContent()}</StyledContent>

        <StyledInfo>
          <StyledInfoBasic>
            <h1>{contentData.title}</h1>
            <Link to={`/character/${contentData.character}`}>
              {contentData.character}
            </Link>
            <Link to={`/media/${contentData.media}`}>{contentData.media}</Link>

            <StyledTags>
              <Link to={`/list?type=${contentData.type}`}>
                {contentData.type}
              </Link>
              {contentData.tags.map((tag, key) => (
                <Link to={`/list?search=${tag}`} key={key + 1}>
                  {tag}
                </Link>
              ))}
            </StyledTags>
          </StyledInfoBasic>

          <StyledInfoExtra>
            <StyledExtras>
              <div>ID : {contentData.id}</div>
              <div>Date : {contentData.date}</div>
            </StyledExtras>
            <StyledButtons>
              <button
                onClick={() => {
                  copyToClipboard(
                    window.location.href,
                    `URL copied to clipboard\n[ ${window.location.href} ]`
                  );
                }}
              >
                Copy URL
              </button>
              <button>
                <FlameSvg color={'white'} />
                <div>{flame}</div>
              </button>
              <button onClick={incStar}>
                <StarSvg color={'white'} />
                <div>{star}</div>
              </button>
            </StyledButtons>
          </StyledInfoExtra>
        </StyledInfo>
      </StyledScenePage>
    );
  }
}
