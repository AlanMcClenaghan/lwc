import { LightningElement, wire } from 'lwc';

// Import from Apex class
import getAccountsWireAdapter from '@salesforce/apex/AccountManager.getAccountsWireAdapter';
import getAccountsImperatively from '@salesforce/apex/AccountManager.getAccountsImperatively';

// Import Toast Notifications
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManageApex extends LightningElement {

    // Call Apex Method Using Wire Adapter

    // Wire method gets list of accounts 
    @wire(getAccountsWireAdapter)
    accounts;

    // Shows template if response received
    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    // Call Apex Method Imperatively

    numberOfRecords;
    accountsImperative;

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    // Display A Toast Notification Included
    getAccounts(){
        getAccountsImperatively({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accountsImperative = response;
            const toastEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : this.numberOfRecords + ' Accounts Fetched From Server',
                variant : 'success',
            });
            this.dispatchEvent(toastEvent);
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
            const toastEvent = new ShowToastEvent({
                title : 'ERROR',
                message : error.body.message,
                variant : 'error',
            });
            this.dispatchEvent(toastEvent);
        })
    }

}