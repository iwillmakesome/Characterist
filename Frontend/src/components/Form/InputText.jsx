import { StyledInput } from './formStyles.js';

export default function InputText({
  id,
  title,
  onChangeHandler,
  onKeyDownHandler,
  inputRef,
}) {
  return (
    <StyledInput>
      <label htmlFor={`inputText${id}`}>{title}</label>
      <input
        id={`inputText${id}`}
        ref={inputRef}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </StyledInput>
  );
}
