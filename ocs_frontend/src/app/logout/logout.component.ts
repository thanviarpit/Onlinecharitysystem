import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginservice:LoginServiceService, private router : Router) { }

  ngOnInit() {
    this.logoutTask();
  }

  logoutTask()
  {
    this.loginservice.changecurrentLoginState(false);
    this.router.navigate(['/home']);
  }

}

