import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DonorsServiceService } from 'src/app/donors-service.service';
import { Donation } from 'src/app/model/donation-model';
import { Donor } from 'src/app/model/donor-mdel';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {

  @Input("dob") dob:Donor;
  @Output() flagEvent = new EventEmitter();
  @Output() arrEvent = new EventEmitter();
  

  id:number;
  name:string;
  age:number;
  email:string;
  mobile:string;
  occupation:string;
  address:string;
  username : string ;
  password : string;
  activeStatus:boolean;

  constructor(private svc : DonorsServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(simple : SimpleChanges) : void{
    //console.log(this.nob);
      this.id=simple["dob"].currentValue.donorId;
      this.name=simple["dob"].currentValue.name;
      this.age=simple["dob"].currentValue.age;
      this.email=simple["dob"].currentValue.email;
      this.mobile=simple["dob"].currentValue.mobile;
      this.address=simple["dob"].currentValue.address;
      this.occupation=simple["dob"].currentValue.occupation;
      this.username=simple["dob"].currentValue.username;
      this.password=simple["dob"].currentValue.password;
      this.activeStatus=simple["dob"].currentValue.activeStatus;

    }

    onActiveChange(value:any)
    {
      this.activeStatus=value;
    }

    updCategory(){
      let ob = new Donor(this.id,this.name,this.age,this.email,this.mobile,this.address,this.occupation,
        this.username,this.password,this.activeStatus)
  
      this.svc.updateDonor(this.id,ob).subscribe(result=>{
        this.arrEvent.emit(result as any);
        this.flagEvent.emit(false as any);
      });
    }
  }

