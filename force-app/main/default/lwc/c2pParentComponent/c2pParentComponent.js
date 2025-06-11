import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    message

    handleClick() {
        this.showModal = !this.showModal;
        this.message = "";
    }

    handleClose(event) {
        this.showModal = !this.showModal;
        this.message = event.detail.message;
    }
}