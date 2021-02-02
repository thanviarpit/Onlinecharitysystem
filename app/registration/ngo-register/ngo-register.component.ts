import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/category-service.service';
import { Category } from 'src/app/model/category-model';
import { NGO } from 'src/app/model/ngo-model';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {

  categories:any;
  simpleValue:any;
  
  
  id=0;
  orgRegName:string;
  orgRegNum:string;
  email:string;
  mobile:string;
  address:string;
  username:string;
  password:string;
  cnfPassword:string;
  approveStatus=false;
  activeStatus=true;
  categoryId:any;
  category:any;
  regButFlag=false;
  modalFlag=false;

  constructor(private catSvc : CategoryServiceService, private ngoSvc : NgoServiceService, private router : Router) { }
  
  ngOnInit(): void {
    this.catSvc.getAllCategories().subscribe(
      cats=>{
          this.categories=cats;
          //console.log(this.categories);
      },
      error =>{
        console.log(error);
      }
    );
  }

  atGetCat(value)
  {
    this.categoryId=value;
    //console.log(this.category);
  }


  onPassClick()
  {
    this.modalFlag=true;
  }
  onChangePassword(){
    if(this.password==this.cnfPassword)
    {
      this.modalFlag=false;
    }
    
  }

  register()
  {
    this.categories.forEach(element => {
      if(element.id==this.categoryId)
      {
        this.category=element;
      }
    });
    console.log(this.category)
    let ob = new NGO( this.id, this.orgRegName , this.orgRegNum, this.email, this.mobile ,
      this.address , this.username,  this.cnfPassword, this.approveStatus, this.activeStatus, this.category)

    this.ngoSvc.addNgo(ob).subscribe(result=>{
      this.router.navigate(['/login']);
    });
  }

}
