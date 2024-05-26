// react
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// styles
import { StyledWorksPage } from '@/pages/MediaPage/MediaPageStyles.js';

// components
import ProfileTags from '@/components/ProfileTags/ProfileTags.jsx';
import Loading from '@/components/Loading/Loading.jsx';
import Title from '@/components/Title.jsx';
import Tags from '@/components/Tags/Tags.jsx';
import GroupViewBy from '@/components/GroupView/GroupViewBy.jsx';

// utils
import { customAxios } from '@/utils/customAxios.js';
import BMO from '@public/bmoBG.png';
import List from '../../components/List/List.jsx';

export default function MediaPage() {
  const [searchParams] = useSearchParams();
  const worksName = searchParams.get('name');
  const [mediaData, setMediaData] = useState();

  useEffect(() => {
    setMediaData({
      media: 'Adventure Time',
      flame: 10,
      star: 20,
      contents: 30,
      image: 40,
      video: 50,
      gif: 60,
      tags: [
        { tagName: 'video', tagType: 'video' },
        { tagName: 'video', tagType: 'video' },
        { tagName: 'video', tagType: 'video' },
        { tagName: 'video', tagType: 'video' },
        { tagName: 'video', tagType: 'video' },
        { tagName: 'video', tagType: 'video' },
      ],
      characters: [
        {
          id: 18,
          type: 'image',
          title: 'test',
          flame: 10,
          star: 20,
          character: 'BMO',
          media: 'AT',
        },
        {
          id: 18,
          type: 'image',
          title: 'test',
          flame: 10,
          star: 20,
          character: 'BMO',
          media: 'AT',
        },
        {
          id: 18,
          type: 'image',
          title: 'test',
          flame: 10,
          star: 20,
          character: 'BMO',
          media: 'AT',
        },
        {
          id: 18,
          type: 'image',
          title: 'test',
          flame: 10,
          star: 20,
          character: 'BMO',
          media: 'AT',
        },
        {
          id: 18,
          type: 'image',
          title: 'test',
          flame: 10,
          star: 20,
          character: 'BMO',
          media: 'AT',
        },
        {
          id: 18,
          type: 'image',
          title: 'test',
          flame: 10,
          star: 20,
          character: 'BMO',
          media: 'AT',
        },
      ],
    });
  }, []);

  const getData = () => {};

  if (!mediaData) {
    return <Loading />;
  }

  return (
    <StyledWorksPage>
      <div>
        <img src={BMO} />
        <img src={BMO} />
        <div></div>
        <div>
          <h1>{mediaData.media}</h1>
          <ProfileTags data={mediaData} />
        </div>
      </div>

      <Title title={'Characters'} />
      <GroupViewBy groupData={mediaData.characters} expansion={true} />

      <Title title={'Tags'} />
      <Tags tags={mediaData.tags} />

      <Title title={'Scenes'} />
      <List listData={mediaData.characters} />
    </StyledWorksPage>
  );
}
