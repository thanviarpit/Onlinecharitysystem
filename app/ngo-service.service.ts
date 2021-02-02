import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NGO } from './model/ngo-model';

@Injectable({
  providedIn: 'root'
})
export class NgoServiceService {

  private baseUrl = "http://localhost:7071/ngos";
  constructor( private httpCli : HttpClient) { }
  
  getAllNgos():Observable<NGO[]>
  {
    return this.httpCli.get<NGO[]>(this.baseUrl);
  }

  updateNgo(id:number, obj:any):Observable<NGO[]>
  {
    var subject =new Subject<any>();
    this.httpCli.put(`${this.baseUrl}/${id}`,obj).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  removeNgo(id:number):Observable<NGO[]>
  {
    var subject=new Subject<any>();
    this.httpCli.delete(`${this.baseUrl}/${id}`).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  addNgo(obj:any):Observable<NGO[]>
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
