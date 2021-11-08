import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaAngleLeft } from "react-icons/fa";
import { NavigationModel } from "../../models/admin/NavigationModel";
import Loading from "../Loading";
import Menu from "./Menu";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    const { fetchNavigations } = useActions();
    const { isLoading, error, data } = useTypedSelector(state => state.navigation);
    
    useEffect(() => {
        fetchNavigations();
    }, []);
    
    return (
        <div className="sidebar">
            <div className="menu">
                {isLoading && <Loading />}
                {
                    !isLoading && !error &&
                    <Menu items={data.filter(w => w.parent_id === null)} />
                }
            </div>
        </div>
    );
}

export default Sidebar;
