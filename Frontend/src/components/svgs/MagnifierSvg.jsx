import {ReactComponent as Magnifier} from '../../assets/svgs/Magnifier.svg';

export default function MagnifierSvg ({color, width, height}){
    return <>
        <Magnifier fill={color} width={width} height={height}/>
    </>
}
