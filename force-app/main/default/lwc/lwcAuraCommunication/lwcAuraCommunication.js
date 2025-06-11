import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title

    callAura() {
        const event = new CustomEvent('sendmessage', {
            detail: {
                "message": "Hello from LWC!"
            }
        })
        this.dispatchEvent(event);
    }
}