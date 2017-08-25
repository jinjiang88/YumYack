import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewService } from './view.service';
import {RatingModule} from "ng2-rating";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  componentnumber:Number;
  overviewbuttcolor="none";
  friendsbuttcolor="none";
  postsbuttcolor="none";

  constructor(private _activatedRoute: ActivatedRoute, private _viewService: ViewService, private _router: Router) { }
  User: Array<Object>;
  id = "";
  friendslist=[]
  score:any;
  friendcount:Number;
  starsCount:5;
  postcount:Number;
  userposts=[];

  ngOnInit() {
    this._activatedRoute.params.subscribe((param)=>{
    this.id = param.id;
      this.current();
      this.getUser();
      this.getuserposts();
    })
    this.componentnumber = 2;
    // console.log(this.friendslist,"$$$$$$$$$$$$$$$$$$$$$$$$$$")
  }
    getUser(){
    console.log(this.id);
  	this._viewService.getUser({id:this.id})
  		.then( User => {
        this.User = User;
        this.friendcount=User[0].friends.length;
        this.postcount = User[0].allposts.length;
        console.log(User,"((((((((((((((((")
        this.score = User[0].yumyackscore;
        this.friendslist=User[0].friends;
        console.log(User[0].friends,"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      } )
  		.catch( err => console.log(err))
  }

  addFriend(){
     console.log(this.id);
  	this._viewService.addFriend({id:this.id})
  		.then( User => this._router.navigate(['/friendslist']) )
  		.catch( err => console.log(err))
  }
  // getthisusersfriends(){
  //   this._viewService.getthisusersfriends({id:this.id})
  //   .then((friends)=>{this.friendslist = friends})
  //   .catch((err)=>console.log(err))
  // }

  typeof(){
    console.log(typeof this.starsCount)
    console.log(this.starsCount)
  }
  current(){
    this._viewService.current()
    .then((user)=>{
      console.log(user)
      if(user.login == false){
        this._router.navigate(['/'])
      }else{
        // this.getthisusersfriends()
      }
    })
  }
  getuserposts(){
    console.log("here it is guys!")
    this._viewService.getuserposts({id:this.id})
    .then((posts)=>{
      console.log(posts,"hhhhhhhhhhhhhhhhhhhhhhhh")
      this.userposts=posts
    })
    .catch((err)=>{console.log(err)})
  }

  overviewclicked(){
    this.componentnumber =1;
    this.resetbuttoncolors();
    this.overviewbuttcolor = 'green';
  }
  friendsclicked(){
    this.componentnumber=2;
    this.resetbuttoncolors();
    this.friendsbuttcolor = 'green';
  }
  postsclicked(){
    this.componentnumber =1;
    this.resetbuttoncolors();
    this.postsbuttcolor='green'
  }
  resetbuttoncolors(){
    this.overviewbuttcolor="white"
    this.friendsbuttcolor="white"
    this.postsbuttcolor= "white"
  }
}
