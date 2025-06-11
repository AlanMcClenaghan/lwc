import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    /** @track no longer required to bind primitive value
        from JavaScript controller to HTML template
    **/
    currentResult;
    previousResults = [];
    showPreviousResults = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if (inputBoxName === 'firstNumber') {
            this.firstNumber = event.target.value;
        } else if (inputBoxName === 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        if ( isNaN(firstN) || isNaN(secondN)) {
            this.currentResult = `Make sure both First Number and Second Number are both valid numbers`;
        } else {
            //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
            this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
            this.previousResults.push(this.currentResult);
        }  
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        if ( isNaN(firstN) || isNaN(secondN)) {
            this.currentResult = `Make sure both First Number and Second Number are both valid numbers`;
        } else {
            //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentResult);
        }
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        if ( isNaN(firstN) || isNaN(secondN)) {
            this.currentResult = `Make sure both First Number and Second Number are both valid numbers`;
        } else {
            //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
            this.currentResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
            this.previousResults.push(this.currentResult);
        } 
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        if ( isNaN(firstN) || isNaN(secondN)) {
            this.currentResult = `Make sure both First Number and Second Number are both valid numbers`;
        } else if (firstN == 0 || secondN == 0) {
            this.currentResult = `Can't divide using zero`;
        } else {
            //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
            //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
            this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
            this.previousResults.push(this.currentResult);
        } 

    }

    showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }

}