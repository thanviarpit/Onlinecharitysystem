import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donation } from './model/donation-model';

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {
  private baseUrl = "http://localhost:7071/donations";
  constructor( private httpCli : HttpClient) { }

  getAllDonations():Observable<Donation[]>
  {
    return this.httpCli.get<Donation[]>(this.baseUrl);
  }
  
  addDonation(obj:any):Observable<Donation[]>
  {
    var subject = new Subject<any>();
    this.httpCli.post(`${this.baseUrl}`,obj).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }
}

