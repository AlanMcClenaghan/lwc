import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate;
    endDate;
    error;
    valid;

    dateHandler(event) {
        const {name, value} = event.target;
        this[name] = value; // this.startDate = value
    }

    submitHandler() {
        this.error = "";
        this.valid = "";
        if(this.validateDate(this.startDate, this.endDate)) {
            this.valid = "Data is valid";
        } else{
            this.error = "End Date cannot be greater than Start Date";
        }
    }

    validateDate(startDate, endDate) {
        return new Date(startDate).getTime() < new Date(endDate).getTime();
    }
}