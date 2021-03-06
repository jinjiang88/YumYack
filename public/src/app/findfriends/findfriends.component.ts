import { Component, OnInit } from '@angular/core';
import { FindfriendsService } from './findfriends.service';
import { Router } from '@angular/router';
import { UserHomeService } from '../user-home/user-home.service';

@Component({
  selector: 'app-findfriends',
  templateUrl: './findfriends.component.html',
  styleUrls: ['./findfriends.component.css']
})
export class FindfriendsComponent implements OnInit {
  users: Array<Object>;
  nameusers: Array<Object>;
  errors: any;
  someUser: any;
  username: string;
  fname: string;
  lname: string;
  Notifications: Array<Object>; //user's notifications
  currentUser: any; //current user

  constructor(private _userHomeService: UserHomeService, private _findFriendsService: FindfriendsService, private _router:Router) { }

  ngOnInit() {
    this.current()
    this.getallusers();
    this.getCurrentUser();
    this.getnotifications();
  }

    getallusers(){
      this._findFriendsService.getallUsers()
      .then( (users)=> this.users=users)
      .catch( (err)=>console.log("there is an error for getallusers"))
    
    }
    findbyUsername(){
      console.log(this.username)
      this._findFriendsService.findbyUsername({username:this.username})
      .then( someUser => this.someUser = someUser)
      .catch( (err)=>console.log("there is an error for getsomeuser"))
    
    }

    findbyfnamelname(){
      console.log(this.lname + this.fname)
      this._findFriendsService.findbyfnamelname({fname:this.fname, lname:this.lname})
      .then( nameusers => this.nameusers = nameusers)
      .catch( (err)=>console.log("there is an error for findbyfnamelname"))
    }
    current(){
      this._findFriendsService.current()
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
    .then((notifications) =>{
      this.Notifications=notifications

    })
    .catch((err)=>console.log("there has been an error catching notifications")) 
  }
  //gets current user for the hub
  getCurrentUser(){ // grabs current logged user
    this._userHomeService.getCurrentUser()
    .then( (user)=>this.currentUser=user)
    .catch( (err)=>console.log(err));

    
  }
}
