import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './model/admin-model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  private baseUrl = "http://localhost:7071/admins"
  constructor(private httpC : HttpClient) { }
  
  getAllAdmin():Observable<Admin[]>
  {
    return this.httpC.get<Admin[]>(this.baseUrl);
  }

  
}
