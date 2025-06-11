import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    // Default value in child component, 
    // overwritten by values in the parent component
    // @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;
}