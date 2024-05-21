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
import CharacterModal from './CharacterModal.jsx';
import BMO from '@public/bmo.png';

export default function UploadPage() {
  const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

  const inputTitle = useRef();
  const inputType = useRef();
  const inputTags = useRef();

  const videoRef = useRef();

  const [contentFile, setContentFile] = useState();
  const [fileType, setFileType] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [contentData, setContentData] = useState({
    title: '',
    fileType: '',
    character: '',
    works: '',
    tags: [],
  });

  // functions

  const fileSelectHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const type = e.target.files[0].type.split('/')[0];
      setFileType(type);
      setContentFile(reader.result);
    };
  };

  const tagInputHandler = (e) => {
    if (e.key === 'Enter') {
      const inputValue = inputTags.current.value;
      setContentData((cur) => {
        const temp = { ...cur };
        temp.tags.push(inputValue);
        return temp;
      });
      inputTags.current.value = '';
    }
  };

  const addTag = () => {
    const inputValue = inputTags.current.value;
    setContentData((cur) => {
      const temp = { ...cur };
      temp.tags.push(inputValue);
      return temp;
    });
    inputTags.current.value = '';
  };

  const removeTag = (key) => {
    setContentData((cur) => {
      const temp = { ...cur };
      temp.tags.splice(key, 1);
      return temp;
    });
  };

  const inputChangeHandler = (e) => {
    setContentData((cur) => {
      const temp = { ...cur };
      if (e.target.id === 'title') {
        temp.title = e.target.value;
      } else if (e.target.id === 'character') {
        temp.character = e.target.value;
      } else if (e.target.id === 'works') {
        temp.works = e.target.value;
      } else if (e.target.id === 'fileType') {
        temp.fileType = e.target.value;
      }
      return temp;
    });
  };

  const submitHandler = () => {
    console.log(contentData);
    if (!contentData.title) {
      alert('Title is required.');
      inputTitle.current.focus();
      return;
    }
    // try {
    //   customAxios.post(`/scenes/upload`, contentData);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  useEffect(() => {
    if (!contentFile) return;
    inputType.current.value = fileType;
    setContentData((cur) => {
      const temp = { ...cur };
      temp.fileType = fileType;
      return temp;
    });
  }, [fileType]);
  const characters = ['asdf', 'bbb', 'ccc'];

  return (
    <>
      {isModalOpen && <CharacterModal setIsModalOpen={setIsModalOpen} />}
      <StyledUploadPage>
        <Title title={'Upload'} />
        {!contentFile && (
          <>
            <label htmlFor={'file'}>Select File</label>
            <input type='file' id={'file'} onChange={fileSelectHandler} />
          </>
        )}

        {contentFile && (
          <>
            <StyledSelectedContents>
              {fileType === 'video' && (
                <video ref={videoRef} src={contentFile} controls={true} />
              )}
              {fileType === 'image' && <img src={contentFile} alt={'image'} />}
            </StyledSelectedContents>
            <StyledInfoInputs>
              <StyledInfoInput>
                <label htmlFor={'title'}>Title</label>
                <input
                  id={'title'}
                  ref={inputTitle}
                  onChange={inputChangeHandler}
                />
              </StyledInfoInput>
              <StyledInfoInput>
                <label htmlFor={'fileType'}>File Type</label>
                <select
                  id={'fileType'}
                  ref={inputType}
                  onChange={inputChangeHandler}
                >
                  <option value={'image'}>IMAGE</option>
                  <option value={'video'}>VIDEO</option>
                  <option value={'gif'}>GIF</option>
                </select>
              </StyledInfoInput>
              <StyledInfoInput>
                <label htmlFor={'tags'}>Tags</label>
                <input
                  id={'tags'}
                  ref={inputTags}
                  onKeyDown={tagInputHandler}
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

              <StyledCharacterSelect>
                <div>
                  <h3>Character</h3>
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    Add Character
                  </button>
                </div>
                <div>
                  <img src={BMO} alt='Character' />
                  <div>
                    <div>
                      <input />
                      <h4>Adventure Time</h4>
                    </div>
                    <div>
                      <button>Auto Complete</button>
                      <button>Auto Complete</button>
                      <button>Auto Complete</button>
                    </div>
                  </div>
                </div>
              </StyledCharacterSelect>

              <button onClick={submitHandler}>
                <h3>Submit</h3>
              </button>
            </StyledInfoInputs>
          </>
        )}
      </StyledUploadPage>
    </>
  );
}
