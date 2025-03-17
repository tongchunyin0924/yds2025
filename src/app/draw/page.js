'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Layout, Row, Col, Typography, Input, Tooltip, Button, Flex, Result } from 'antd';
import { InfoCircleOutlined, UserOutlined, SendOutlined, LikeOutlined } from '@ant-design/icons';
import Link from "next/link";

import { Header } from "antd/es/layout/layout";
import { Footer } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";

import { LuckyWheel } from '@lucky-canvas/react'
import { Fireworks } from '@fireworks-js/react'

import YDSHeader from '../components/section/YDSHeader';

const DrawPage = () => {

  const [size, setSize] = useState('large');
  const [name, setName] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [result, setResult] = useState('');

  const [blocks] = useState([
    { padding: '10px', background: '#869cfa' }
  ])
  const [prizes] = useState([
    { background: '#e9e8fe', fonts: [{ index: 0, text: '南タイ', top: '10%' }] },
    { background: '#b8c5f2', fonts: [{ index: 1, text: '中東', top: '10%' }] },
    { background: '#e9e8fe', fonts: [{ index: 2, text: '日本国内', top: '10%' }] },
    { background: '#b8c5f2', fonts: [{ index: 3, text: '不参加', top: '10%' }] },
  ])
  const [buttons] = useState([
    // { radius: '40%', background: '#617df2' },
    // { radius: '35%', background: '#afc8ff' },
    // {
    //   radius: '30%', background: '#869cfa',
    //   pointer: true,
    //   fonts: [{ text: '', top: '-10px' }]
    // }
    {
      radius: '45%',
      imgs: [{
        src: 'go.png',
        width: '100%',
        top: '-100%'
      }]
    }
  ])

  const myLucky = useRef()
  const drawButton = useRef()
  const nameInput = useRef()
  const fireworkRef = useRef()

  const cleanInput = (input) => {
    return input.replace(/[^\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+/gu, '');
  };

  const stringToHash = (string, isFirstTime) => {
    let hash = 0;

    if (string.length === 0) return hash;

    if (isFirstTime) {
      for (const char of string) {
        hash ^= char.charCodeAt(0); // Bitwise XOR operation
      }
      return hash;
    }
    else {
      return string.split('').reduce((hash, char) => {
        return char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash;
      }, 0);
    }

  }

  const startDrawing = (name, isFirstTime) => {

    const cleanedValue = cleanInput(name)
    const result = stringToHash(cleanedValue, isFirstTime)

    const stopIndex = isFirstTime ? result % prizes.length : result % prizes.length - 1

    myLucky.current.play()
    setTimeout(() => {
      myLucky.current.stop(stopIndex)
    }, 500)
  }

  useEffect(() => {
    // Do something here
    // drawButton.current.disabled = true
  }, []);


  return (
    <Layout>
      <YDSHeader />
      <Content style={{ padding: '50px' }}>

        <Row>
          <Col flex={1}>
            <Flex gap="large" vertical>
              <div>
                <Typography.Title level={5}>名前(漢字/ひらがな/カタカナ)</Typography.Title>
                <Input
                  ref={nameInput}
                  style={{ width: '80%' }}
                  maxLength={20}
                  size="large"
                  placeholder="名前を入力してください"
                  prefix={
                    <UserOutlined
                      style={{
                        color: 'rgba(0,0,0,.25)',
                      }}
                    />
                  }
                  suffix={
                    <Tooltip title="20文字以内で入力してください">
                      <InfoCircleOutlined
                        style={{
                          color: 'rgba(0,0,0,.45)',
                        }}
                      />
                    </Tooltip>
                  }
                  onChange={(e) => {
                    const cleanedValue = cleanInput(e.target.value);
                    if (cleanedValue.length > 0) {
                      setName(e.target.value)
                    }
                  }}
                />
              </div>
              <Flex gap="large">
                <Button
                  disabled={name.length < 1 || isDrawing}
                  type="primary"
                  icon={<SendOutlined />}
                  size={size}
                  onClick={() => {
                    setIsDrawing(true)
                    startDrawing(name, true)
                  }
                  } >
                  スタート
                </Button>
              </Flex>
            </Flex>

          </Col>
          <Col flex={1}>

            <Flex gap="large" vertical style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <LuckyWheel
                ref={myLucky}
                style={{ backgroundColor: 'red', alignItems: 'center' }}
                width="400px"
                height="400px"
                blocks={blocks}
                prizes={prizes}
                buttons={buttons}
                onStart={() => {
                }}
                onEnd={prize => {

                  if (prize.fonts[0].index === prizes.length - 1) {
                    //again
                    startDrawing(name, false)
                  } else {
                    setResult(prize.fonts[0].text)
                    fireworkRef.current.start()
                    // alert('恭喜你抽到 ' + prize.fonts[0].text + ' 号奖品')
                  }
                }}
              />
            </Flex>
          </Col>
        </Row>

        <Row style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Col>
            {result.length > 0 &&
              <Result
                icon={<LikeOutlined />}
                title={`${name}さん ! お勧めの短期宣教の目的地は ${result} です`}
                subTitle=""
                extra={[
                  <Link href="/">
                    <Button type="primary" key="console">
                      戻る
                    </Button>
                  </Link>
                ]}
              />
            }

          </Col>
        </Row>

        <Fireworks
          ref={fireworkRef}
          autostart={false}
          options={{
            opacity: 0.5,
            // intensity: 10
          }}
          style={{
            top: 0,
            left: 0,
            // zIndex: -1,
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: 'rgba(52, 52, 52, 0)'
          }}
        />
      </Content>


      <Footer style={{ textAlign: 'center' }}>

      </Footer>
    </Layout>
  );
};

export default DrawPage;