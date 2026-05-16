import { LightningElement, api } from 'lwc';

export default class GoogleAction extends LightningElement {
    
    @api recordId
    @api invoke(){
        console.log('Invoked. recordId: ' + this.recordId);
        window.open('https://www.google.com', '_blank');
    }

}