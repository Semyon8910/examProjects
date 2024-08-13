import { useNavigate } from "react-router-dom";
import "./startPage.css";
import { useEffect } from "react";

function StartPage(): JSX.Element {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/meetings/1');
    },[])
    return (
        <div className="startPage">
			<h1>Please select the team</h1>
        </div>
    );
}

export default StartPage;
