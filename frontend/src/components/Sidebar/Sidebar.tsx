import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    const { fetchNavigations } = useActions();
    const { isLoading, error, data } = useTypedSelector(state => state.navigation);
    
    useEffect(() => {
        fetchNavigations();
    }, []);
    
    return (
        <div className="sidebar">
            {data.map((nav) => <div key={nav.id}>{nav.title}</div>)}
        </div>
    );
}

export default Sidebar;
