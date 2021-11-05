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
        <div className="container">
            <h2>Адресная социальная помощь</h2>
            <p>асофт</p>
        </div>
    );
}

export default App;
