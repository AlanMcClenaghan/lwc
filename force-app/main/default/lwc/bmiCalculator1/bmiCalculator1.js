import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    /** @track no longer required to bind primitive value
        from JavaScript controller to HTML template
        @track bmi;
    **/

    cardTitle = 'BMI Calculator';

    // changePrivatePropertyValue(){
    //     this.cardTitle = 'Changed value';
    //     console.log('value: ', this.cardTitle);
    // }

    // Separate reactive primitive properties
    weight = 0;
    height = 0;
    bmi = null;

    onWeightChange(event) {
        this.weight = parseFloat(event.target.value);
    }
    
    onHeightChange(event) {
        this.height = parseFloat(event.target.value);
    }
    
    calculateBMI() {    
        if (this.weight && this.height) {
            const heightInMeters = this.height / 100;
            const calculated = this.weight / (heightInMeters * heightInMeters);
            this.bmi = parseFloat(calculated.toFixed(2));
        } else {
            this.bmi = null;
        }
    }

    reset() {
        this.weight = 0;
        this.height = 0;
        this.bmi = null;
    }

    get bmiValue() {
        return this.bmi === null
            ? ''
            : `Your BMI is: ${this.bmi}`;
    }

}