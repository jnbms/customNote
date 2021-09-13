import React, {Fragment} from 'react';
import Link from 'next/link';
import styles from '../public/styles/pages/home.module.scss';
import {Column, Row, Size, Text} from '../styledComponent/common';

import Calendar from '../components/molecules/calender/calendar';
import Input from '../components/atoms/input/input';
import Button from '../components/atoms/button/button';


function Home() {
  return (
      // <div id="body" className={styles.body}>
      
        <Size height="100vh">
          <Column align="center" justify="center">
            <Text size="1">당신을 위한 기적</Text>
            <Text className={styles.typingText}>미라클 노트.</Text>
            <Link href='/hello'><Button border="" defaultText="시작"></Button></Link>
            {/* <Link href='/menu'><Button border="" defaultText="도움말"></Button></Link> */}
            {/* <hr width="128px"/> */}
            <p style={{fontSize:16}}>@created by 다빈치</p>
          </Column>
        </Size>
  );
};
export default Home;
