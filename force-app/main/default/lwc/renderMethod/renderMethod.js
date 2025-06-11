import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderMethod from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    selectedBtn='';
    render() {
        return this.selectedBtn === 'signin' ? signinTemplate : 
                this.selectedBtn === 'signup' ? signupTemplate :
                renderMethod;
    }
    handleClick(event) {
        this.selectedBtn = event.target.title
    }

    submitHandler(event) {
       alert(`${event.target.label} successful`)
    }
}