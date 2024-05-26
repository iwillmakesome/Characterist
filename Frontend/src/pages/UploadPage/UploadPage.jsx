// react
import { useState, useRef, useEffect } from 'react';

// styles
import {
  StyledUploadPage,
  StyledSelectedContents,
  StyledInfoInputs,
  StyledInfoInput,
  StyledSelectedTags,
} from './UploadPageStyles.js';

// components
import Title from '@/components/Title.jsx';
import SubmitBtn from '@/components/Form/SubmitBtn.jsx';
import SelectFileBtn from '@/components/Form/SelectFileBtn.jsx';
import InputText from '@/components/Form/InputText.jsx';
import SelectOptions from '@/components/Form/SelectOptions.jsx';
import SearchSelect from '@/components/Form/SearchSelect.jsx';

// utils
import { useStore } from '@/components/Form/searchSelectStore.js';
import { customAxios } from '@/utils/customAxios.js';
import data from '@public/developDatas/charactersData.json';

export default function UploadPage() {
  const inputTitleRef = useRef();
  const inputTypeRef = useRef();
  const inputTagsRef = useRef();
  const videoRef = useRef();
  const searchCharacterRef = useRef();

  const [contentData, setContentData] = useState({
    file: undefined,
    title: '',
    fileType: '',
    character: '',
    media: '',
    tags: [],
  });

  const setSearchedData = useStore((state) => state.setSearchedData);
  const selectedData = useStore((state) => state.selectedData);

  const fileSelectHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const type = e.target.files[0].type.split('/')[0];
      setContentData((cur) => {
        const temp = { ...cur };
        temp.file = reader.result;
        temp.fileType = type;
        return temp;
      });
    };
  };

  const titleChangeHandler = () => {
    contentData.title = inputTitleRef.current.value;
  };

  const fileTypeChangeHandler = () => {
    contentData.fileType = inputTypeRef.current.value;
  };

  const tagInputHandler = (e) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };

  const addTag = () => {
    const inputValue = inputTagsRef.current.value;
    if (inputValue === '') return;
    setContentData((cur) => {
      const temp = { ...cur };
      temp.tags.push(inputValue);
      return temp;
    });
    inputTagsRef.current.value = '';
  };

  const removeTag = (key) => {
    setContentData((cur) => {
      const temp = { ...cur };
      temp.tags.splice(key, 1);
      return temp;
    });
  };

  const getSearchSelectData = async (searchKeyword) => {
    // backend connection
    try {
      const res = await data
        .filter((character) => {
          if (character.name.includes(searchKeyword)) return character;
        })
        .slice(0, 5);
      setSearchedData(res);
    } catch (err) {
      return;
    }

    // try {
    //   const searchedSelectRes = await customAxios.get();
    //   return searchedSelectRes.data;
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const submitHandler = async () => {
    console.log(contentData);
    if (!contentData.file) {
      alert('File is required.');
      return;
    }
    if (!contentData.title) {
      alert('Title is required.');
      inputTitleRef.current.focus();
      return;
    }
    if (!contentData.character) {
      alert('Character is required.');
      searchCharacterRef.current.focus();
      return;
    }
    alert('submitted');

    // backend connection
    // try {
    //   customAxios.post(`/scenes/upload`, contentData);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  useEffect(() => {
    contentData.character = selectedData.name;
    contentData.media = selectedData.media;
  }, [selectedData]);

  return (
    <>
      <StyledUploadPage>
        <Title title={'Upload Scene'} />
        <SelectFileBtn
          title={'Select File'}
          fileSelectHandler={fileSelectHandler}
        />

        {contentData.file && (
          <StyledSelectedContents>
            {contentData.fileType === 'video' && (
              <video ref={videoRef} src={contentData.file} controls={true} />
            )}
            {contentData.fileType === 'image' && (
              <img src={contentData.file} alt={'image'} />
            )}
          </StyledSelectedContents>
        )}

        <StyledInfoInputs>
          <InputText
            id={1}
            title={'Title'}
            onChangeHandler={titleChangeHandler}
            inputRef={inputTitleRef}
          />

          <SelectOptions
            id={1}
            title={'File Type'}
            options={[
              { value: 'image', name: 'IMAGE' },
              { value: 'video', name: 'VIDEO' },
              { value: 'gif', name: 'GIF' },
            ]}
            inputRef={inputTypeRef}
            onChangeHandler={fileTypeChangeHandler}
          />

          <StyledInfoInput>
            <InputText
              id={2}
              title={'Tags'}
              onKeyDownHandler={tagInputHandler}
              inputRef={inputTagsRef}
            />
            <button onClick={addTag}>Add Tag</button>
          </StyledInfoInput>

          {contentData.tags[0] && (
            <StyledSelectedTags>
              {Array.isArray(contentData.tags) &&
                contentData.tags.map((tag, key) => (
                  <div
                    key={key}
                    onClick={() => {
                      removeTag(key);
                    }}
                  >
                    {tag}
                  </div>
                ))}
            </StyledSelectedTags>
          )}

          <SearchSelect
            title={'Character & Media Content'}
            getData={getSearchSelectData}
            link={{ to: '/add_character', title: 'Add Character' }}
            inputRef={searchCharacterRef}
          />

          <SubmitBtn submitHandler={submitHandler} />
        </StyledInfoInputs>
      </StyledUploadPage>
    </>
  );
}
