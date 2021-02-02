import { Donation } from "./donation-model";
import { NGO } from "./ngo-model";

export class Donor{
    donorId : number;
    name : string;
    age : number;
    email : string;
    mobile : string ;
    occupation : string;
    address : string;
    username : string ;
    password : string;
    activeStatus : boolean;
    donation : Donation;
    ngo : NGO;
    
    constructor( id : number, name : string, age : number, email : string, mobile : string, occupation : string,
        address : string, username : string, password : string, activeStatus : boolean)
        {
            this.donorId=id;
            this.name=name;
            this.age=age;
            this.email=email;
            this.mobile=mobile;
            this.occupation=occupation;
            this.address=address;
            this.username=username;
            this.password=password;
            this.activeStatus=activeStatus;
        }
}