import { LightningElement, api  } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api inputItem;
    fireSelectEvent() {
        const inputitemselect = new CustomEvent('select', {
            detail: this.inputItem
        })
        this.dispatchEvent(inputitemselect);
    }
}