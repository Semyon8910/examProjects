import dal_mysql from "../DAL/dal_mysql";
import { Meeting } from "../Models/Meeting";


const getAllTeams = async()=>{
    //SQL statement
    const sql = `
        SELECT * FROM dev_teams
    `;
    //execute the sql command
    const teams = await dal_mysql.execute(sql);
    //return the result
    return teams;
}

const getAllMeetings = async(teamID:number)=>{
    const sql = `
        SELECT * FROM meetings WHERE dev_team_ID = ${teamID}
    `;
    const meetings = await dal_mysql.execute(sql);
    return meetings;
}

const addNewMeeting = async(newMeeting:Meeting) => {
    const sql = `
        INSERT INTO meetings (meetingID, dev_team_ID, start_meeting, end_meeting, meeting_description, meeting_room) 
        VALUES ('0', '${newMeeting.dev_team_ID}', '${newMeeting.start_meeting}', '${newMeeting.end_meeting}', '${newMeeting.meeting_description}', '${newMeeting.meeting_room}')
    `;
    const addedMeeting = await dal_mysql.execute(sql);
    return addedMeeting;
}

export {
    getAllMeetings,
    getAllTeams,
    addNewMeeting
}