import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Layout } from "antd";
const { Sider, Content } = Layout;
/* eslint-disable react/prop-types */
export default function MainLayout({ children }) {
    return (
        <Layout className="w-full h-screen">
            <Sider width="20%">
                <Sidebar />
            </Sider>
            <Layout>
                <Header />
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
}
