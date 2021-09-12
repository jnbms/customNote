import React, { Children, Fragment } from "react";
import styles from './text.module.scss';

function Text(props){
    
    const {children} = props;

    return <div className={styles.text}>
        {children}
    </div>;
}
export default Text;