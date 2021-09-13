import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../public/styles/pages/menu.module.scss'
import Text from '../components/atoms/text/text';
import Button from '../components/atoms/button/button';
import Input from '../components/atoms/input/input';
import Textarea from '../components/atoms/textarea/textarea';
function Menu() {

  const [modal, setModal] = useState(false);
  const toggleModal = () => { modal == true ? setModal(false) : setModal(true);};
  return (
    <React.Fragment>
      <div className={styles.center}>
        <div id="body" className={styles.body}>
          <div>목록</div>

          <Link href="/watertap">
          <div style={{width:'100%',textAlign:'center'}}>
            <Text isHover="true">
              <div style={{fontWeight:'bold'}}>수도꼭지 틀기</div>
              {/* <div>최근 : 2021.09.01 진행중</div> */}
              {/* <div>마음 속의 솔직한 감정을 느껴보세요.</div> */}
            </Text>
            </div>
          </Link> 

          {/* <Link href="/watertap">
            <div style={{width:'100%'}}>
            <Text isHover="true">
              <div style={{fontWeight:'bold'}}>고정 관념 교환소</div>
              <div>잘못된 고정 관념을 바꿔보세요.</div>
            </Text>
            </div>
          </Link> */}

          {/* <Link href="">
           <div className={styles.dashBox} onClick={toggleModal}>
            (+)
           </div>
          </Link> */}

          <Link href="/createmenu">
           <div className={styles.dashBox}>
            (+)
           </div>
          </Link>


          <Link href="/home">PREV</Link>
        </div>
      </div>
      
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
    </React.Fragment>
  );
};

export default Menu;
