import {Spin} from "antd";
import React from "react";

export const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Spin size={'large'}/>
    </div>
)