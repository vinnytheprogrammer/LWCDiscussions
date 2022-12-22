import { LightningElement } from 'lwc';

export default class HelloWorldParent extends LightningElement {
    callChild(event){
        this.template.querySelector('c-hello-world').flag= true;
    }
}