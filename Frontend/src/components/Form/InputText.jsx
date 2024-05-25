import { forwardRef } from 'react';
import { StyledInput } from './uploadStyles.js';

const InputText = forwardRef(
  ({ id, title, onChangeHandler, onKeyDownHandler }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={`inputText${id}`}>{title}</label>
        <input
          id={`inputText${id}`}
          ref={ref}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </StyledInput>
    );
  }
);

export default InputText;
