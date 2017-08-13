import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: any;
  email='';
  password='';
  constructor(private _loginService: LoginService, private _router:Router) { }

  ngOnInit() {
  }

  login(){
    this._loginService.login({email:this.email, password: this.password})
      .then( (user)=> this._router.navigate(['home']))
      .catch( (errors)=>{
      this.errors = "user was not found"
      })
  }

}
