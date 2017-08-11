import { Component, OnInit } from '@angular/core';
import { FriendslistService } from './friendslist.service'

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  constructor(private _friendsListService: FriendslistService) { }
  friends: Array<any>;

  ngOnInit() {
    this.getAllFriends();
  }

  getAllFriends(){
    this._friendsListService.getAllFriends()
    .then( (friends) => this.friends=friends)
  		.catch( (err) => console.log(err))

  }


}
