import { LightningElement, api } from 'lwc';

export default class RecordIdAndObjectName extends LightningElement {
    @api recordId
    @api objectApiName

    get showRecord() {
        if (this.recordId) {
            return true
        } 
        return false
    }
}