import { StyledSearchSelect } from './formStyles.js';

import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce.js';
import { useStore } from './searchSelectStore.js';
import { Link } from 'react-router-dom';

export default function SearchSelect({ title, getData, link, inputRef }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [nameInputDebounce, stopNameInputDebounce] = useDebounce(
    setSearchKeyword,
    300
  );

  const searchedData = useStore((state) => state.searchedData);
  const selectedData = useStore((state) => state.selectedData);
  const setSelectedData = useStore((state) => state.setSelectedData);

  const onSearchChangeHandler = () => {
    const inputValue = inputRef.current.value;
    setSelectedData([]);

    if (!inputValue) {
      setSearchKeyword('');
      stopNameInputDebounce();
    } else {
      nameInputDebounce(inputValue);
    }
  };

  const onSelectHandler = (index) => {
    setSelectedData(searchedData[index]);
    inputRef.current.value = searchedData[index].name;
    setSearchKeyword('\n');
  };

  const onDeleteSelectionHandler = () => {
    setSelectedData({});
    inputRef.current.value = '';
    setSearchKeyword('');
  };

  useEffect(() => {
    getData(searchKeyword);
  }, [searchKeyword]);

  return (
    <StyledSearchSelect>
      <div>
        <h3>{title}</h3>
        <Link to={link.to}>{link.title}</Link>
      </div>
      <div>
        <div>
          {selectedData.image ? (
            <img src={`../../public/${selectedData.image}`} alt='Character' />
          ) : (
            <div>Character not selected</div>
          )}
        </div>
        <div>
          <div>
            <input ref={inputRef} onChange={onSearchChangeHandler} />
            {selectedData.media && (
              <div>
                <h4>{selectedData.media}</h4>
                <button onClick={onDeleteSelectionHandler}>x</button>
              </div>
            )}
          </div>
          <div>
            {searchKeyword !== '\n' && !searchedData[0] && (
              <button>no result</button>
            )}
            {searchKeyword === '\n' && (
              <button>Character is selected, please continue</button>
            )}
            {Array.isArray(searchedData) &&
              searchedData.map((data, key) => (
                <button
                  key={key}
                  onClick={() => {
                    onSelectHandler(key);
                  }}
                >
                  <div>{data.name}</div>
                  <div>{data.media}</div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </StyledSearchSelect>
  );
}
