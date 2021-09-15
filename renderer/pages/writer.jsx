import React, {useState} from "react";
import styles from '../public/styles/pages/writer.module.scss';
import Link from 'next/link';
import Input from "../components/atoms/input/input";
import Button from "../components/atoms/button/button";
import SettringBar from "../components/molecules/settingbar/settingbar";
import { Center, Column, Size} from "../styledComponent/common";

function Writer(){
    const [day,setDay] = useState({year: 0,month: 0,day: 0});

    return <Size height="100vh">
        <Column align="center">
            <Size width="80%">
                <Column justify="center" align="center" style={{gap:20}}>
                    <Input/>
                    <Input/>
                </Column>
                <SettringBar prevUrl="/watertap" nextUrl=""/>
            </Size>
        </Column>
    </Size>
}
export default Writer;