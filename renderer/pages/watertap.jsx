import React, { Fragment, useState } from "react";
import Link from "next/dist/client/link";
import Calender from "../components/molecules/calender/calendar";
import styles from '../public/styles/pages/watertap.module.scss';
import Text from "../components/atoms/text/text";

function WaterTap(){

    const [selectedDay,GetDay] = useState({year: 0, month: 0, day: 0});
    return (
        <Fragment>
            <div id="body" className={styles.body}>
                <div className="column flexCenter" style={{gap:16}}>
                    <div className="column flexCenter">
                        <Calender getDay={GetDay} />
                    </div>
                    <div className="column" style={{justifyContent:'center',rowGap:12,width:400}}>
                        <div>{selectedDay.month}월 {selectedDay.day}일 LIST</div>
                        <Text isHover="true">
                            <span>제목없음</span>
                            <span> : 3821 자,(목표량의 80% 달성)</span>
                        </Text>
                        <Link href="/writer"><div className={styles.dashBox}>작성하기 (+)</div></Link>
                    </div>  
                </div>
                <Link href='/menu'>PREV</Link>
                {/* <div className=""> 300 DORA</div> */}

            </div>
        </Fragment>
    );
}
export default WaterTap;