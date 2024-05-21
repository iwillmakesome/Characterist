import {ReactComponent as Lock} from '../../assets/svgs/Lock.svg';

export default function LockSvg ({color, width, height}){
    return <>
        <Lock fill={color} width={width} height={height} />
    </>
}
