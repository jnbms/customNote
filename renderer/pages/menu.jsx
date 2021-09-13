import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../public/styles/pages/menu.module.scss'
// import Text from '../components/atoms/text/text';
// import Button from '../components/atoms/button/button';
import Input from '../components/atoms/input/input';
import Textarea from '../components/atoms/textarea/textarea';

import {Column, Row, Size, Button, Space, Center} from '../styledComponent/common';
import Text from '../bones/Text';

function Menu() {

  const [modal, setModal] = useState(false);
  const toggleModal = () => { modal == true ? setModal(false) : setModal(true);};
  return (
    <Size height="100vh">
      <Center>
        <Size height="100%" width="50%"> 
         <Column justify="center" align="center" style={{gap:24}}>

          <Text content="목록"/>

          <Link href="/watertap">
              <Size height="3em" width="100%">
               <Button className="buttonHoverAnimation">
                  <Center>
                    <Text size="1" weight="bold" content="수도꼭지 틀기"/>
                  </Center>
                </Button>
              </Size>
          </Link> 

          <Link href="/createmenu">
             <Size height="3em" width="100%" className={styles.dashBox}>
               <Center>
                <Text content="(+)"/>
               </Center>
             </Size>
          </Link>

          <Link href="/home">
            <Text content="PREV" style={{color:'blue'}}/>  
          </Link>
      
      {modal? 
      <div className="layer center">
        <div className="bgShadow"></div>
        <div className="modal">
        <Text>
          <div style={{height:200,width:300,textAlign:'center',padding:24}}>
            <div class="row" style={{justifyContent:'space-around'}}>

            </div>
            <Button onClick={toggleModal} border="">생성</Button>
            <Button onClick={toggleModal} border="">취소</Button>
          </div>
        </Text>
        </div>
      </div> 
      :""}

        </Column>
       </Size>
      </Center>
    </Size>
  );
};

export default Menu;
