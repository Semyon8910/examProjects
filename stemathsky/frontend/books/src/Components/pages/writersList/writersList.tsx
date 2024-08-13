import { useEffect, useState } from "react";
import "./writersList.css";
import { Author } from "../../Models/Author";
import axios from "axios";
import SingleWriter from "../singleWriter/singleWriter";

function WritersList(): JSX.Element {
    const [writers, setWriters] = useState<Author[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/author/all")
        .then(response=>response.data)
        .then(data=>setWriters(data));
    },[])
    return (
        <div className="writersList">
			{writers.map(item=><SingleWriter key={item.ID} writer={item}/>)}
        </div>
    );
}

export default WritersList;
