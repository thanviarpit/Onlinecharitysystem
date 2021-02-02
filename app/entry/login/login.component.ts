import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin-service.service';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { LoginServiceService } from 'src/app/login-service.service';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admins:any;
  ngos:any;
  donors:any;
  role:any;
  username : string;
  password : string;
  
  loggedIn:boolean;
  constructor(private adminSvc : AdminServiceService, private ngoSvc : NgoServiceService, 
    private donorSvc : DonorsServiceService,private loginservice:LoginServiceService, private router : Router ) { }

  ngOnInit(): void {
    console.log(this.role);
    this.loginservice.currentLoginState.subscribe(result=>this.loggedIn=result);
  }
  authenticate()
  {
    if(this.role=="admin")
    {
      this.adminSvc.getAllAdmin().subscribe(
        adm=>{
            this.admins=adm;
            console.log(this.admins); 
             this.admins.forEach(element => {
              if(element.username==this.username && element.password==this.password)
              {
                this.loginservice.changecurrentLoginState(true);
                    this.router.navigate(['/adminController',this.username]);
                  
              }
            });
        }
      );
    
        
    }
    else if(this.role=="donor")
    {
      this.donorSvc.getAllDonors().subscribe(
        don=>{
          this.donors=don;
          this.donors.forEach(element => {
            if(element.username==this.username && element.password==this.password)
            {
              this.loginservice.changecurrentLoginState(true);
              this.router.navigate(['/donorController',this.username]);
            }
          });
        }
      );
    }
    else if(this.role=="ngo")
    {
        this.ngoSvc.getAllNgos().subscribe(
          ngo=>
          {
            this.ngos=ngo;
            this.ngos.forEach(element => {
              if(element.username==this.username && element.password==this.password)
              {
                this.loginservice.changecurrentLoginState(true);
                this.router.navigate(['/ngoController' ,this.username]);
              }
            });
          }
        );
    }
  }
}
