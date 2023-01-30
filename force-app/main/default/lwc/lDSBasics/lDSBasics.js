import { LightningElement , track, wire, api } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website', 'Account.NumberOfEmployees']
export default class LDSBasics extends LightningElement {
    @track accName ;
    @track accPhone;
    @track website;
    @track employees;
    @track recordId;

    @wire(getRecord, {recordId : '$recordId', fields : fieldArray }) 
    accountRecord;


    AccountNameHandler(event){
        this.accName = event.target.value; 
    }

    AccountPhoneHandler(event){
        this.accPhone = event.target.value;
    }
    AccountWebsiteHandler(event){
        this.website = event.target.value;
    }
    AccountEmpHandler(event){
        this.employees = event.target.value;
    }

    createAccount(){
        
        const fields = {"Name" : this.accName, "Phone" : this.accPhone, "Website": this.website, "NumberOfEmployees" : this.employees}
        const recordInput = {apiName : 'Account', fields };

        createRecord(recordInput).then(response => {
            console.log('Account Record Created: '+ response.id); 
            this.recordId=response.id;
            console.log('ID Captured ' + this.recordId);
        }).catch(error=>{ console.error('failed '+ error.body.message) });

       
    }
    


    get retAccountName(){
        //console.log(this.accountRecord.data.fields.Name.value);
        if(this.accountRecord.data){
            
            return this.accountRecord.data.fields.Name.value; 
        }
        else  
            return undefined; 
    }

    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value; 
        }
        else  
            return undefined; 
        
    }

    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value; 
        }
        else  
            return undefined; 
    }

    get retAccountEmployees(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.NumberOfEmployees.value; 
        }
        else  
            return undefined; 
    }
}  