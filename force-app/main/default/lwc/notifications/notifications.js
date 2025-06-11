import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {

    toastHandlerSuccess(){ 
        this.showToast("Success!", "{0} Action was successful. {1}", "success")
    }
    toastHandlerError(){ 
        this.showToast("Error!", "The action failed.", "error")
    }
    toastHandlerWarning(){ 
        this.showToast("Warning!", "Password should have 15 characters.", "warning")
    }
    toastHandlerInfo(){ 
        this.showToast("Info!", "Summer '20 realease is available.", "info")
    }
    showToast(title, message, variant){ 
        const event = new ShowToastEvent({ 
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{ 
                    url:'http://www.salesforce.com/',
                    label:'Click Here'
                }
            ],
            mode:'sticky'
        })
        this.dispatchEvent(event)
    }
}