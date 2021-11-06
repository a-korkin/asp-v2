import React, { useState } from "react";
import TopPanel from "../TopPanel";

import "./App.scss";

const App: React.FC = () => {
    const [sideBarVisible, setSideBarVisible] = useState<boolean>(false);

    const sideBarToggleHandler = () => {
        setSideBarVisible(!sideBarVisible);
        console.log(!sideBarVisible);
    }

    return (
        <div className={sideBarVisible ? "container dark-theme" : "container toggle dark-theme"}>
            <TopPanel checked={sideBarVisible} onChecked={sideBarToggleHandler} />
            <div className="sidebar">Sidebar</div>
            <div className="main">Main contnent</div>
        </div>
    );
}

export default App;
