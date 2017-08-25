import { Component, OnInit } from '@angular/core';
import { FriendslistService } from './friendslist.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  constructor(private _friendsListService: FriendslistService, private _router:Router) { }
  friendslist: any;

  ngOnInit() {
    this.current();
    this.getAllFriends();

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


}
