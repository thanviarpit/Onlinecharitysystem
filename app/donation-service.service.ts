import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donation } from './model/donation-model';

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  private donations: Donation[] = [];
  private donationsUpdated = new Subject<Donation[]>();

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
        console.log(result);
        subject.next(result);
      });
    });
    return subject.asObservable();
  }


  getDonationUpdatedListener()
  {
    return this.donationsUpdated.asObservable();
  }


  insertDonation(obj : any)
  {
    this.httpCli.post<{flagEvent:boolean,donation:Donation}>(`${this.baseUrl}`,obj).subscribe(r=>{
        console.log(r);
      const  donation : Donation = {
        donationId : r.donation.donationId,
        donationDate : r.donation.donationDate,
        donationAmount : r.donation.donationAmount,
        paymentMode : r.donation.paymentMode,
        ngo : r.donation.ngo,
        donor : r.donation.donor,
        ngoId : r.donation.ngoId,
        donorId : r.donation.donorId
      };
      this.donations.push(donation);
      this.donationsUpdated.next([...this.donations]);
      console.log(this.donations);
      
    });
  }
}
