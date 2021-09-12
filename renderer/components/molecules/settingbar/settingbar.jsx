import React from "react";
import Link from 'next/link';
import Button from '../../atoms/button/button';

function SettringBar(props){
    const {prevUrl, nextUrl} = props;
    return (
    <div className="hiddenMenu">
    <Link href={prevUrl}><div className="layerButton"><Button defaultText="◁ PREV"/></div></Link>
    <Link href={nextUrl}><div className="layerButton"><Button defaultText="▷ NEXT"/></div></Link>
    <div className="layerButton"><Button defaultText="💾 저장" /></div>
    <div className="layerButton"><Button defaultText="⚙️ 설정"/></div>
    </div>
    );
}
export default SettringBar;