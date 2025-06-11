import { LightningElement, wire } from 'lwc';
// Required to create/get new record using LDS
import { createRecord, getRecord } from "lightning/uiRecordApi";

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccountManagerLDS extends LightningElement {
     /** @track no longer required to bind primitive value
        from JavaScript controller to HTML template
        @track accountName;
        @track accountPhone;
        @track accountWebsite; 
    **/

    accountName;
    accountPhone;
    accountWebsite;
    recordId;
    
    @wire(getRecord, {recordId: '$recordId', fields: fieldArray})
    accountRecord;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields = {
            'Name' : this.accountName, 
            'Phone' : this.accountPhone, 
            'Website': this.accountWebsite
        };
        const recordInput = {apiName : 'Account', fields};

        // Call createRecord method passing the recordInput
        createRecord(recordInput).then(response => {
            console.log('Account has been created : ', response.id);
            this.recordId = response.id;
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
    }

    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }

}