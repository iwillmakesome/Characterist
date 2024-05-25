import { useRef, useState } from 'react';

import {
  StyledAddCharacterPage,
  StyledSelectedContents,
  StyledInfoInputs,
} from './AddCharacterPageStyles.js';

import Title from '@/components/Title.jsx';
import SelectFileBtn from '@/components/Form/SelectFileBtn.jsx';
import InputText from '@/components/Form/InputText.jsx';
import SubmitBtn from '@/components/Form/SubmitBtn.jsx';
import SearchSelect from '../../components/Form/SearchSelect.jsx';

export default function AddCharacterPage() {
  const [contentData, setContentData] = useState({
    file: undefined,
    name: '',
  });
  const inputNameRef = useRef();
  const inputMediaRef = useRef();

  const fileSelectHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const type = e.target.files[0].type.split('/')[0];
      console.log(type);
      if (type === 'video') {
        alert('File must be image');
        return;
      }
      setContentData((cur) => {
        const temp = { ...cur };
        temp.file = reader.result;
        return temp;
      });
    };
  };

  const nameChangeHandler = () => {
    contentData.title = inputNameRef.current.value;
  };

  const getMediaData = () => {};

  const submitHandler = async () => {
    console.log(contentData);
    if (!contentData.file) {
      alert('File is required.');
      return;
    }
    if (!contentData.name) {
      alert('File is required.');
      return;
    }

    alert('submitted');

    // backend connection
  };

  return (
    <StyledAddCharacterPage>
      <Title title={'Add Character'}></Title>
      <SelectFileBtn
        title={'Select Image'}
        fileSelectHandler={fileSelectHandler}
      />

      {contentData.file && (
        <StyledSelectedContents>
          <img src={contentData.file} alt={'image'} />
        </StyledSelectedContents>
      )}

      <StyledInfoInputs>
        <InputText
          id={1}
          title={'Character Name'}
          inputRef={inputNameRef}
          onChange={nameChangeHandler}
        />

        <SearchSelect
          title={'Media Content'}
          getData={getMediaData}
          link={{ to: '/add_media', title: 'Add Media Content' }}
          inputRef={inputMediaRef}
        />

        <SubmitBtn submitHandler={submitHandler} />
      </StyledInfoInputs>
    </StyledAddCharacterPage>
  );
}
