import {withProviders} from "./providers";
import './index.scss';
import {Routing} from "./router";
import {Layout} from "antd";

const App = () => {

    return (
        <Layout className={'app'}>
            <Routing/>
        </Layout>
    );
}

export default withProviders(App);
