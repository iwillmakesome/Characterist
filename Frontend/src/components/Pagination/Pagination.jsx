import { StyledPagination, StyledPaginationBtn } from './StyledPagination.js';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Pagination({ lastPage, pageList }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'));

  const isLeft = (page) => {
    if (page !== 1) {
      return (
        <button
          onClick={() => {
            searchParams.set('page', page - 1);
            setSearchParams(searchParams);
          }}
        >
          {'<'}
        </button>
      );
    }
  };

  const isRight = (page, lastPage) => {
    if (page !== lastPage) {
      return (
        <button
          onClick={() => {
            searchParams.set('page', page + 1);
            setSearchParams(searchParams);
          }}
        >
          {'>'}
        </button>
      );
    }
  };

  useEffect(() => {
    console.log(pageList);
  }, []);

  return (
    <StyledPagination>
      {isLeft(page)}

      {Array.isArray(pageList) &&
        pageList.map((index, key) => (
          <StyledPaginationBtn
            key={key}
            selected={index === page}
            onClick={() => {
              if (index === page) return;
              searchParams.set('page', index);
              setSearchParams(searchParams);
            }}
          >
            {index}
          </StyledPaginationBtn>
        ))}

      {isRight(page, lastPage)}
    </StyledPagination>
  );
}
