import { forwardRef } from 'react';
import { StyledInput } from './uploadStyles.js';

const SelectOptions = forwardRef(
  ({ id, title, options, onChangeHandler }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={`selectOptions${id}`}>File Type</label>
        <select id={'selectOptions${id}'} ref={ref} onChange={onChangeHandler}>
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
);

export default SelectOptions;
