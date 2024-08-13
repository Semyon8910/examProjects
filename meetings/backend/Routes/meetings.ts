import express , {NextFunction,Request,Response} from 'express';
import {addNewMeeting, getAllMeetings, getAllTeams} from '../logic/meetingsLogic'
import { Meeting } from '../Models/Meeting';

const meetingRouter = express.Router();

meetingRouter.get(
    "/meetings/:teamID",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const teamID=+request.params.teamID;
            const meetings = await getAllMeetings(teamID);
            response.status(200).json(meetings);
        } catch (err) {
            nextFunction (err);
        }
    }
)

meetingRouter.get(
    "/devTeams",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const teams = await getAllTeams();
            response.status(200).json(teams);
        } catch (err) {
            nextFunction (err);
        }
    }
)

meetingRouter.post(
    "/newMeeting",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{
        try{
            const newMeeting = new Meeting(request.body.meetingID, request.body.dev_team_ID, request.body.start_meeting, request.body.end_meeting, request.body.meeting_description, request.body.meeting_room);
            const addedMeeting = await addNewMeeting(newMeeting)
            response.status(201).json(addedMeeting);
        } catch (err) {
            nextFunction (err);
        }
    }
)

export default meetingRouter;