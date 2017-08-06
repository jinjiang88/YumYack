import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService } from './../src/app/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';



  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username, this.password);
    this._loginService.login({username:this.username, password:this.password})
    .then( (user)=> this._router.navigate(['landingPage']))
    .catch( (err)=> {console.log(err)});
    
  }

}
