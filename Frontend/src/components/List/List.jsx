import { StyledList, StyledPagination } from '@/components/List/ListStyles.js';
import ContentCell from '@/components/ContentCell/ContentCell.jsx';
import Pagination from '@/components/Pagination/Pagination.jsx';

export default function List({ listData }) {
  return (
    <StyledList>
      <div>
        {Array.isArray(listData) &&
          listData.map((file, key) => (
            <ContentCell key={key} content={file}></ContentCell>
          ))}
      </div>
    </StyledList>
  );
}
