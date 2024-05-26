// react
import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// styles
import {
  StyledCharacterPage,
  StyledProfile,
  StyledTagsContainer,
} from '@/pages/CharacterPage/CharacterPageStyles.js';

// components
import List from '@/components/List/List.jsx';
import Tags from '@/components/Tags/Tags.jsx';
import Title from '@/components/Title.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import Loading from '@/components/Loading/Loading.jsx';
import ProfileTags from '@/components/ProfileTags/ProfileTags.jsx';

// utils
import { customAxios } from '@/utils/customAxios.js';
import BMO from '@public/jake.png';
import data from '@public/developDatas/characterData.json';

export default function CharacterPage() {
  const [searchParams] = useSearchParams();
  const [characterData, setCharacterData] = useState({});

  const getData = () => {
    setCharacterData(data);
  };

  useEffect(() => {
    // characterData.name = searchParams.get('name');

    setCharacterData((cur) => {
      const temp = { ...cur };
      temp.name = searchParams.get('name');
      return temp;
    });
    getData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <StyledCharacterPage>
        <StyledProfile>
          <div>
            <img src={BMO} />
            <img src={BMO} />
          </div>
          <div>
            <h1>{characterData.name}</h1>
            <h3>
              <Link to={`/media/${characterData.media}`}>
                {characterData.media}
              </Link>
            </h3>
            <ProfileTags data={data} />
          </div>
        </StyledProfile>

        <Title title={'Tags'}></Title>
        <Tags tags={characterData.tags} />

        <Title title={'Media Contents'}></Title>
        <List listData={characterData.list} />
        <Pagination />
      </StyledCharacterPage>
    </>
  );
}
