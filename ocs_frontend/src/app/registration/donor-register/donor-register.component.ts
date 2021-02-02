import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { Donor } from 'src/app/model/donor-mdel';

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.css']
})
export class DonorRegisterComponent implements OnInit {

  buttFlag=false;

  id=0;
  name : string;
  age : any;
  email : string;
  mobile : string ;
  occupation : string;
  address : string;
  username : string ;
  password : string;
  cnfPassword:string;
  activeStatus =true;

  constructor(private donorSvc : DonorsServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  onClickPass()
  {
    this.buttFlag=true;
  }

  onClickEnter()
  {
    if(this.password==this.cnfPassword)
    {
      this.buttFlag=false;
    }
  }
  
  onClick()
  {
    console.log(this.age);
  }
  
  register()
  {
    console.log(this.age);
    let ob = new Donor(this.id, this.name, this.age, this.email, this.mobile, this.occupation, this.address, 
      this.username, this.cnfPassword, this.activeStatus)
      console.log(ob);
      this.donorSvc.addDonor(ob).subscribe(result=>{
        this.router.navigate(['/login']);
      });
      
  }
}

