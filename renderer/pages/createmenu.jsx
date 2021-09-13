import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Textarea from '../components/atoms/textarea/textarea';
import Button from '../components/atoms/button/button';

export default function Createmenu() {

    const obj = {
        title: "제목",
        subtitle : [
        {
            id: 1,
            subject: "주제1",
            discription: "설명1"
        },
        {
            id: 2,
            subject: "주제2",
            discription: "설명2"
        },
        ]
    }
    return (
        // <div>
        //     <div className="center full" style={{width:'100%'}}>
        //         <div className="column flexCenter" style={{gap:24,width:'50%'}}>
        //                 <div className="column flexCenter" style={{width:'100%',gap:8}}>
        //                     <div className="titleText">제목.</div>
        //                     {/* <div className="subTitleText">"어떤 주제에 대해 다룰건가요?"</div> */}

        //                     <Textarea onChange={(e)=>{titleOne = e;console.log(titleOne)}}></Textarea>
        //                 </div>

        //                 <div className="column flexCenter" style={{width:'100%',gap:8}}>
        //                     <div className="titleText">설명.</div>
        //                     {/* <div className="subTitleText">"어떤 목적을 달성하기 위해 작성하나요?"</div> */}
        //                     <Textarea onChange={(e)=>setConfig({...config,subtitle:e.target.value})}></Textarea>
        //                 </div>

        //             <div className="row" style={{width:'100%',justifyContent:'space-evenly'}}>
        //                 <div className="layerButton"><Button defaultText="◁ 이전으로"/></div>
        //                 <div className="layerButton"
        //                 ><Button defaultText="💾저장"/></div>
        //                 {/* <div className="layerButton"><Button defaultText="⚙️ 설정"/></div> */}
        //                 <div className="layerButton"><Button defaultText="추가하기 ▷"/></div>
        //             </div>
        //             <Link href="/menu">PREV</Link>

        //         </div>
        //     </div>
        // </div>
        0
    );
}
