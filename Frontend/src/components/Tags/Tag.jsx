// react
import { Link } from 'react-router-dom';

// styles
import { StyledTag } from './TagStyles.js';

function setLinkTo(tagName, tagType) {
  if (tagType === 'character') {
    return `/character/${tagName}`;
  } else if (tagType === 'works') {
    return `/media/${tagName}`;
  } else if (tagType === 'fileType') {
    return `/list?type=${tagName}`;
  } else {
    return `/list?search=${tagName}`;
  }
}

export default function Tag({ tagName, tagType }) {
  return (
    <>
      <Link to={setLinkTo(tagName, tagType)}>
        <StyledTag>{tagName}</StyledTag>
      </Link>
    </>
  );
}
