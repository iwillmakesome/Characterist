import { StyledGroupView } from './GroupViewByStyles.js';
import ContentCell from '../ContentCell/ContentCell.jsx';
import ProfileCell from '@/components/ContentCell/ProfileCell.jsx';

function checkExpansion(imgFiles, expansion) {
  if (expansion) {
    return imgFiles.map((file, key) => (
      <ProfileCell key={key} content={file} count={key} />
    ));
  } else {
    return imgFiles.map((file, key) => (
      <ContentCell key={key} content={file} count={key} />
    ));
  }
}

export default function GroupViewBy({ imgFiles, expansion }) {
  return (
    <>
      <StyledGroupView $expansion={expansion}>
        {checkExpansion(imgFiles, expansion)}
      </StyledGroupView>
    </>
  );
}
