import React, { useState } from "react";
import TopPanel from "../TopPanel";
import Sidebar from "../Sidebar";

import "./App.scss";

const App: React.FC = () => {
    const [sideBarVisible, setSideBarVisible] = useState<boolean>(true);

    const sideBarToggleHandler = () => {
        setSideBarVisible(!sideBarVisible);
    }

    return (
        <div className={sideBarVisible ? "container dark-theme" : "container toggle dark-theme"}>
            <TopPanel checked={sideBarVisible} onChecked={sideBarToggleHandler} />
            <Sidebar />
            <div className="main">Main contnent</div>
        </div>
    );
}

export default App;
