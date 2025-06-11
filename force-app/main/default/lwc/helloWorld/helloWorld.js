import { LightningElement, /*track*/ } from 'lwc';

export default class HelloWorld extends LightningElement {
    // Properties
    name = {
        firstname: "Alan",
        lastname: "McClenaghan"
    }
    title = "Salesforce Developer";
    fullname = `${this.name.firstname} ${this.name.lastname}`;

    // Methods
    changeHandler(event) {
        // Perform logic:
        this.title = event.target.value;
    }


    /* @track decorator tells the framework to observe changes 
    to the properties of an object or elements of an array. */ 
    /* @track */ address = {
        city: "London",
        postcode: "KT4 8NZ",
        country: "UK"
    }

    /* Avoid using the @track property and mutating the data.
   Create a new copy using the spread operator and the component will rerender. */ 
    trackHandler(event) {
        // Avoid mutating the object directly
        // this.address.city = event.target.value;
        // Using the Spread operator creates a new copy of the object
        this.address = {...this.address, "city" : event.target.value };
    }

    // Getter example
    users = ["Alan", "Ruth", "Matthew", "Lucy"];
    num1 = 10;
    num2 = 20;
    get firstuser() {
        return this.users[0].toUpperCase();
    }
    get multiply() {
        return this.num1 * this.num2;
    }

}