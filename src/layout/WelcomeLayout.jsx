/* eslint-disable react/prop-types */
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "../components/image/Image";

export default function WelcomeLayout({ children }) {
    return (
        <Layout className="w-full h-screen flex flex-row">
            <Layout>
                <Content>{children}</Content>
            </Layout>
            <Layout className="w-1/4">
                <Image className={"h-screen"} src={"./src/assets/welcome.jpg"} />
            </Layout>
        </Layout>
    );
}
