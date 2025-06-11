import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    handleClick() {
        const closeModal = new CustomEvent('close', {
            bubbles: true,
            detail: {
                message: "Modal closed successfully."
            }        
        })
        this.dispatchEvent(closeModal);
    }
}