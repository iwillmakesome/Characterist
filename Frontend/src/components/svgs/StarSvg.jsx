import { ReactComponent as Star } from '../../assets/svgs/Star.svg';

export default function StarSvg({ color, width, height }) {
  return (
    <>
      <Star fill={color} width={width} height={height} />
    </>
  );
}
