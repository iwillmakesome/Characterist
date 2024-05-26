// react
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// styles
import { StyledListPage } from './SearchPageStyles.js';

// components
import Title from '@/components/Title.jsx';
import List from '@/components/List/List.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';

// utils
import { customAxios } from '@/utils/customAxios.js';
import data from '@public/developDatas/searchData.json';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = parseInt(searchParams.get('page')) || 1;

  const [searchData, setSearchData] = useState();
  const lastPageRef = useRef();
  const [pageList, setPageList] = useState();

  const getData = () => {
    const start = (page - 1) * 6;
    const end = start + 6;
    const paginatedData = data.slice(start, end);
    lastPageRef.current = Math.floor(data.length / 6);
    console.log(lastPageRef.current);

    setSearchData(() => {
      const start = (page - 1) * 6;
      const end = start + 6;
      return data.slice(start, end);
    });

    setPageList(() => {
      const temp = [];
      for (let i = page - 2; i <= page + 2; i++) {
        if (i > 0 && i <= lastPageRef.current) {
          temp.push(i);
        }
      }
      return temp;
    });
    setSearchData(paginatedData);

    // customAxios
    //   .get(`/views?search=${query}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setListData(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  useEffect(() => {
    getData();
  }, [query, page]);

  return (
    <StyledListPage>
      <Title title={`Search : ${query}`}>
        <div>sort</div>
      </Title>
      <List listData={searchData} />

      <Pagination lastPage={lastPageRef.current} pageList={pageList} />
    </StyledListPage>
  );
}
