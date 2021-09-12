import React, { Fragment, useState } from "react";
import styles from './input.module.scss';
function Input(){

    const [text, setText] = useState("");
    const onChange = (e) => { changeText(e); autoResize(e);}
    const changeText = (e) => {const value = e.target.value; setText(value);}
    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        console.log(e.target.scrollHeight);
    }
    const textSize = text.length;
    const onlyTextSize = text.replace(/\s/g,'').length;
    const whiteSpaceSize = textSize - onlyTextSize;

    const [question,setQuestion] = useState("솔직한 내맘");
    const [description,setDescription] = useState("오우 힘들긴 하네");

    return (
        <Fragment>
            <div id="tools" className={styles.tools}>
                <div className={styles.title}>{question}</div>
                <div style={{fontSize:'16px'}}>"{description}"</div>
            </div>
            <textarea 
                spellCheck="false"
                type="text"
                placeholder="여기에 입력하세요."
                className={styles.textarea}
                onChange={onChange}
                />
            <div id="tools" className={styles.view}>
                <div>글자 수 : {textSize}</div>
                {/* <div>공백 제외 글자 수 : {onlyTextSize}</div> */}
                <div>공백 수 : {whiteSpaceSize}</div>
            </div>
        </Fragment>
    );
}
export default Input;