import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { LandingPageService } from './landing-page.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
grossest: object[]=[]
errors = []
<<<<<<< HEAD


=======
users: any;
>>>>>>> f93ad500ca75af3c9c5e57c42617c59a0d3e2f74
  constructor(private _landingservice: LandingPageService, private _router:Router) { }

  ngOnInit() {
    // this.getCurrentUser();
  }
thebar="red";
public imageSources: string[] = [
     'http://lorempixel.com/400/200/',
 'http://lorempixel.com/400/200/sports/',
   'http://lorempixel.com/400/200/',
 'http://lorempixel.com/400/200/sports/'
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
  checkingaverage(){
    this.averaging()
  }
  changecolor(){
    this.thebar = "white";
  }
  averaging(){
    this._landingservice.averaging()
    .then((data)=>{
      console.log(data)
    })
  }
  mostgross(){
    this._landingservice.grabgrossest()
    .then((data)=>{
      this.grossest = data
    })
    .catch(err=>{if(err){
      this.errors = err;
    }
  })
  }
  // getCurrentUser(){
  //   this._landingservice.getCurrent()
  //     .then( (users) => this.users = users)
  //     .catch((err) => this.err = 'Please Log in!')
  // }
}
