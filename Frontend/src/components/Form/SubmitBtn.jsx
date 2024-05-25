import { StyledSubmitBtn } from './uploadStyles.js';

export default function SubmitBtn({ submitHandler }) {
  return <StyledSubmitBtn onClick={submitHandler}>Submit</StyledSubmitBtn>;
}
