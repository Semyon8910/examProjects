import { useEffect, useState } from "react";
import "./serversList.css";
import axios from "axios";
import { Servers } from "../../models/servers";
import { SingleServer } from "../SingleServer/SingleServer";

function ServersList(): JSX.Element {
    const [servers,setServers] = useState<Servers[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/servers")
        .then (response => response.data)
        .then (data=>setServers(data));
    },[]);

    return (
        <div className="serversList">
			{servers.map(item=><SingleServer key={item.id} server={item}/>)}
        </div>
    );
}

export default ServersList;
