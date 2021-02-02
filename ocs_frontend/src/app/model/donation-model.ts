import { Donor } from "./donor-mdel";
import { NGO } from "./ngo-model";

export class Donation{
    donationId : number;
    donationDate : Date;
    donationAmount : number;
    paymentMode : string;
    ngoId : number;
    donorId : number;
    ngo : NGO;
    donor : Donor;
    
    constructor(donationId : number, donationDate : Date, donationAmount : number,paymentMode : string, ngo : NGO, donor : Donor)
    {
        this.donationId=donationId;
        this.donationDate=donationDate;
        this.donationAmount=donationAmount;
        this.paymentMode=paymentMode;
        this.ngo=ngo;
        this.donor=donor;
    }

}