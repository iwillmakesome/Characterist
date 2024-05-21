import { StyledSearchBar } from './SearchBarStyles.js';
import MagnifierSvg from '../svgs/MagnifierSvg.jsx';
import { colors } from '../../styles/contants.js';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const searchInputHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  const searchHandler = () => {
    navigate(`/list?search=${searchInputRef.current.value}`);
  };

  return (
    <>
      <StyledSearchBar>
        <div>
          <input ref={searchInputRef} onKeyDown={searchInputHandler} />
          <button onClick={searchHandler}>
            <MagnifierSvg color={'white'} width={20} height={20} />
          </button>
        </div>
      </StyledSearchBar>
    </>
  );
}
