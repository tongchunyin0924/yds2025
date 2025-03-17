import React, { useState } from "react";

import { Header } from "antd/es/layout/layout";

const YDSHeader = () => {

    return (
        <Header>
            <h1 style={{
                color: 'white',
                // textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                // fontFamily: 'Arial',
                // padding: '20px'
            }}>
                YDS2025
            </h1>
        </Header>
    );
};

export default YDSHeader;
