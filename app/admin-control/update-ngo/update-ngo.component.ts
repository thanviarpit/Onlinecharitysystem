import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/model/category-model';
import { NGO } from 'src/app/model/ngo-model';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-update-ngo',
  templateUrl: './update-ngo.component.html',
  styleUrls: ['./update-ngo.component.css']
})
export class UpdateNgoComponent implements OnInit {

  @Input("nob") nob:NGO;
  @Output() flagEvent = new EventEmitter();
  @Output() arrEvent = new EventEmitter();

  id:number;
  orgRegName:string;
  orgRegNum:string;
  email:string;
  mobile:string;
  address:string;
  activeStatus:boolean;
  approveStatus:boolean;
  username:string;
  password:string;
  category:Category;
  constructor(private svc : NgoServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(simple : SimpleChanges) : void{
    //console.log(this.nob);
      this.id=simple["nob"].currentValue.ngoId;
      this.orgRegName=simple["nob"].currentValue.orgRegName;
      this.orgRegNum=simple["nob"].currentValue.orgRegNum;
      this.email=simple["nob"].currentValue.email;
      this.mobile=simple["nob"].currentValue.mobile;
      this.address=simple["nob"].currentValue.address;
      this.activeStatus=simple["nob"].currentValue.activeStatus;
      this.approveStatus=simple["nob"].currentValue.approveStatus;
      this.username=simple["nob"].currentValue.username;
      this.password=simple["nob"].currentValue.password;
      this.category=simple["nob"].currentValue.category;
    }
  
    onActiveChange(value:any)
    {
      this.activeStatus=value;
      console.log("in active change : "+ this.activeStatus);
    }

    onApproveChange(value:any)
    {
      this.approveStatus=value;
      console.log("in approve change : "+ this.approveStatus);
    }

    updCategory(){
      console.log("update app stat : "+this.approveStatus);
      console.log("update act stat : "+this.activeStatus);
      let ob = new NGO(this.id,this.orgRegName,this.orgRegNum,this.email,this.mobile,this.address,
        this.username,this.password,this.approveStatus,this.activeStatus,this.category)
  
      this.svc.updateNgo(this.id,ob).subscribe(result=>{
        this.arrEvent.emit(result as any);
        this.flagEvent.emit(false as any);
      });
    }
}
