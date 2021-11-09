import React from "react";
import { FaAngleDown } from "react-icons/fa";
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
                
                return (
                <li className="menu__list-item"
                    key={item.id}
                >
                    {
                        isBlock &&
                        <>
                        <input className="menu__list-item-input" type="checkbox" name={item.id} id={item.id} />
                        <label 
                            className="menu__list-item-block"
                            htmlFor={item.id}
                        >
                            <span className="menu__list-item-block__title">
                                {item.title}
                            </span>
                            <span className="menu__list_item-block__icon">
                                <FaAngleDown />
                            </span>
                        </label>
                        </>
                    }
                    {
                        !isBlock &&
                        <a href={item.slug}>{item.title}</a>
                    }
                    {item.childs && <div className="childs"><Menu items={item.childs} /></div>}
                </li>
            )})
        }
        </ul>
    );
}

export default Menu;
