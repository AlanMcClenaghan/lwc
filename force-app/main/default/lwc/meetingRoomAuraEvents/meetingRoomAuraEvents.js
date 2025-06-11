import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;    

    tileClickHandler(event) {
        event.preventDefault?.();
        event.stopPropagation?.();

        const tileClicked = new CustomEvent('tileclick', {
            detail: { roomName: this.meetingRoomInfo.roomName },
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
}
}