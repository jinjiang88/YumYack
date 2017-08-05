import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FacebookService) {
  	  let initParams: InitParams = {
      appId: '133792100554673',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);

   }

  ngOnInit() {
  }
  loginWithFacebook(): void {
 
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
