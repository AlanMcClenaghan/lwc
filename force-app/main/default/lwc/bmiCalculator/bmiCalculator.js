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

    bmiData = {
        weight: 0,
        height: 0,
        bmi: 0
    }

    onWeightChange(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.bmiData.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        try{
        this.bmiData.bmi = this.bmiData.weight/(this.bmiData.height*this.bmiData.height);
        } catch(error){
            this.bmiData.bmi = undefined;
        }
    }

    // Using a Getter Property
    get bmiValue(){
        if(this.bmiData.bmi === undefined){
            return "";
        }
        return `Your BMI is: ${this.bmiData.bmi}`;
    }
}