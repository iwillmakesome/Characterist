import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import { StyledListPage } from './ListPageStyles.js';

// components
import Title from '@/components/Title.jsx';
import List from '@/components/List/List.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';

export default function ListPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const [listData, setListData] = useState();

  const getData = () => {
    const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

    axios
      .get(`${BACKEND_HOST}/views?search=${query}`)
      .then((res) => {
        console.log(res.data);
        setListData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <StyledListPage>
      <Title title={`Search : ${query}`}>
        <div>sort</div>
      </Title>
      <List listData={listData} />
      <Pagination />
    </StyledListPage>
  );
}
