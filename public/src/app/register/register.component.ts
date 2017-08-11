import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 constructor(private _registerService:RegisterService, private _router: Router) { }
 error='';
  ngOnInit() {
  }
  username='';
  lname='';
  fname='';
  email='';
  password='';
  passwordConfirm='';

 register(){
    console.log(this.username, this.lname, this.fname, this.email,this.password);
        this._registerService.register({email:this.email,username:this.username,password:this.password,fname:this.fname,lname:this.lname})
          .then( (user) => {this._router.navigate(['/home'])})
          .catch( (err) => console.log(err) )


  }
}
