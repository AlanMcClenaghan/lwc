import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} // use for storing answers
    correctAnswers =  0 // use to show the number of correct answers
    isSubmitted = false; // use to show the result

    myQuestions=[
        {
            id:"1",
            question: "Which of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"2",
            question: "Which the file extensions is invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"3",
            question: "Which of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    //used for disabling the sumbmit button
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-tile slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }

    // changeHandler get's called on every click on the options
    changeHandler(event) {
        console.log("Name:", event.target.name);
        console.log("Value:", event.target.value);
        const {name, value} = event.target;
        this.selected={...this.selected, [name]: value};
    }

    // form submit handler
    submitHandler(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        // this.selected = {"i": "x", "i": "x", "i": "x"}
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
        console.log("Correct Answers: ", this.correctAnswers);
    }

    // form reset handler
    resetHandler(event) {
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}