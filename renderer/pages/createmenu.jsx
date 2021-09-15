import React, {useState} from 'react';
import Link from 'next/link';
import Textarea from '../components/atoms/textarea/textarea';
// import Button from '../components/atoms/button/button';
import { Column, Row, Size, Center, Button} from '../styledComponent/common';
import Text from '../bones/Text';
import useInput from '../hooks/useInput';

// const useInput = (initialValue) => {
//     const [value, setValue] = useState(initialValue);
//     const onChange = (event) => {
//         const {target: {value}} = event;
//         setValue(value)
//         console.log(value);
//     }
//     return {value, onChange};
// }

export default function Createmenu() {

    const title = useInput();
    const subtitle = useInput();

    const Obj = {
        title: "제목",
        discription: "설명",
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
        <Size height="100vh">
           <Center>
                <Size width="60%" height="30%">
                     <Column justify="center" align="center" style={{gap:8}}>
                         
                        <Column align="flex-start" style={{gap:4}}>
                            <Text size="1.1" content="제목."/>
                            <Textarea {...title}></Textarea>
                        </Column>

                        <Column align="flex-start" style={{gap:4}}>
                        <Text size="1.1" content="설명."/>
                            <Textarea {...subtitle}></Textarea>
                        </Column>

                    {/* PAGE에 바로 오지 않고 molecules로 제작하여 가져오도록 수정. */}
                    <Size height="10%" width="100%">
                        <Row justify="space-evenly" className="buttonGroupHoverScale">
                            <Link href="/menu"><Text size="0.8" content="◁ 이전으로"/></Link>
                            <Text size="0.8" content="💾저장"/>
                            <Text size="0.8" content="⚙️ 설정"/>
                            <Text size="0.8" content="추가하기 ▷"/>
                        </Row>
                    </Size>

                    {/* <Row>
                        <Link href="/menu">
                            <Text size="0.8" content="PREV" style={{color:"blue"}}/>
                        </Link>
                    </Row> */}
                </Column>
              </Size>
            </Center>
        </Size>
    );
}
