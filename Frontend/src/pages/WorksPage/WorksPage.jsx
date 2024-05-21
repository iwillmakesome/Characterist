import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

// styles
import { StyledWorksPage } from '@/pages/WorksPage/WorksPageStyles.js';

// components
import ProfileTags from '@/components/ProfileTags/ProfileTags.jsx';
import BMO from '../../../public/bmo.png';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading/Loading.jsx';
import Title from '@/components/Title.jsx';
import Tags from '@/components/Tags/Tags.jsx';
import GroupViewBy from '@/components/GroupView/GroupViewBy.jsx';

export default function WorksPage() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
  const [searchParams] = useSearchParams();
  const worksName = searchParams.get('name');
  const [data, setData] = useState();

  useEffect(() => {
    setData({
      characterWorks: 'Adventure Time',
      flame: 0,
      star: 0,
      contents: 0,
      image: 0,
      video: 0,
      gif: 0,
    });
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
      <StyledWorksPage>
        <div>
          <img src={BMO} />
          <img src={BMO} />
          <div>
            <h2>{worksName}</h2>
            <ProfileTags data={data} />
          </div>
        </div>
        <Title title={'Characters'} />
        {/*<GroupViewBy imgFiles={{}} expansion={true} />*/}
        <Title title={'Tags'} />
        <Tags />
      </StyledWorksPage>
    </>
  );
}
