import { Meeting } from "../../models/Meeting";
import "./singleMeeting.css";

interface meetingProps{
    meeting:Meeting
}

function SingleMeeting(props:meetingProps): JSX.Element {
    return (
        <div className="Box">
			start time: {props.meeting.start_meeting} <br/>
            end time: {props.meeting.end_meeting} <br/>
            descripton: {props.meeting.meeting_description} <br/>
            meeting room: {props.meeting.meeting_room} <br/>
        </div>
    );
}

export default SingleMeeting;
