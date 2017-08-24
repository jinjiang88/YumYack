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


  starsCount:5;

  ngOnInit() {
      this.current();
    	this._activatedRoute.params.subscribe((param)=>{
      this.id = param.id;
      this.getUser();
    })
    this.componentnumber = 2;

    this.getUser();
  }
    getUser(){
    console.log(this.id);
  	this._viewService.getUser({id:this.id})
  		.then( User => this.User = User )
  		.catch( err => console.log(err))
  }

  addFriend(){
     console.log(this.id);
  	this._viewService.addFriend({id:this.id})
  		.then( User => this._router.navigate(['/friendslist']) )
  		.catch( err => console.log(err))
  }
  getthisusersfriends(){
    this._viewService.getthisusersfriends({id:this.id})
    .then((friends)=>{this.friendslist = friends})
    .catch((err)=>console.log(err))
  }

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
        this.getthisusersfriends()
      }
    })
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
