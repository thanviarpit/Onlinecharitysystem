import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/category-service.service';
import { DonationServiceService } from 'src/app/donation-service.service';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { Category } from 'src/app/model/category-model';
import { Donor } from 'src/app/model/donor-mdel';
import { NGO } from 'src/app/model/ngo-model';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-admin-controller',
  templateUrl: './admin-controller.component.html',
  styleUrls: ['./admin-controller.component.css']
})
export class AdminControllerComponent implements OnInit {
  categories : any;
  NGOS : any;
  donors : any;
  donations : any;
  addCharFlag=false;
  charFlag=false;
  ngoFlag=false;
  donorFlag=false;
  donationFlag=false;
  updCharFlag=false;
  updNgoFlag=false;
  updDonorFlag=false;
  catObj:Category;
  ngoObj:NGO;
  donorObj:Donor;
  name:string;
  description:string;
  activeStatus=true;
  id=0;
  username:string;
  constructor(private catSvc : CategoryServiceService, private ngoSvc : NgoServiceService,
    private donorSvc : DonorsServiceService, private donationSvc : DonationServiceService, private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log("inside route " + params.get('username'));
      this.username = params.get('username');
    });

    this.catSvc.getAllCategories().subscribe(
      cats=>{
        this.categories=cats;
      }
    );

    this.ngoSvc.getAllNgos().subscribe(
      ngos=>{
        this.NGOS=ngos;
      }
    );

    this.donorSvc.getAllDonors().subscribe(
      dons=>{
        this.donors=dons;
      }
    );

    this.donationSvc.getAllDonations().subscribe(
      donts=>{
        this.donations=donts;
      }
    );
  }

  addCharityButt()
  {
    this.addCharFlag=true;
    this.charFlag=false;
    this.ngoFlag=false;
    this.donorFlag=false;
    this.donationFlag=false;
    this.updCharFlag=false;
    this.updNgoFlag=false;
    this.updDonorFlag=false;
  }

  addCat()
  {
    let obj = new Category(this.id, this.name, this.description, this.activeStatus);
    this.catSvc.addCategory(obj).subscribe(result=>{
      this.categories=result;
      this.addCharFlag=false;
      this.charFlag=true;
    });
  }
  charitiesButt()
  {
    this.addCharFlag=false;
    this.charFlag=true;
    this.ngoFlag=false;
    this.donorFlag=false;
    this.donationFlag=false;
    this.updCharFlag=false;
    this.updNgoFlag=false;
    this.updDonorFlag=false;
  }

  ngosButt()
  {
    this.addCharFlag=false;
    this.charFlag=false;
    this.ngoFlag=true;
    this.donorFlag=false;
    this.donationFlag=false;
    this.updCharFlag=false;
    this.updNgoFlag=false;
    this.updDonorFlag=false;
  }

  donorsButt()
  {
    this.addCharFlag=false;
    this.charFlag=false;
    this.ngoFlag=false;
    this.donorFlag=true;
    this.donationFlag=false;
    this.updCharFlag=false;
    this.updNgoFlag=false;
    this.updDonorFlag=false;
  }

  donationsButt()
  {
    this.addCharFlag=false;
    this.charFlag=false;
    this.ngoFlag=false;
    this.donorFlag=false;
    this.donationFlag=true;
    this.updCharFlag=false;
    this.updNgoFlag=false;
    this.updDonorFlag=false;
  }
  logoutButt()
  {
   this.router.navigate(['/logout']);
  }

  updChar(cat:Category){
    this.updCharFlag=true;
    this.catObj=cat;
    //console.log(this.catObj);
  }

  remChar(cat:Category){
    this.catSvc.removeCategroy(cat.id).subscribe(result=>this.categories=result);

  }
  
  updNgo(ng:NGO){
    this.updNgoFlag=true;
    this.ngoObj=ng;
    //console.log(this.ngoObj);
  }

  remNgo(ng:NGO){
    this.ngoSvc.removeNgo(ng.ngoId).subscribe(result=>this.NGOS=result);
  }
  
  updDonor(don:Donor){

    this.updDonorFlag=true;
    this.donorObj=don;
  }

  remDonor(don:Donor){
    this.donorSvc.removeDonor(don.donorId).subscribe(result=>this.donors=result);

  }
}
