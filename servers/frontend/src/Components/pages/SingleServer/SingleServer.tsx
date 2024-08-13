import { useEffect, useState } from "react";
import "./SingleServer.css";
import axios from "axios";
import { Servers } from "../../models/servers";
import { Switch } from "@mui/material";

interface serverProps{
    server:Servers
}

export function SingleServer(props:serverProps): JSX.Element {
    const isChecked = props.server.status === 1;
    const [serverStatus, setServerStatus] = useState(isChecked);
    useEffect(()=>{
        axios.post("http://localhost:8080/api/severs/updateStatus", {
            id: props.server.id,
            status: serverStatus ? 1:0
        }).then(response=>response.data)
        .catch((err)=> console.log(err));
    },[serverStatus]);

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServerStatus(event.target.checked);
    }

    return (
                <div className="Box">
                    {props.server.id}
                    <h2>{props.server.server_name}</h2><br/><hr/>
                    {props.server.ip}<br/>
                    {props.server.name}<br/>
                    <Switch checked={serverStatus} onChange={handleSwitchChange}/><hr/>
                    {props.server.datatime}
                </div> 
    );
}
