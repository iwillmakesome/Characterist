import {
  StyledSlide,
  StyledBtn,
  StyledPagination,
  StyledSections,
  StyledSection,
  StyledPageBtn,
} from './SlideStyles.js';
import TriangleSvg from '../svgs/TriangleSvg.jsx';

import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags.jsx';
import FlameSvg from '@/components/svgs/FlameSvg.jsx';
import { colors } from '@/styles/contants.js';
import StarSvg from '@/components/svgs/StarSvg.jsx';

export default function Slide({ files }) {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
  const [currentSlide, setCurrentSlide] = useState(0);

  const timer = useRef();

  const slideBtnHandler = (side) => {
    setCurrentSlide((cur) => {
      cur += side;
      if (cur >= files.length) cur = 0;
      if (cur < 0) cur = files.length - 1;
      return cur;
    });
  };

  const slidePageBtnHandler = (page) => {
    setCurrentSlide(page);
  };

  const slideTimer = () => {
    timer.current = setInterval(() => {
      slideBtnHandler(1);
    }, 5000);
  };

  useEffect(() => {
    slideTimer();
    return () => {
      clearInterval(timer.current);
      console.log('timer off');
    };
  }, []);

  return (
    <>
      <StyledSlide>
        <div>
          <StyledSections>
            {files.map((content, key) => (
              <StyledSection key={key} $page={currentSlide}>
                <div>
                  <img
                    src={`${BACKEND_HOST}/files/preview?type=${content.type}&id=${content.id}`}
                    alt={'img'}
                  />
                  {/* no backend test */}
                  {/*<img src={content.img} />*/}
                </div>
                <div>
                  <Link key={key} to={`/scene?id=${content.id}`}>
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
                </div>
              </StyledSection>
            ))}
          </StyledSections>
          <StyledBtn
            $side={'left'}
            onClick={() => {
              slideBtnHandler(-1);
            }}
          >
            <TriangleSvg color={'white'} />
          </StyledBtn>
          <StyledBtn
            $side={'right'}
            onClick={() => {
              slideBtnHandler(1);
            }}
          >
            <TriangleSvg color={'white'} />
          </StyledBtn>
          <StyledPagination>
            {files.map((file, key) => (
              <StyledPageBtn
                selected={key === currentSlide}
                key={key}
                onClick={() => {
                  slidePageBtnHandler(key);
                }}
              />
            ))}
          </StyledPagination>
        </div>
      </StyledSlide>
    </>
  );
}
