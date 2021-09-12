// const month = Array(12).fill().map((element,index)=>index + 1 + '월');//sequence_generator

import React, { Fragment, useState, useEffect } from "react";
import styles from './calendar.module.scss';
import Box from '../../atoms/box/box';
import Button from "../../atoms/button/button";

function Calender(props){
    const {getDay} = props;
    useEffect(()=>{getDay({year:thisYear, month:thisMonth, day:thisDate})},[]);

    const today = new Date();
    const thisDate = today.getDate();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();

    const weeks = ['일','월','화','수','목','금','토'];

    const fistDay = (ofMonth) => new Date(year,(ofMonth - 1),1).getDay();
    const lastDay = (ofMonth) => new Date(year,ofMonth,0).getDate();
    const dates = (ofMonth) => Array(lastDay(ofMonth)).fill().map((element,index)=>index + 1);
    const emtyBoxNum = (ofMonth) => Array(fistDay(ofMonth)).fill().map((element,index)=>index + 1);

    const [month, setMonth] = useState(thisMonth);
    const [year, setYear] = useState(thisYear);
    const nextMonth = () => { if(month == 12){setYear(year + 1);setMonth(1);} else {setMonth(month + 1);} };
    const prevMonth = () => { if(month == 1){setYear(year - 1);setMonth(12);} else {setMonth(month - 1);} };

    const setGetDay = (selectYear,selectMonth,selectDay) => {
        const selectedDay = {year:selectYear, month:selectMonth, day:selectDay};
        getDay(selectedDay);
    }
    return (
        <Fragment>
            <div className={styles.line}>
                <Button defaultText="◁" hoverText="◀" onClick={prevMonth}/>
                <div>{month}월</div>
                <Button defaultText="▷" hoverText="▶" onClick={nextMonth}/>
            </div>
            <div id="table" className={styles.table}>
                {weeks.map((week)=>{return <Box key={week} color="week">{week}</Box>})}
                {emtyBoxNum(month).map((num)=>{return <div key={num}></div>})}
                {dates(month).map((day)=>{
                    return day == thisDate && month == thisMonth && year == thisYear ? 
                    <Box key={day} color="today" onClick={()=>setGetDay(year,month,day)}>{day}</Box> :
                    <Box key={day} onClick={()=>setGetDay(year,month,day)}>{day}</Box>})}
            </div>
        </Fragment>
    );
}
export default Calender;