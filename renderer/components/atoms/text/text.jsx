import React, { Children, Fragment } from "react";
import styles from './text.module.scss';

function Text(props){
    
    const {children, isHover} = props;

    return <div isHover={isHover} className={styles.text}>
        {children}
    </div>;
}
export default Text;