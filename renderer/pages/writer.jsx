import React, { Fragment, useState } from "react";
import styles from '../public/styles/pages/writer.module.scss';
import Link from 'next/link';
import Input from "../components/atoms/input/input";
import Button from "../components/atoms/button/button";
import SettringBar from "../components/molecules/settingbar/settingbar";

function Writer(){
    const [day,setDay] = useState({year:0,month:0,day:0});

    return <Fragment>
        
        <div className="column flexCenter"> 
            <Input/>
            <hr width="525"/>
            <Input/>
        </div>

        <SettringBar prevUrl="/watertap" nextUrl=""/>
    </Fragment>
}
export default Writer;