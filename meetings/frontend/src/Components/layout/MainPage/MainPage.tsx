import { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import { Meeting } from "../../models/Meeting";
import { Team } from "../../models/Teams";
import { useParams } from "react-router-dom";
import SingleMeeting from "../../pages/singleMeeting/singleMeeting";
import { SubmitHandler, useForm } from "react-hook-form";

function MainPage(): JSX.Element {
    const [meetings, setMeetings] = useState<Meeting[]>([]);
    const teamId = useParams();
    const teamID = teamId["teamID"];

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Meeting>();

    const addMeeting: SubmitHandler<Meeting> = (data) => {
        axios.post("http://localhost:8080/api/newMeeting", {
            meetingID: 0,
            dev_team_ID: teamID,
            start_meeting: data.start_meeting,
            end_meeting: data.end_meeting,
            meeting_description: data.meeting_description,
            meeting_room: data.meeting_room
        }).then(response=> response.status)
        .catch((err)=>console.log(err)).finally(()=>{reset();});
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/meetings/${teamID}`)
        .then (response => response.data)
        .then (data=>setMeetings(data));
    },[teamID, addMeeting])

    return (
        <div className="MainPage">
            {meetings.map(item=><SingleMeeting key={item.meetingID} meeting={item}/>)}<hr/><br/>
            <h2>add new meeting</h2>
            <form onSubmit={handleSubmit(addMeeting)}>
                meeting starts <br/> 
                <input type="datetime-local"
                {...register("start_meeting", {required:true})}/><br/><br/>
                meeting end <br/>
                <input type="datetime-local" 
                {...register("end_meeting", {required:true})}/><br/><br/>
                <input type="text" placeholder="meeting description"
                {...register("meeting_description", {required:true})}/><br/><br/>
                <input type="text" placeholder="meeting room"
                {...register("meeting_room", {required:true})}/><br/><br/>
                <input type="submit" value={"Add meeting"}/>
            </form>
        </div>
    );
}

export default MainPage;
