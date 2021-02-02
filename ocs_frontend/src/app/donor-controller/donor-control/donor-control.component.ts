import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationServiceService } from 'src/app/donation-service.service';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { Donation } from 'src/app/model/donation-model';
import { NGO } from 'src/app/model/ngo-model';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-donor-control',
  templateUrl: './donor-control.component.html',
  styleUrls: ['./donor-control.component.css']
})
export class DonorControlComponent implements OnInit {

  NGOS : any;
  donors : any;
  donations : Donation[]=[];
  donArr : Donation[]=[];
  ngo:any;
  donor:any;
  donation:any;

  updDonorFlag=false;
  
  donationFormFlag=false;

  donatedNgoFlag=false;

  appNgo:NGO[];

  username:string;
  donorName : string;
  
  constructor(private router : Router, private ngoSvc : NgoServiceService,
    private donorSvc : DonorsServiceService, private donationSvc : DonationServiceService,
    private routes: ActivatedRoute) { }
    


  ngOnInit(): void {
    this.routes.paramMap.subscribe(params => {
      console.log("inside route " + params.get('username'));
      this.username = params.get('username');
    });
    console.log(this.username);
    this.donorSvc.getAllDonors().subscribe(
      dons=>{
        this.donors=dons;
        this.donors.forEach(element => {
          if(element.username==this.username)
          {
            this.donor=element;
            console.log(this.donor);
          }
        });
        this.donorName=this.donor.name;
        this.donationSvc.getAllDonations().subscribe(
          donts=>{
            this.donations=donts;
            this.donations.forEach(element => {
              if(element.donor.donorId==this.donor.donorId)
              {
                this.donArr.push(element);
              }
            });
            if(this.donArr.length != 0)
            {
              this.donatedNgoFlag=true;
              console.log(this.donatedNgoFlag);
            }
          });
          console.log(this.donArr);
          
      });
      //this.donatedNgoFlag=this.donor.donation==null?false:true;
      

    this.ngoSvc.getAllNgos().subscribe(
      ngos=>{
        this.NGOS=ngos;
          // this.NGOS.forEach(element => {
          //   if(element.ngoId==this.donation.ngo.ngoId)
          //   {
          //     this.ngo=element;
          //   }
          // });
      }
    );
  }


  updProfile()
  {
    // console.log(this.donor);
    // console.log(this.donation);
    // console.log(this.ngo);
    this.updDonorFlag = !this.updDonorFlag;
  }

  logoutButt()
  {
    this.router.navigate(['/logout']);
  }

  donateForm(apNgo : any)
  {
    this.ngo=apNgo;
    // console.log(this.donor);
    // console.log(this.ngo);
    this.donationFormFlag = !this.donationFormFlag;
  }
}

