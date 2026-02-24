import { LightningElement, track } from 'lwc';

export default class LWCTechniques extends LightningElement {

    one_way_binding = "This text uses one-way Data Binding \
    from the JavaScript controller to the HTML."

    object_binding = {
        value1: "Object notation can used.",
        Value2: "This uses object notation."
    }

    one_way_binding_text  = "Type in the box to replace this test using two-way binding";

    twoWayBindingHandler(event) {
        this.one_way_binding_text = event.target.value;
    }

    @track trackedText = {
        track: "Using @track will update the valie of an object.",
        new_copy: `Avoid using the @track property and mutating the data.
        Create a new copy using the spread operator and the component will rerender.`
    }

    spreadText = {
        track: "Using @track will update the valie of an object.",
        new_copy: `Avoid using the @track property and mutating the data.
        Create a new copy using the spread operator and the component will rerender.`
    }

    trackHandler(e) {
        // Update property of object
        this.trackedText.track = e.target.value;
    }

    spreadHandler(e) {
        // Update the whole object using spread operator and event target value
        this.spreadText = {...this.spreadText, "new_copy": e.target.value};
    }

    // GETTERS
    users = ["Alan", "Ruth", "Matthew", "Lucy"]
    num1 = 10;
    num2 = 20;

    get usersList() {
        return this.users;
    }

    get firstUser() {
        return this.users[0];
    }

    get sum() {
        return this.num1 + this.num2;
    }

    // CONDITIONAL RENDERING DIRECTIVES
    isVisible = true;
    buttonLabel = "Hide Message";

    handleShowData() {
        this.isVisible = !this.isVisible;
        this.buttonLabel = this.isVisible ? "Hide Message" : "Show Message";
    }




}