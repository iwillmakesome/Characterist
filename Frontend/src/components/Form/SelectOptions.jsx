import { StyledInput } from './formStyles.js';

export default function SelectOptions({
  id,
  title,
  options,
  onChangeHandler,
  inputRef,
}) {
  return (
    <StyledInput>
      <label htmlFor={`selectOptions${id}`}>{title}</label>
      <select
        id={'selectOptions${id}'}
        ref={inputRef}
        onChange={onChangeHandler}
      >
        {Array.isArray(options) &&
          options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
    </StyledInput>
  );
}
