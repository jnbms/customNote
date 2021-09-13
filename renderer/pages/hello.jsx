import React from "react";
import Link from "next/link";
import {Column, Row} from '../styledComponent/common';
export default function hello(){
    
    return <Row>
        <div>HELLO</div>
        <Column>
            <div>HELLO</div>
            <Row>
                <Link href="/home"><div>HELLO</div></Link>
                <div>HELLO</div>
            </Row>
            <div>HELLO</div>
        </Column>
        <div>HELLO</div>
    </Row>;
}