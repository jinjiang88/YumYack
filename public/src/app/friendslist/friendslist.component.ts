import { Component, OnInit } from '@angular/core';
import { FriendslistService } from './friendslist.service'
import { Router } from '@angular/router';
import { UserHomeService } from '../user-home/user-home.service';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  constructor(private _userHomeService: UserHomeService, private _friendsListService: FriendslistService, private _router:Router) { }
  friendslist: any;
  Notifications: Array<Object>; //user's notifications
  currentUser: any; //current user
  ngOnInit() {
    this.current();
    this.getAllFriends();
    this.getCurrentUser();
    this.getnotifications();
  }

  getAllFriends(){
    this._friendsListService.getAllFriends()
    .then( (friends) => {this.friendslist=friends, console.log(this.friendslist);})
  		.catch( (err) => console.log(err))

  }
  current(){
    this._friendsListService.current()
    .then((user)=>{
      console.log(user)
      if(user.login == false){
        this._router.navigate(['/'])
      }else{
      }
    })
  }
  getnotifications(){
    this._userHomeService.getNotifications()
    .then((notifications) =>this.Notifications=notifications)
    .catch((err)=>console.log("there has been an error catching notifications")) 
  }
  //gets current user for the hub
  getCurrentUser(){ // grabs current logged user
    this._userHomeService.getCurrentUser()
    .then( (user)=>this.currentUser=user)
    .catch( (err)=>console.log(err));

    
  }

}
