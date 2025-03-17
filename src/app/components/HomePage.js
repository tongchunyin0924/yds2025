'use client'

import React, { useState, useRef } from 'react';
import { Layout, Menu, Typography } from 'antd';

// const { Header, Content, Footer } = Layout;
import { Header } from "antd/es/layout/layout";
import { Footer } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";

import Banner from "./section/Banner";
import YDSHeader from './section/YDSHeader';

const { Title } = Typography;

const HomePage = () => {
  return (
    <Layout>
      <YDSHeader/>
      <Content style={{ padding: '50px' }}>
          <Banner/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      </Footer>
    </Layout>
  );
};

export default HomePage;