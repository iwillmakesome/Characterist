import { StyledGroupView } from './GroupViewByStyles.js';
import ContentCell from '../ContentCell/ContentCell.jsx';
import ProfileCell from '@/components/ContentCell/ProfileCell.jsx';

function checkExpansion(groupData, expansion) {
  if (expansion) {
    return groupData.map((data, key) => (
      <ProfileCell key={key} contentData={data} />
    ));
  } else {
    return groupData.map((data, key) => (
      <ContentCell key={key} contentData={data} />
    ));
  }
}

export default function GroupViewBy({ groupData, expansion }) {
  return (
    <>
      <StyledGroupView $expansion={expansion}>
        {checkExpansion(groupData, expansion)}
      </StyledGroupView>
    </>
  );
}
