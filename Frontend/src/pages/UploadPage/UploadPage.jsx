import { customAxios } from '@/utils/customAxios.js';
import { useState, useRef, useEffect } from 'react';

// styles
import {
  StyledUploadPage,
  StyledSelectedContents,
  StyledInfoInputs,
  StyledInfoInput,
  StyledSelectedTags,
  StyledCharacterSelect,
} from './UploadPageStyles.js';

// components
import Title from '@/components/Title.jsx';
import SubmitBtn from '@/components/Form/SubmitBtn.jsx';
import SelectFileBtn from '@/components/Form/SelectFileBtn.jsx';
import InputText from '@/components/Form/InputText.jsx';
import SelectOptions from '@/components/Form/SelectOptions.jsx';
import SelectC from './Select.jsx';

export default function UploadPage() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

  const inputTitleRef = useRef();
  const inputTypeRef = useRef();
  const inputTagsRef = useRef();

  const videoRef = useRef();

  const [contentData, setContentData] = useState({
    file: undefined,
    title: '',
    fileType: '',
    character: '',
    media: '',
    tags: [],
  });

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

  const submitHandler = () => {
    console.log(contentData);
    // if (!contentData.title) {
    //   alert('Title is required.');
    //   inputTitleRef.current.focus();
    //   return;
    // }

    // try {
    //   customAxios.post(`/scenes/upload`, contentData);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <>
      <StyledUploadPage>
        <Title title={'Form'} />
        {!contentData.file && (
          <SelectFileBtn
            title={'Select File'}
            fileSelectHandler={fileSelectHandler}
          />
        )}

        {contentData.file && (
          <>
            <StyledSelectedContents>
              {contentData.fileType === 'video' && (
                <video ref={videoRef} src={contentData.file} controls={true} />
              )}
              {contentData.fileType === 'image' && (
                <img src={contentData.file} alt={'image'} />
              )}
            </StyledSelectedContents>

            <StyledInfoInputs>
              <InputText
                id={1}
                title={'Title'}
                onChangeHandler={titleChangeHandler}
                ref={inputTitleRef}
              />

              <SelectOptions
                id={1}
                title={'File Type'}
                options={[
                  { value: 'image', name: 'IMAGE' },
                  { value: 'video', name: 'VIDEO' },
                  { value: 'gif', name: 'GIF' },
                ]}
                ref={inputTypeRef}
                onChangeHandler={fileTypeChangeHandler}
              />

              <StyledInfoInput>
                <InputText
                  id={2}
                  title={'Tags'}
                  onKeyDownHandler={tagInputHandler}
                  ref={inputTagsRef}
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

              <SelectC title={'Character & Media Content'} />

              <SubmitBtn submitHandler={submitHandler} />
            </StyledInfoInputs>
          </>
        )}
      </StyledUploadPage>
    </>
  );
}
