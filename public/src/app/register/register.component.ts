import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

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
  		.then( (user) => this._router.navigate(['/home']))
  		.catch( (err) =>
        this.error=err)

    }



  public imageSources: string[] = [
   'http://thewoksoflife.com/wp-content/uploads/2015/03/cantonese-roast-pork-belly-13.jpg',
  'http://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2011/09/babyo.jpg?resize=700%2C%20525',
 'http://d26lx5whx8iuky.cloudfront.net/app/uploads/2015/08/Escargot-.jpg',
 'https://s-media-cache-ak0.pinimg.com/736x/13/db/ff/13dbff97ebee086eefa8f21111b3d695--chinese-roast-duck-chinese-food.jpg',
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };




}
