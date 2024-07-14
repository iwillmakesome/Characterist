// react
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import { StyledAutoComplete, StyledSearchBar } from './SearchBarStyles.js';
import { colors } from '../../styles/contants.js';

// components

// utils
import MagnifierSvg from '@/components/svgs/MagnifierSvg.jsx';
import { useDebounce } from '@/hooks/useDebounce.js';
import data from '@public/developDatas/searchKeywordData.json';

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [autoCompleteKeyword, setAutoCompleteKeyword] = useState('');
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const searchInputRef = useRef();

  const [autoCompleteDebounce, stopAutoCompleteDebounce] = useDebounce(
    setAutoCompleteKeyword,
    500
  );

  const searchOnKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler(searchKeyword);
    }
  };

  const searchOnChangeHandler = () => {
    const keyword = searchInputRef.current.value;
    setSearchKeyword(keyword);

    if (keyword === '') {
      setAutoCompleteKeyword('');
      stopAutoCompleteDebounce();
    } else {
      autoCompleteDebounce(keyword);
    }
  };

  const searchOnClickHandler = (e) => {
    e.stopPropagation();
  };

  const backgroundOnClickHandler = (e) => {
    if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
      setAutoCompleteKeyword('');
    }
  };

  const autoCompleteKeywordOnClickHandler = (item) => {
    if (item === 'no result') return;
    searchHandler(item);
  };

  const searchHandler = (keyword) => {
    if (keyword === '') return;

    searchInputRef.current.value = '';
    setSearchKeyword('');
    setAutoCompleteKeyword('');
    stopAutoCompleteDebounce();
    navigate(`/search?query=${keyword}&page=1`);
  };

  useEffect(() => {
    if (autoCompleteKeyword === '') return;
    const autoComplete = data
      .filter((item) => {
        if (
          item.title.toLowerCase().includes(autoCompleteKeyword.toLowerCase())
        )
          return item;
      })
      .map((item) => item.title);

    if (autoComplete[0]) {
      setAutoCompleteResults(autoComplete);
    } else {
      setAutoCompleteResults(['no result']);
    }
  }, [autoCompleteKeyword]);

  useEffect(() => {
    document.addEventListener('click', backgroundOnClickHandler);
    return () => {
      document.removeEventListener('click', backgroundOnClickHandler);
    };
  }, []);

  return (
    <>
      <StyledSearchBar>
        {autoCompleteKeyword && (
          <StyledAutoComplete onClick={searchOnClickHandler}>
            {autoCompleteResults.map((item, key) => (
              <button
                key={key}
                onClick={() => {
                  autoCompleteKeywordOnClickHandler(item);
                }}
              >
                {item}
              </button>
            ))}
          </StyledAutoComplete>
        )}
        <div>
          <input
            ref={searchInputRef}
            onKeyDown={searchOnKeyDownHandler}
            onChange={searchOnChangeHandler}
            onClick={searchOnClickHandler}
          />
          <button
            onClick={() => {
              searchHandler(searchKeyword);
            }}
          >
            <MagnifierSvg color={colors.purple1} width={20} height={20} />
          </button>
        </div>
      </StyledSearchBar>
    </>
  );
}
