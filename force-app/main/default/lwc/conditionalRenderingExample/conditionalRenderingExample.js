import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    /** @track no longer required to bind primitive value
        from JavaScript controller to HTML template
        @track displayDiv = false;
        @track cityList = ['Jaipur', 'Bangluru', 'Hyderabad', 'Mumbai'];
    **/
    displayDiv = false;

    @track cityList = ['Jaipur', 'Bangluru', 'Hyderabad', 'Mumbai'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}