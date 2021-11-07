import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaAngleLeft } from "react-icons/fa";
import Loading from "../Loading";

import "./Sidebar.scss";
import { NavigationModel } from "../../models/public/NavigationModel";

const Sidebar: React.FC = () => {
    const { fetchNavigations } = useActions();
    const { isLoading, error, data } = useTypedSelector(state => state.navigation);
    
    useEffect(() => {
        fetchNavigations();
    }, []);
    
    console.log(data);

    const getChildNav = (parent_id: string) => {
        const childs = data.filter(w => w.parent_id === parent_id);

        return (
            <ul className="menu__block-list">
                {
                    childs.sort(sortNavs).map((nav) => 
                        <li 
                            key={nav.id} 
                            className="menu__block-list-item"
                        >
                            <a href="#">{nav.title}</a>
                        </li>
                    )
                }
            </ul>
        );
    }

    const sortNavs = (a: NavigationModel, b: NavigationModel) => {
        if (a.order > b.order)
            return 1;
        return -1;
    }

    return (
        <div className="sidebar">
            <div className="menu">
                {isLoading && <Loading />}

                {
                    !isLoading && !error &&
                    data.sort(sortNavs).filter(w => w.parent_id === null).map((nav) => 
                        <div className="menu__block">
                            <input 
                                className="menu__block-input" 
                                type="checkbox" 
                                name={nav.id} 
                                id={nav.id} 
                            />

                            <label 
                                htmlFor={nav.id} 
                                className="menu__block-label"
                            >
                                <span className="menu__block-title">
                                    {nav.title}
                                </span>
                                <span className="menu__block-icon">
                                    <FaAngleLeft />
                                </span>
                            </label>

                            {
                                data.some(w => w.parent_id === nav.id) &&
                                getChildNav(nav.id)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Sidebar;
