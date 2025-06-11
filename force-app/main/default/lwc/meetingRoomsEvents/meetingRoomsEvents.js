import { LightningElement, track } from 'lwc';

export default class MeetingRoomsEvents extends LightningElement {

    @track selectedMeetingRoom;
    @track selectedMeetingRoomCapacity;

    meetingRoomsInfo = [
        {roomName:'D-01', roomCapacity:'12'},
        {roomName:'D-02', roomCapacity:'16'},
        {roomName:'D-03', roomCapacity:'12'},
        {roomName:'E-01', roomCapacity:'5'},
        {roomName:'E-02', roomCapacity:'8'},
        {roomName:'E-03', roomCapacity:'10'},
        {roomName:'F-01', roomCapacity:'20'}

    ];

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
        this.selectedMeetingRoomCapacity = meetingRoomInfo.roomCapacity;
    }

    // Attach an event handler dynamically
    constructor(){
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
}