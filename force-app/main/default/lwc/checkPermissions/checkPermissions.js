import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import hasModifyAllData from '@salesforce/userPermission/ModifyAllData';
import hasShowDetails from'@salesforce/customPermission/Show_Details';

export default class CheckPermissions extends LightningElement {

    get hasViewAllDataAvailable() {
        return hasViewAllData;
    }

    get hasModifyAllDataAvailable() {
        return hasModifyAllData;
    }

    get hasShowDetailsAvailable() {
        return hasShowDetails;
    }
}