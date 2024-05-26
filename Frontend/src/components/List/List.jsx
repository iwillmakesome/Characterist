import { StyledList } from '@/components/List/ListStyles.js';
import ContentCell from '@/components/ContentCell/ContentCell.jsx';

export default function List({ listData }) {
  return (
    <StyledList>
      {Array.isArray(listData) &&
        listData.map((file, key) => (
          <ContentCell key={key} contentData={file}></ContentCell>
        ))}
    </StyledList>
  );
}
