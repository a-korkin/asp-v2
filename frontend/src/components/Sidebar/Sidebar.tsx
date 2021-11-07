import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaAngleLeft } from "react-icons/fa";
import Loading from "../Loading";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    const { fetchNavigations } = useActions();
    const { isLoading, error, data } = useTypedSelector(state => state.navigation);
    
    useEffect(() => {
        fetchNavigations();
    }, []);
    
    console.log(data);

    return (
        <div className="sidebar">
            {/* {isLoading && <Loading />}
            {
                !isLoading && !error && 
                data.map((nav) => <div key={nav.id}>{nav.title}</div>)
            } */}
            <div className="menu">
                <div className="menu__block">
                    <input 
                        className="menu__block-input" 
                        type="checkbox" 
                        name="1" 
                        id="1" 
                    />
                    <label 
                        htmlFor="1" 
                        className="menu__block-label"
                    >
                        <span className="menu__block-title">
                            Картотека граждан
                        </span>
                        <span className="menu__block-icon">
                            <FaAngleLeft />
                        </span>
                    </label>

                    <ul>
                        <li>Физические лица</li>
                        <li>Объединение физлиц</li>
                        <li>Обмен информацией</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
