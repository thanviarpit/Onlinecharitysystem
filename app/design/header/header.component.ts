import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn:boolean;
  constructor(private loginservice:LoginServiceService) { }

  ngOnInit() {
    this.loginservice.currentLoginState.subscribe(result=>this.loggedIn=result);
   
  }
}
