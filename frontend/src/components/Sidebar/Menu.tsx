import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { NavigationModel } from "../../models/admin/NavigationModel";

interface INavProps {
    items: NavigationModel[];
}

const Menu: React.FC<INavProps> = ({ items }) => {
    return (
        <ul className="menu__list">
        {
            items.map(item => {
                const isBlock = item.childs?.length > 0;
                if (isBlock) {
                    console.log(item.title);
                }

                return (
                <li className=""
                    key={item.id}
                >
                    {item.title}
                    {item.childs && <Menu items={item.childs} />}
                </li>
            )})
        }
        </ul>
    );
}

export default Menu;
