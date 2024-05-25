import { StyledSubmitBtn } from './formStyles.js';

export default function SubmitBtn({ submitHandler }) {
  return <StyledSubmitBtn onClick={submitHandler}>Submit</StyledSubmitBtn>;
}
