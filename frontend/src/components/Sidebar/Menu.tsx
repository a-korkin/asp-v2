import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { NavigationModel } from "../../models/admin/NavigationModel";

interface INavProps {
    items: NavigationModel[];
}

const Menu: React.FC<INavProps> = ({ items }) => {

    return (
        <div className="menu__item">
            {
                items.map(item => {
                    const isBlock = item.childs?.length > 0;
                    console.log(isBlock);

                    return (
                    <div 
                        key={item.id}
                        className={isBlock ? "menu__block" : "menu__element"}
                    >
                        {
                            isBlock &&
                            <>
                            <input 
                                className="menu__block-input"
                                type="checkbox" 
                                name={item.id} 
                                id={item.id} 
                            />
                            <label 
                                htmlFor={item.id} 
                                className="menu__block-label"
                            >
                                {item.title}
                                <span className="menu__block-icon">
                                    <FaAngleLeft />
                                </span>
                            </label>
                            </>
                        }

                        {
                            !isBlock && 
                            item.title
                        }

                        {
                            item.childs && 
                            <div className="menu__item-childs"
                            >
                                <Menu items={item.childs}/>
                            </div>
                        }
                    </div>
                )})
            }
        </div>
    );
}

export default Menu;
