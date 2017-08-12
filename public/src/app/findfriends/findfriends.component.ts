import { Component, OnInit } from '@angular/core';
import { FindfriendsService } from './findfriends.service';

@Component({
  selector: 'app-findfriends',
  templateUrl: './findfriends.component.html',
  styleUrls: ['./findfriends.component.css']
})
export class FindfriendsComponent implements OnInit {
  users: Array<Object>;
  constructor(private _findFriendsService: FindfriendsService) { }

  ngOnInit() {
    this.getallusers();
  }

    getallusers(){
      this._findFriendsService.getallUsers()
      .then( (users)=> this.users=users)
      .catch( (err)=>console.log("there is an error for getallusers"))
    
    }

}
