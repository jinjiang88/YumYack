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
  topPosts:any;
  thebar='blue';
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
    
    scroll(){
      this.thebar='red';
    }

//     @HostListener('window:scroll', ['$event'])
//         onWindowScroll($event) {
//           this.thebar = 'green';
// }


    
}
