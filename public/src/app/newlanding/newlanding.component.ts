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

  constructor(private _newLandingService: NewlandingService, private _router:Router) { }
  email="";
  password="";
  errors:any;
  topPosts:any;
  recentPosts:Array<Object>
  loginval=""
  navbar = 'url(../../assets/images/logo2.png)';
  test=false;


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


  ngOnInit() {
    this.current();
    this.getRecentPosts();
    this.gettopPosts();
  }

  public imageSources: string[] = [
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
      this.navbar = 'url(../../assets/images/logo1.png)'

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
    login(){
      this._newLandingService.login({email:this.email, password: this.password})
        .then( (user)=>{
          if(user.error){
            this.loginval = user.message;
          }else{
            this._router.navigate(['/home'])
          }
        }
      )
        .catch( (err)=>{
          if(err){
            console.log(err,"poopooooooopopopopopopop")
            this.loginval = err
          }
        })
    }
    current(){
      this._newLandingService.current()
      .then((user)=>{
        if(user.login == false){
          
        }else{
          this._router.navigate(['home'])
        }
      })
    }
    topcontrib(){
      this._newLandingService.topcontrib()
      .then((user)=>{this.topcontrib = user})
      .catch((err)=>{console.log(err)})
    }
    
}
