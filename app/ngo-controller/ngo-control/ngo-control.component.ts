import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationServiceService } from 'src/app/donation-service.service';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { Donation } from 'src/app/model/donation-model';
import { Donor } from 'src/app/model/donor-mdel';
import { NGO } from 'src/app/model/ngo-model';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-ngo-control',
  templateUrl: './ngo-control.component.html',
  styleUrls: ['./ngo-control.component.css']
})
export class NgoControlComponent implements OnInit {

  NGOS : any;
  donors : any;
  donations : any;
  donationArr : Donation[]=[];
  ngo:any;
  donor:any;
  donation:any;

  updFormFlag=false;

  donorFlag=false;

  username:string;

  ngoName : string;

  constructor(private router : Router, private donorSvc : DonorsServiceService, 
    private donationSvc : DonationServiceService, private ngoSvc : NgoServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log("inside route " + params.get('username'));
      this.username = params.get('username');
    });
    this.ngoSvc.getAllNgos().subscribe(
      ngos=>{
        this.NGOS=ngos;
        this.NGOS.forEach(element => {
          if(element.username==this.username)
          {
            this.ngo=element;
            console.log(this.ngo);
          }
        });
        this.ngoName=this.ngo.orgRegName;
        console.log(this.ngoName);
        console.log(this.ngo.ngoId);
        this.donationSvc.getAllDonations().subscribe(
          donts=>{
            this.donations=donts;
            this.donations.forEach(element => {
              if(element.ngo.ngoId==this.ngo.ngoId)
              {
                this.donationArr.push(element);
              }
            });
            console.log(this.donationArr);
            if(this.donationArr.length==0?false:true)
            {
              this.donorFlag=true;
              console.log(this.donorFlag);
            }
          });
          
      });
      
      // this.donorFlag=this.ngo.donation==null?false:true;
      

    // this.donorSvc.getAllDonors().subscribe(
    //   dons=>{
    //     this.donors=dons;
    //     this.donors.forEach(element => {
    //       if(element.donorId==this.donation.donor.donorId)
    //       {
    //         this.donor=element;
    //       }
    //     });
    //   }
    // );



  }

  updProfile()
  {

    console.log(this.ngo);
    // console.log(this.ngo.ngoId);
    // console.log(this.donation);
    // console.log(this.donor);
    this.updFormFlag=!this.updFormFlag;
  }
  logoutButt()
  {
   this.router.navigate(['/logout']);
  }
}
