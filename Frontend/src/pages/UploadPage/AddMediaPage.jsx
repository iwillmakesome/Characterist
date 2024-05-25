import { useRef, useState } from 'react';

// components
import Title from '@/components/Title.jsx';
import SelectFileBtn from '@/components/Form/SelectFileBtn.jsx';
import InputText from '@/components/Form/InputText.jsx';
import SubmitBtn from '@/components/Form/SubmitBtn.jsx';

// styles
import { StyledAddMediaPage } from './AddMediaPageStyles.js';
import { StyledSelectedContents } from './AddMediaPageStyles.js';
import { StyledInfoInputs } from './AddMediaPageStyles.js';

export default function AddMediaPage() {
  const [contentData, setContentData] = useState({
    file: undefined,
    title: '',
  });

  const inputTitleRef = useRef();

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

  const titleChangeHandler = () => {
    contentData.title = inputTitleRef.current.value;
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

    alert('submitted');

    // backend connection
  };

  return (
    <StyledAddMediaPage>
      <Title title={'Add Media Content'}></Title>
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
          title={'Media Content Name'}
          onChangeHandler={titleChangeHandler}
          inputRef={inputTitleRef}
        />

        <SubmitBtn submitHandler={submitHandler} />
      </StyledInfoInputs>
    </StyledAddMediaPage>
  );
}
