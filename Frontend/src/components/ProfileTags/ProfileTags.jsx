import { StyledProfileTags } from '@/components/ProfileTags/ProfileTagsStyles.js';
import FlameSvg from '@/components/svgs/FlameSvg.jsx';
import StarSvg from '@/components/svgs/StarSvg.jsx';

export default function ProfileTags({ data }) {
  return (
    <StyledProfileTags>
      <div>
        <FlameSvg color={'white'} width={15} height={15} />
        <div>{data.flame}</div>
      </div>
      <div>
        <StarSvg color={'white'} width={15} height={15} />
        <div>{data.star}</div>
      </div>
      <div>
        <h4>Contents</h4>
        <div>{data.contents}</div>
      </div>
      <div>
        <h4>IMAGE</h4>
        <div>{data.image}</div>
      </div>
      <div>
        <h4>VIDEO</h4>
        <div>{data.video}</div>
      </div>
      <div>
        <h4>GIF</h4>
        <div>{data.gif}</div>
      </div>
    </StyledProfileTags>
  );
}
