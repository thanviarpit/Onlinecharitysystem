import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DonationServiceService } from 'src/app/donation-service.service';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { Donation } from 'src/app/model/donation-model';
import { Donor } from 'src/app/model/donor-mdel';
import { NGO } from 'src/app/model/ngo-model';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  @Input("dob") dob:Donor;
  @Input("nob") nob:NGO;
  @Output() flagEvent = new EventEmitter();
  @Output() arrEvent = new EventEmitter();
  donationId=0;
  donorId:number;
  nogId:number;
  donorname:string;
  ngoname:string;
  amount:number;
  date:Date;
  payMode:string;
  ngo : NGO;
  donor : Donor;


  constructor(private ngoSvc : NgoServiceService, private donorSvc : DonorsServiceService, 
    private donationSvc : DonationServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(simple : SimpleChanges) : void{
    this.donorId=simple["dob"].currentValue.donorId;
    this.donorname=simple["dob"].currentValue.name;
    this.nogId=simple["nob"].currentValue.ngoId;
    this.ngoname=simple["nob"].currentValue.orgRegName;
  }

  makeDonation()
  {

    let ob = new Donation(this.donationId,this.date,this.amount,this.payMode,this.nob,this.dob)
    console.log(ob);
    this.donationSvc.addDonation(ob).subscribe(result=>
      {
        this.arrEvent.emit(result as any);
        this.flagEvent.emit(false as any);
      });
  }
}

