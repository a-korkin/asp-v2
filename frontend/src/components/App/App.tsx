import axios from "axios";
import React, { useEffect } from "react";
import "./App.scss";

const App = () => {

    const fetchData = async() => {
        const resp = await axios.get("http://localhost:5000/api/v1/persons")
            .then(res => res.data);
        return resp;
    }

    useEffect(() => {
        const response = fetchData();
        console.log(response);
    }, [])

    return (
        <div className="container dark-theme">
            <div className="top-panel">
                <div className="menu-toggler">
                    <div className="menu-toggler__line"></div>
                </div>
            </div>
            <div className="sidebar">Sidebar</div>
            <div className="main">Main contnent</div>
        </div>
    );
}

export default App;
