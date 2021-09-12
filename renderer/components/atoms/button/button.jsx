import React, {Fragment,useState} from "react";
import styles from './button.module.scss';

function Button(props){
    const {children, defaultText, hoverText, onClick, border} = props;
    const [text, setText] = defaultText != null ? useState(defaultText) : useState(children);
    // const onMouseOver = (onHover) => seText(onHover);

    return <Fragment>
        <div 
            className={styles.button}
            onMouseEnter={()=>{hoverText != null ? setText(hoverText) : {}}}
            onMouseLeave={()=>{defaultText != null ? setText(defaultText) : {}}}
            onClick = {onClick}
            border = {border}
        >
            {text}
        </div>
    </Fragment>
}
export default Button;