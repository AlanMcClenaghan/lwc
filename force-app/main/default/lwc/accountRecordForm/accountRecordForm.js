import { LightningElement } from 'lwc';

// Not required for full layout
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {

    /** @track no longer required to bind primitive value
        from JavaScript controller to HTML template
        @track recordId;
    **/
    recordIdFields;
    recordIdFull;

    // Not required for full layout
    fields = [
        NAME_FIELD, 
        PHONE_FIELD, 
        WEBSITE_FIELD
    ];
    

    handleSuccessfields(event){
        this.recordIdFields = event.detail.id;
    }

    handleSuccessfull(event){
        this.recordIdFull = event.detail.id;
    }
}