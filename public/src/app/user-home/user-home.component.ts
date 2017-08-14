import { Component, OnInit } from '@angular/core';

import { UserHomeService } from './user-home.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  currentUser: Array<Object>

  friendsPosts: Array<Object>;

  test={test: "this is a test"}
  constructor(private _userHomeService: UserHomeService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getFriendsPosts();
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


}
