import { ReactComponent as Triangle } from '../../assets/svgs/Triangle.svg';

export default function TriangleSvg({ color, width, height }) {
  return (
    <>
      <Triangle fill={color} width={width} height={height} />
    </>
  );
}
