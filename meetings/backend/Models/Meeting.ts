export class Meeting {
    meetingID:number;
    dev_team_ID:number;
    start_meeting:string;
    end_meeting:string;
    meeting_description:string;
    meeting_room:string;

    constructor(meetingID:number, dev_team_ID:number, start_meeting: string, end_meeting: string, meeting_description:string, meeting_room:string) {
        this.meetingID=meetingID;
        this.dev_team_ID=dev_team_ID;
        this.start_meeting=start_meeting;
        this.end_meeting=end_meeting;
        this.meeting_description=meeting_description;
        this.meeting_room=meeting_room;
    }

}