import { Component, OnInit } from '@angular/core';
import { FriendspostsService } from './friendsposts.service';
import { RatingModule } from 'ng2-rating';
import { Router } from '@angular/router';
import { UserHomeService } from '../user-home/user-home.service';

@Component({
  selector: 'app-friendsposts',
  templateUrl: './friendsposts.component.html',
  styleUrls: ['./friendsposts.component.css']
})
export class FriendspostsComponent implements OnInit {
friendsPosts: any;
starsCount: Number;
Notifications: Array<Object>; //user's notifications
currentUser: any; //current user
  constructor(private _userHomeService: UserHomeService, private _friendsPostsService: FriendspostsService, private _router:Router) { }

  ngOnInit() {
    this.current();
    this.getFriendsPosts();
    this.getCurrentUser();
    this.getnotifications();
  }

    getFriendsPosts(){
    this._friendsPostsService.getFriendsPosts()
    .then((friends)=>this.friendsPosts=friends)
    .catch((err)=>console.log("theres an error"));
  }
  rate(id, users_id){
    console.log(id);
    this._friendsPostsService.rate({"id":id, "rate":this.starsCount, "users_id": users_id})
    .then((x)=>this._router.navigate(['/postview/'+id]))
    .catch((err)=>console.log("something went wrong with rating"))
  }
  current(){
    this._friendsPostsService.current()
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
