import { StyledTag } from '@/components/Tags/TagStyles.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function setLinkTo(tagName, tagType) {
  if (tagType === 'character') {
    return `/character?name=${tagName}`;
  } else if (tagType === 'works') {
    return `/works?name=${tagName}`;
  } else if (tagType === 'fileType') {
    return `/list?type=${tagName}`;
  } else {
    return `/list?search=${tagName}`;
  }
}

export default function Tag({ tagName, tagType }) {
  return (
    <>
      <StyledTag>
        <Link to={setLinkTo(tagName, tagType)}>{tagName}</Link>
      </StyledTag>
    </>
  );
}
