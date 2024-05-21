import Tag from '@/components/Tags/Tag.jsx';
import { StyledTags } from './TagStyles.js';

export default function Tags({ tags }) {
  return (
    <>
      <StyledTags>
        {Array.isArray(tags) &&
          tags.map((tag, key) => (
            <Tag key={key} tagName={tag.tagName} tagType={tag.tagType} />
          ))}
      </StyledTags>
    </>
  );
}
