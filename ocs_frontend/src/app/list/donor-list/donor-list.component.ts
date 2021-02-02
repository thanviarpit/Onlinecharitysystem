import { Component, OnInit } from '@angular/core';
import { DonorsServiceService } from 'src/app/donors-service.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors : any;
  constructor(private svc : DonorsServiceService) { }

  ngOnInit(): void {
    this.svc.getAllDonors().subscribe(
      dons=>{
          this.donors=dons;
          console.log(this.donors);
      },
      error=>{
        console.log(error)
      }
    );
  }

}

