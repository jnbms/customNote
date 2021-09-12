import React, {Fragment} from 'react';
import styles from './box.module.scss';

function Box(props){
    const {children, color, onClick} = props; 
    return(
        <Fragment>
            <div className={styles.box} color={color} onClick={onClick}>
                {children}
            </div>
        </Fragment>
    );
}
export default Box;
