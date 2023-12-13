import React, {FC, PropsWithChildren} from 'react';
import cls from './BaseLayout.module.scss'
import {Layout} from "antd";

const BaseLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <Layout className={cls.wrapper}>
            {children}
        </Layout>
    );
};

export default BaseLayout;