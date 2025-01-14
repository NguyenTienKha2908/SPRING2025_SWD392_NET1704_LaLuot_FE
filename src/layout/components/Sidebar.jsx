import { Flex, Menu, Typography } from "antd";
import Image from "../../components/image/Image";
import { DashboardIcon, ProductIcon } from "../../components/icon/Icon";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
    const { t } = useTranslation();
    const menu = [
        {
            key: "1",
            label:<span className="ml-5">Dashboard</span>,
            icon: <DashboardIcon />,
        },
        {
            key: "2",
            label:<span className="ml-5">{t('product')}</span> ,
            icon: <ProductIcon />,
        },
        {
            key: "3",
            label:<span className="ml-5">{t('product')}</span> ,
            icon: <ProductIcon />,
        },
        {
            key: "4",
            label:<span className="ml-5">{t('product')}</span> ,
            icon: <ProductIcon />,
        },
        {
            key: "5",
            label:<span className="ml-5">{t('product')}</span> ,
            icon: <ProductIcon />,
        },
        {
            key: "6",
            label:<span className="ml-5">{t('product')}</span> ,
            icon: <ProductIcon />,
        },
    ];    
    return (
        <div className="h-full bg-primary-light py-0 px-[20px] border-e-2">
            <Flex align="center" className="mb-5">
                <Image
                    width={"80px"}
                    height={"80px"}
                    src={"./src/assets/Medical_logo.png"}
                />
                <Typography.Title strong level={4}>
                    Medical Warehouse
                </Typography.Title>
            </Flex>
            <Menu              
                className="border-e-0"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
                items={menu}
            />
        </div>
    );
}
