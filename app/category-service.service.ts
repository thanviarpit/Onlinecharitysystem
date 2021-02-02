import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from './model/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private baseUrl = "http://localhost:7071/categories";
  constructor( private httpCli : HttpClient) { }
  
  getAllCategories():Observable<Category[]>
  {
    return this.httpCli.get<Category[]>(this.baseUrl);
  }

  updateCategory(id:number, obj:any):Observable<Category[]>
  {
    var subject =new Subject<any>();
    this.httpCli.put(`${this.baseUrl}/${id}`,obj).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  removeCategroy(id:number):Observable<Category[]>
  {
    var subject=new Subject<any>();
    this.httpCli.delete(`${this.baseUrl}/${id}`).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  addCategory(obj:any):Observable<Category[]>
  {
    var subject = new Subject<any>();
    this.httpCli.post(`${this.baseUrl}`,obj).subscribe(r=>{
      this.httpCli.get(`${this.baseUrl}`).subscribe(result=>{
        subject.next(result);
      });
    });
    return subject.asObservable();
  }

  getCatById(id:number):Observable<Category>
  {
    return this.httpCli.get<Category>(`${this.baseUrl}/${id}`)
  }
}
