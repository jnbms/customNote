import React, {useState} from 'react';
import Link from 'next/link';
import {Column, Size, Button, Center} from '../styledComponent/common';
import Text from '../bones/Text';

function Menu() {

  // useToggle
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => { modal == true ? setModal(false) : setModal(true);};
  
  return (
    <Size height="100vh">
      <Center>
        <Size height="100%" width="50%"> 
         <Column justify="center" align="center" style={{gap:24}}>

          <Text content="목록"/>

          <Link href="/watertap">
              <Size height="3em" width="100%">
               <Button borderStyle="solid" className="buttonHoverAnimation">
                  <Center>
                    <Text size="1" weight="bold" content="수도꼭지 틀기"/>
                  </Center>
                </Button>
              </Size>
          </Link> 

          <Link href="/createmenu">
             <Size height="3em" width="100%">
               <Button borderStyle="dashed" className="buttonHoverTransition">
                  <Center>
                   <Text content="(+)"/>
                 </Center>
               </Button>
             </Size>
          </Link>

          <Link href="/home">
            <Text size="0.8" content="PREV" style={{color:'blue'}}/>  
          </Link>
          
          {/* <div onClick={toggleModal}>CLICK</div>
      
      {modal? 
      <div className="layer center">
        <div className="bgShadow"></div>
        <div className="modal">
          <Size height="30%" width="30%">
            <Button onClick={toggleModal}>생성</Button>
          </Size>
        </div>
      </div> 
      :""} */}

        </Column>
       </Size>
      </Center>
    </Size>
  );
};

export default Menu;
