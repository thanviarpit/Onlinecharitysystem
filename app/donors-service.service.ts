import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donor } from './model/donor-mdel';

@Injectable({
  providedIn: 'root'
})
export class DonorsServiceService {

  private baseUrl = "http://localhost:7071/donors";
  constructor( private httpCli : HttpClient) { }
  
  getAllDonors():Observable<Donor[]>
  {
    return this.httpCli.get<Donor[]>(this.baseUrl);
  }

  updateDonor(id:number, obj:any):Observable<Donor[]>
  {
    var subject =new Subject<any>();
    this.httpCli.put(`${this.baseUrl}/${id}`,obj).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  removeDonor(id:number):Observable<Donor[]>
  {
    var subject=new Subject<any>();
    this.httpCli.delete(`${this.baseUrl}/${id}`).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  addDonor(obj:any):Observable<Donor[]>
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
