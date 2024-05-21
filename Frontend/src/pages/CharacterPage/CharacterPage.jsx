import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import {
  StyledCharacterPage,
  StyledProfile,
} from '@/pages/CharacterPage/CharacterPageStyles.js';

// components
import List from '@/components/List/List.jsx';
import Tags from '@/components/Tags/Tags.jsx';
import Title from '@/components/Title.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';
import Loading from '@/components/Loading/Loading.jsx';
import ProfileTags from '@/components/ProfileTags/ProfileTags.jsx';
import BMO from '../../../public/bmo.png';

export default function CharacterPage() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
  const [searchParams] = useSearchParams();
  const characterName = searchParams.get('name');
  const [data, setData] = useState();
  const tags = [
    { tagName: 'test', tagLink: 'test' },
    { tagName: 'test', tagLink: 'test' },
    { tagName: 'test', tagLink: 'test' },
    { tagName: 'test', tagLink: 'test' },
  ];
  const [listData, setListData] = useState();

  useEffect(() => {
    // setData({
    //   characterWorks: 'Adventure Time',
    //   flame: 0,
    //   star: 0,
    //   contents: 0,
    //   image: 0,
    //   video: 0,
    //   gif: 0,
    // });
    setListData([
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
      { id: 18, type: 'image', title: 'test', flame: 10, star: 20 },
    ]);
  }, []);

  const getData = () => {
    axios
      .get(`${BACKEND_HOST}/views?id=${queryId}`)
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(true);
      });
  };

  if (data === undefined) {
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
            <h2>{characterName}</h2>
            <h3>{data.characterWorks}</h3>
            <ProfileTags data={data} />
          </div>
        </StyledProfile>
        <Title title={'Tags'}></Title>
        <Tags tags={tags} />
        <List listData={listData} />
        <Pagination />
      </StyledCharacterPage>
    </>
  );
}
