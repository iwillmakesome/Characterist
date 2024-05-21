import { StyledLoading } from '@/components/Loading/LoadingStyles.js';
import LoadingGif from '../../../public/Loading.gif';

export default function Loading() {
  return (
    <StyledLoading>
      <div>
        <img src={LoadingGif} />
        <h2>Loading</h2>
      </div>
    </StyledLoading>
  );
}
