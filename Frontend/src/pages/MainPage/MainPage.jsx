// react
import { useEffect, useState } from 'react';

// styles
import { StyledMainPage } from './MainPageStyles.js';

// components
import Title from '@/components/Title.jsx';
import Slide from '@/components/Slide/Slide.jsx';
import GroupViewBy from '@/components/GroupView/GroupViewBy.jsx';
import ContentTypeList from '@/components/ContentTypeList/ContentTypeList.jsx';
import Tags from '@/components/Tags/Tags.jsx';
import Loading from '@/components/Loading/Loading.jsx';
// utils
import { customAxios } from '@/utils/customAxios.js';
import loadingCheck from '@/utils/loadingCheck.jsx';

export default function MainPage() {
  const [recentPostData, setRecentPostData] = useState();
  const [lowViewData, setLowViewData] = useState();
  const [highViewData, setHighViewData] = useState();
  const [mediaData, setMediaData] = useState();
  const [charactersData, setCharactersData] = useState();
  const [tagsData, setTagsData] = useState();
  const [typeData, setTypeData] = useState();

  const fetchData = async () => {
    try {
      const recentPostRes = await customAxios.get(`/scenes/recent`);
      setRecentPostData(recentPostRes.data);

      const lowViewRes = await customAxios.get(`/scenes/low`);
      setLowViewData(lowViewRes.data);

      const highViewRes = await customAxios.get(`/scenes/high`);
      setHighViewData(highViewRes.data);

      const mediaDataRes = await customAxios.get(`/media`);
      setMediaData(mediaDataRes.data);

      const charactersDataRes = await customAxios.get(`/characters`);
      setCharactersData(charactersDataRes.data);

      const tagsDataRes = await customAxios.get(`/tags`);
      setTagsData(tagsDataRes.data);

      const typeDataRes = await customAxios.get(`/files/type`);
      setTypeData(typeDataRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledMainPage>
      <div>
        <Title title={'Recent Post'}></Title>
        {loadingCheck(recentPostData, <Slide files={recentPostData} />)}
      </div>

      <div>
        <Title title={'Low Flame Suggest'}></Title>
        {loadingCheck(
          lowViewData,
          <GroupViewBy groupData={lowViewData} key={1} />
        )}
      </div>
      <div>
        <Title title={'High Flame Suggest'}></Title>
        {loadingCheck(
          highViewData,
          <GroupViewBy groupData={highViewData} key={2} />
        )}
      </div>

      <div>
        <Title title={'Media Contents'}></Title>
        {loadingCheck(
          mediaData,
          <GroupViewBy groupData={mediaData} key={3} expansion={true} />
        )}
      </div>
      <div>
        <Title title={'Characters'}></Title>
        {loadingCheck(
          charactersData,
          <GroupViewBy groupData={charactersData} key={4} expansion={true} />
        )}
      </div>

      <div>
        <Title title={'Tags'}></Title>
        {loadingCheck(tagsData, <Tags tags={tagsData} />)}
      </div>
      <div>
        <Title title={'Type'}></Title>
        {loadingCheck(typeData, <ContentTypeList />)}
      </div>
    </StyledMainPage>
  );
}
