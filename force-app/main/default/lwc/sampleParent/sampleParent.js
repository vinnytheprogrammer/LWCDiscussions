import { LightningElement, track} from 'lwc';

export default class SampleParent extends LightningElement {
    carName;
    getCarDetail;
    @track carMap =[];
    connectedCallback(){
         
        this.carMap.push({key: "Nexon",value: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=75"},
        {key: "Volvo",value: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/XC90ModelImage.jpg&w=872&h=578&q=75&c=1"},
        {key: "BMW",value: "https://imgd.aeplcdn.com/0x0/cw/ec/37095/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914.jpg?wm=0"},
        {key: "Mahindra",value: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Alturas%20G4ModelImage.jpg&w=350&h=251&q=90&c=1"},
        {key: "Chevrolet",value: "https://www.carkhabri.com/Gallery/chevrolet/chevrolet-camaro/exterior/large/19.jpg"},
        {key: "Punch",value: "https://imgd.aeplcdn.com/0x0/n/cw/ec/39015/punch-exterior-left-front-three-quarter-4.jpeg?isig=0"},
        {key: "Porshe",value: "https://www.wheels97.com/tr:w-500,h-400,dpr-2.625/images/car-color-images/porsche/porsche-macan/black_KemcXPN3C.jpg"}

        );
     /*   this.carMap.push("BMW","");
        this.carMap.push("Mahindra","");
        this.carMap.push("Chevrolet","");
        this.carMap.push("Punch","");
        this.carMap.push("Porshe","");*/
   //console.log(this.carMap);
   }
   
    handleCarSelected(event){
       console.log('This is inside parent JS handler');
       this.carName = event.detail;
       console.log('CAr Name is'+ this.carName);
       for(let [key, value] in this.carMap.entries()){
        if(key == this.carName){ this.getCarDetail = value}
       console.log(key + ': ' + value);
       }
       this.getCarDetail = this.carMap.get(this.carName);
        
       console.log('Car URL ' + this.getCarDetail); 
    }


}