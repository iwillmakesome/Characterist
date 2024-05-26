import { StyledSearchBar } from './SearchBarStyles.js';
import MagnifierSvg from '../svgs/MagnifierSvg.jsx';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchInputRef = useRef();

  const searchOnKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  const searchOnChangeHandler = () => {
    setSearchKeyword(searchInputRef.current.value);
  };

  const searchHandler = () => {
    if (searchKeyword === '') return;
    searchInputRef.current.value = '';
    navigate(`/search?query=${searchKeyword}&page=1`);
  };

  return (
    <>
      <StyledSearchBar>
        <div>
          <input
            ref={searchInputRef}
            onKeyDown={searchOnKeyDownHandler}
            onChange={searchOnChangeHandler}
          />
          <button onClick={searchHandler}>
            <MagnifierSvg color={'white'} width={20} height={20} />
          </button>
        </div>
      </StyledSearchBar>
    </>
  );
}
