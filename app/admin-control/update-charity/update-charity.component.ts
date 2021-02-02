import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CategoryServiceService } from 'src/app/category-service.service';
import { Category } from 'src/app/model/category-model';


@Component({
  selector: 'app-update-charity',
  templateUrl: './update-charity.component.html',
  styleUrls: ['./update-charity.component.css']
})
export class UpdateCharityComponent implements OnInit {

  @Input("cob") cob:Category;
  @Output() flagEvent = new EventEmitter();
  @Output() arrEvent = new EventEmitter();

  id:number;
  name:string;
  description:string;
  activeStatus:boolean;

  categories:any;

  constructor(private svc : CategoryServiceService) { }

  ngOnInit(){

  }

  ngOnChanges(simple : SimpleChanges): void {
    //console.log(this.cob);
    if(simple["cob"].currentValue != simple["cob"].previousValue)
    {
      this.id=simple["cob"].currentValue.id;
      this.name=simple["cob"].currentValue.name;
      this.description=simple["cob"].currentValue.description;
      this.activeStatus=simple["cob"].currentValue.activeStatus;
    }
  }

  onItemChange(value:any)
  {
    this.activeStatus=value;
  }
  
  updCategory(){
    let ob = new Category(this.id,this.name,this.description,this.activeStatus)

    this.svc.updateCategory(this.id,ob).subscribe(result=>{
      this.arrEvent.emit(result as any);
      this.flagEvent.emit(false as any);
    });
  }


}
