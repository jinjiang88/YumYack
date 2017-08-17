import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  componentnumber:Number;
  overviewbuttcolor="none";
  friendsbuttcolor="none";
  postsbuttcolor="none";

  constructor() { }

  ngOnInit() {
    this.componentnumber = 2;
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
