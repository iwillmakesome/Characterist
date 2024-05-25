import { StyledCharacterSelect } from './UploadPageStyles.js';

import BMO from '@public/bmo.png';

import { useDebounce } from '@/hooks/useDebounce.js';
import { useEffect, useRef, useState } from 'react';
import data from '@public/developDatas/charactersData.json';

export default function SelectC({ title }) {
  const inputRef = useRef();
  const [searchKeyword, setSearchKeyword] = useState('');
  const debounce = useDebounce(setSearchKeyword, 300);

  const [searchedData, setSearchedData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    name: '',
    media: '',
    image: undefined,
  });

  const onSearchHandler = () => {
    const inputValue = inputRef.current.value;
    setSelectedData({
      name: '',
      media: '',
      image: undefined,
    });
    if (!inputValue) {
      setSearchKeyword('');
    } else {
      debounce(inputValue);
    }
  };

  const onSelectHandler = (index) => {
    setSelectedData(searchedData[index]);
    inputRef.current.value = searchedData[index].name;
    setSearchKeyword('\n');
  };

  useEffect(() => {
    const filteredData = data
      .filter((character) => {
        if (character.name.includes(searchKeyword)) return character;
      })
      .slice(0, 5);
    setSearchedData(filteredData);
  }, [searchKeyword]);

  return (
    <StyledCharacterSelect>
      <div>
        <h3>{title}</h3>
        <button>Add Character</button>
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
            <input ref={inputRef} onChange={onSearchHandler} />
            <h4>{selectedData.media}</h4>
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
    </StyledCharacterSelect>
  );
}
