import { LightningElement, api } from 'lwc';

export default class Question extends LightningElement {
    @api questionObject;

    connectedCallback(){
        console.log(JSON.stringify(this.questionObject));
    }
}
