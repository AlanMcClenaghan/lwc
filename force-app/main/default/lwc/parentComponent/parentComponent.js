import { LightningElement} from 'lwc';

export default class ParentComponent extends LightningElement {
    input;
    selected = false;
    list = [];
    addInputToList() {
        const input = this.template.querySelector('lightning-input');
        this.list = [...this.list, input.value];
        input.value = "";
    }
    handleSelect(event) {
        const inputItem = event.detail
        this.input = inputItem;
        this.selected = true;
    }
}