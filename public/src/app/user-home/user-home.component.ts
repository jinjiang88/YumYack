import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UserHomeService } from './user-home.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});//file uploader 

  currentUser: any; //current user

  friendsPosts: Array<Object>; //posts of user's friends

  

  Stars: any; //number of accumulated stars
  constructor(private _userHomeService: UserHomeService, private _router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getFriendsPosts();
    this.getNumberOfStars();
  }


  //gets current user for the hub
  getCurrentUser(){
    this._userHomeService.getCurrentUser()
    .then( (user)=>this.currentUser=user)
    .catch( (err)=>console.log(err));

    
  }
  //gets users friends with populate
  getFriendsPosts(){
    this._userHomeService.getFriendsPosts()
    .then((friends)=>this.friendsPosts=friends)
    .catch((err)=>console.log("theres an error"));
  }

  getNumberOfStars(){
    console.log("running function getnumberofstars in component")
    this._userHomeService.getNumberOfStars()
    .then((stars)=>this.Stars=stars)
    .catch((err)=>console.log("there has been an error catching the stars"))

  
  }



}
