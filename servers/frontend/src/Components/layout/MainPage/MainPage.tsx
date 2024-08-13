import { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";

function MainPage(): JSX.Element {
    const [prod,setProd] = useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products")
        .then (response => response.data)
        .then (data=>setProd(data));
    },[])
    return (
        <div className="MainPage">
           <h1>servers app</h1>
        </div>
    );
}

export default MainPage;
