import { LightningElement } from 'lwc';

export default class SampleParent extends LightningElement {
    parentNamed = false;
    handleCarSelected(event){
        //let parentNamed = this.template.querySelector('c-sample-child').named ;
        if(this.parentNamed == false ){
            //this.template.querySelector('c-sample-child').named = true;
            this.parentNamed = true;

        }
        else 
            //this.template.querySelector('c-sample-child').named =false; 
            this.parentNamed =false;
    }
}