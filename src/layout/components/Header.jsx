import { Badge, Select } from "antd";
import Image from './../../components/image/Image';
import { BellIcon } from "../../components/icon/Icon";


export default function Header() {
    const content = [
        {
            value: "jack",
            label: "Jack",
        },
        {
            value: "lucy",
            label: "Lucy",
        },
        {
            value: "Yiminghe",
            label: "yiminghe",
        },
        {
            value: "disabled",
            label: "Disabled",
            disabled: true,
        },
    ];
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className={"w-full h-[60px] bg-primary-light gap-10 flex items-center justify-end pr-[15px]"}>
            <Select
                defaultValue="lucy"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={content}
            />
            <Badge count={5}>
                <BellIcon/>
            </Badge>
            <Image width={"38px"} height={"38px"} borderRadius={true} src={"https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/405283433_369200542230469_2616722944284243811_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=SZ5IW2Nnau0Q7kNvgGsiC5Z&_nc_oc=AdjqOrqfkfgj1r4ZI003IbZHTEjxbJYLq1XS-cbI3G9-HXVS3TPnHukTq95c-rtdbo30axrao9C_EkwiNw5FLS0r&_nc_zt=24&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=APuP0oqwVPbpi1if4xnM4yU&oh=00_AYB6hFG7p2ckckf7Ya9HwjvEYuKnYlD174SgNAz6dYw54w&oe=678BF4D5"}/>
        </div>
    );
}
