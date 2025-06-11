import { LightningElement, track } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {

    /** @track no longer required to bind primitive value
        from JavaScript controller to HTML template
        @track recordId; 
    **/

   recordId;
    successHandler(event){
        this.recordId = event.detail.id;
    }
}