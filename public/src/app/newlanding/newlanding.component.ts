import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { NewlandingService } from './newlanding.service';


@Component({
  selector: 'app-newlanding',
  templateUrl: './newlanding.component.html',
  styleUrls: ['./newlanding.component.css']
})
export class NewlandingComponent implements OnInit {

  constructor(private _newLandingService: NewlandingService) { }
  email:"";
  password:"";

  thebar={
    'textcolor':"white",
    'background':"none",
    'welcomecolor':"white",
    'joincolor':'none',
    'height':'50px',
    'margin':'none',
    'position':'none',
    'top':'none',
    'height2':'20px',
    'pad':'none',
  }  

  topPosts:any;

  recentPosts:Array<Object>
  ngOnInit() {
    this.gettopPosts();
  }

  public imageSources: string[] = [
       './../../assests/images/file-1502355578835.jpg',
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

    scroll(){
      this.thebar.textcolor="black",
      this.thebar.background= "white",
      this.thebar.welcomecolor="#FDA443",
      this.thebar.joincolor = "green",
      this.thebar.margin = "100",
      this.thebar.position = 'relative',
      this.thebar.top = '-25px',
      this.thebar.height2 = '30px',
      this.thebar.pad = '25px'

    }

    gettopPosts(){
      this._newLandingService.topPosts()
      .then( (topPosts)=>{console.log("we got top posts"); this.topPosts=topPosts})
      .catch( (err)=>console.log('we could not find topPosts'))
    }

    getRecentPosts(){
      this._newLandingService.getRecentPosts()
      .then((posts)=>this.recentPosts=posts)
      .catch((err)=>{console.log("there was an error in finding recent posts"); console.log(err);})
    }

}
