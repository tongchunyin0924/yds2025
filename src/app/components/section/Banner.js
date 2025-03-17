import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Flex, Button, Typography } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { Title } = Typography;

const baseStyle = {
  width: '50%',
  height: '500px'
};

import bannerimg from "../../resources/banner-img.png";

const Banner = () => {

  const [size, setSize] = useState('large');

  return (

    <div>
      <Flex vertical={false} >

        <div style={{ ...baseStyle }}>

          <Flex vertical={true} style={{ height: '100%', padding: '50px' }} align="center" justify="center">
            <Title>
              「短期宣教参加するかどうか？」
            </Title>

            <Title level={3}>
              困ってる人がこっちに来て
            </Title>

            <div style={{ height: '20%' }}>
            </div>

            <div>
              <Link href="draw">
                <Button type="primary" icon={<SendOutlined />} size={size}>
                  スタート
                </Button>
              </Link>
            </div>
          </Flex>

        </div>

        <div style={{ ...baseStyle }}>
          <Image src={bannerimg} alt="hero banner" />
        </div>
      </Flex>

    </div>
    // <div className="static-slider-head banner2">
    //   <Container>
    //     <Row className="">
    //       <Col lg="6" md="6" className="align-self-center">
    //         <h1 className="title">
    //           「私も短期宣教参加できる？」
    //         </h1>
    //         <h4 className="subtitle font-light">
    //           3分で簡単検査！
    //         </h4>
    //         <Link
    //           href="/name"
    //         >
    //           <a className="btn btn-danger m-r-20 btn-md m-t-30 ">
    //             スタート
    //           </a>
    //         </Link>
    //         {/* <Link href="/#coming">
    //           <a className="btn btn-md m-t-30  btn-outline-light ">
    //             Upgrade To Pro
    //           </a>
    //         </Link> */}
    //       </Col>
    //       <Col lg="6" md="6">
    //         <Image src={bannerimg} alt="hero banner" />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default Banner;
