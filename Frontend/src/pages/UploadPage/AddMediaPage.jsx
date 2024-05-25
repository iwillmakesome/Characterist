import { useState } from 'react';

// components
import Title from '@/components/Title.jsx';

// styles
import { StyledAddMediaPage } from './AddMediaPageStyles.js';
import { StyledInfoInput } from './UploadPageStyles.js';

export default function AddMediaPage() {
  const [contentFile, setContentFile] = useState();
  const [fileType, setFileType] = useState();
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

  return (
    <>
      <StyledAddMediaPage>
        <Title title={'Add Media Content'}></Title>
        {!contentFile && (
          <>
            <label htmlFor={'file'}>Select File</label>
            <input type='file' id={'file'} onChange={fileSelectHandler} />
          </>
        )}

        {contentFile && (
          <>
            {fileType === 'video' && (
              <video ref={videoRef} src={contentFile} controls={true} />
            )}
            {fileType === 'image' && <img src={contentFile} alt={'image'} />}
            <label htmlFor={'title'}>Media Content Name</label>
            <input id={'title'} />
            <button>
              <h3>Submit</h3>
            </button>
          </>
        )}
      </StyledAddMediaPage>
    </>
  );
}
