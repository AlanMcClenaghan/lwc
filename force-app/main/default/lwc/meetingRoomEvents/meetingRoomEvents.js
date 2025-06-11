import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub1';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoomEvents extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'};

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick',
        // Event must be allowed to bubble 
        // to be able to attach handler dynamically in parent JS file
            {detail : this.meetingRoomInfo, bubbles :true}
        );
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}