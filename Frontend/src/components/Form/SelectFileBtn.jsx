import { StyledSelectFileBtn } from './uploadStyles.js';

export default function SelectFileBtn({ title, fileSelectHandler }) {
  return (
    <StyledSelectFileBtn>
      <label htmlFor={'file'}>{title}</label>
      <input type='file' id={'file'} onChange={fileSelectHandler} />
    </StyledSelectFileBtn>
  );
}
