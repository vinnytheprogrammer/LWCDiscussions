import ForecastEnabled from '@salesforce/schema/User.ForecastEnabled';
import { LightningElement , api} from 'lwc';

export default class SampleChild extends LightningElement {
    @api named = false;
    value;
    get options() {
        return [
            { label: 'Nexon ', value: 'Nexon' },
            { label: 'Volvo', value: 'Volvo' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Punch', value: 'Punch' },
            { label: 'Porsche', value: 'Porsche' }
        ];
    }


    handleChange(event){
        this.value = event.target.value;
        //console.log(this.value);
        this.dispatchEvent(new CustomEvent('carselected', {detail : this.value})); 
    }


    // handleClick(event){
    //     if(this.named==false)
    //         this.named = true; 
    //     else
    //         this.named = false; 
    //}
}