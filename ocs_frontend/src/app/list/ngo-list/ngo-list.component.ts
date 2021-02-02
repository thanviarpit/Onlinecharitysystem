import { Component, OnInit } from '@angular/core';
import { NgoServiceService } from 'src/app/ngo-service.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {

  constructor(private svc : NgoServiceService) { }
  NGOS : any;
  ngOnInit(): void {
    this.svc.getAllNgos().subscribe(
      ngos=>{
        this.NGOS=ngos;
        console.log(ngos);
      },
      error=>{
        console.log(error);
      }
    );
  }

}

