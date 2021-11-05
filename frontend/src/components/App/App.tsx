import axios from "axios";
import React, { useEffect } from "react";

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
        <h1>Hello world</h1>
    );
}

export default App;
