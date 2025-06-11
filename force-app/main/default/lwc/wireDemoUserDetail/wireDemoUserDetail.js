import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id

    // Wire as a function - easier to debug
    userDetail
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    // Wire as a property - tougher to use
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty
}