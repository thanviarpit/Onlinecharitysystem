import { Category } from "./category-model";
import { Donation } from "./donation-model";
import { Donor } from "./donor-mdel";


export class NGO{
    ngoId : number;
    orgRegName : string;
    orgRegNum : string;
    email : string;
    mobile : string ;
    address : string ;
    username : string;
    password : string;
    approveStatus : boolean;
    activeStatus : boolean;
    category : Category;
    donor : Donor;
    donation:Donation;
    
    constructor( id : number, orgRegName : string, orgRegNum : string, email : string, mobile : string,
        address : string, username : string,  password : string, approveStatus : boolean, activeStatus : boolean, category : Category)
    {
        this.ngoId=id;
        this.orgRegName=orgRegName;
        this.orgRegNum=orgRegNum;
        this.email=email;
        this.mobile=mobile;
        this.address=address;
        this.username=username;
        this.password=password;
        this.approveStatus=approveStatus;
        this.activeStatus=activeStatus;
        this.category = category;
    }
}
