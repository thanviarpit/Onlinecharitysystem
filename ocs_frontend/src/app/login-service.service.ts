import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn= new BehaviorSubject<boolean>(false);
  currentLoginState=this.loggedIn.asObservable(); 

  changecurrentLoginState(state:boolean)
  {    
    this.loggedIn.next(state);
  }
}
