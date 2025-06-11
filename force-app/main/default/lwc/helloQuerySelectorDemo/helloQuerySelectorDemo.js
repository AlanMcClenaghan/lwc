import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    names = ["Alan", "Ruth", "Matthew", "Lucy"];
    fetchDetailsHandler() {
        const heading = this.template.querySelector('h1');
        heading.style.border="5px solid red";
        heading.style.fontSize="30px";
        console.log(heading.innerText);

        const nameElements = this.template.querySelectorAll('.name');
        console.log(nameElements);
        /* nameElements is not an array, 
        so needs to be converted into one */
        Array.from(nameElements).forEach(name=>{
            console.log(name.innerText);
            name.setAttribute("title", name.innerText);
        })

        // lwc:dom="manual" demo
        const childElement = this.template.querySelector('.child');
        childElement.innerHTML = '<p>Hi, I am a child element</p>'
    }
}