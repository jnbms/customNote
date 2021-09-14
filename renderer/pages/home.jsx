import React from 'react';
import Link from 'next/link';
import {Column, Size, Space, Button, Center} from '../styledComponent/common';

import Input from '../components/atoms/input/input';
// import Button from '../components/atoms/button/button';

import Text from '../bones/Text';


function Home() {
  return (
        <Size height="100vh">
          <Column align="center" justify="center">
            <Text size="1" content="당신을 위한 기적" />
            <Space margin="1">
              <Text size="1.8" content="미라클 노트." className="typingAnimation"/>
            </Space>
            <Link href='/menu'>
              <Size height="1.5em" width="3em">
              <Button borderStyle="solid" className="buttonHoverAnimation">
                <Center>
                  <Text size="1" content="시작"/>
                </Center>
              </Button>
              </Size>
            </Link>
            <Space margin="0.5">
              <Text size="0.8" content="@created by 다빈치"/>
            </Space>
          </Column>
        </Size>
  );
};
export default Home;
