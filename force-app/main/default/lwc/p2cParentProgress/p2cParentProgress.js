import { LightningElement } from 'lwc';

export default class P2cParentProgress extends LightningElement {

    percentage = 10;

    changeHandler(event) {
        this.percentage = event.target.value;
    }
}