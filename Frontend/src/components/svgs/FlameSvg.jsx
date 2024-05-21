import { ReactComponent as Flame } from '../../assets/svgs/Flame.svg';

export default function FlameSvg({ color, width, height }) {
  return (
    <>
      <Flame fill={color} width={width} height={height} />
    </>
  );
}
