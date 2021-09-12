import React, {Fragment} from 'react';
import Link from 'next/link';
import styles from '../public/styles/pages/home.module.scss';

import Calendar from '../components/molecules/calender/calendar';
import Input from '../components/atoms/input/input';
import Button from '../components/atoms/button/button';


function Home() {
  return (
    <Fragment>
      <div id="body" className={styles.body}>
        <div style={{fontSize:20,margin:8}}>당신을 위한 기적</div>
        <div className={styles.typingText}>미라클 노트.</div>
        <Link href='/menu'><Button border="" defaultText="시작"></Button></Link>
        <p style={{fontSize:16}}>@create by 다빈치</p>
      </div>
    </Fragment>
  );
};
export default Home;
