import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainHeader.css";
import { Team } from "../../models/Teams";
import axios from "axios";

function MainHeader(): JSX.Element {
    const [teams,setTeams] = useState<Team[]>([]);
    const navigate = useNavigate();
    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const teamID = event.target.value;
        navigate(`/meetings/${teamID}`)
    }
   
    useEffect(()=>{
        axios.get("http://localhost:8080/api/devTeams")
        .then (response => response.data)
        .then (data=>setTeams(data));
    },[])
    return (
        <div className="MainHeader">
			<h1>FullStack exam</h1> 
            <select onChange={selectHandler}>
                {teams.map(item=><option key={item.teamID} value={item.teamID}>{item.team_name}</option>)}
            </select>          
        </div>
    );
}

export default MainHeader;
