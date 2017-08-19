import { Component, OnInit } from '@angular/core';
import { FriendspostsService } from './friendsposts.service';
import { RatingModule } from 'ng2-rating';

@Component({
  selector: 'app-friendsposts',
  templateUrl: './friendsposts.component.html',
  styleUrls: ['./friendsposts.component.css']
})
export class FriendspostsComponent implements OnInit {
friendsPosts: any;
starsCount: Number;
  constructor(private _friendsPostsService: FriendspostsService) { }

  ngOnInit() {
    this.getFriendsPosts();
  }

    getFriendsPosts(){
    this._friendsPostsService.getFriendsPosts()
    .then((friends)=>this.friendsPosts=friends)
    .catch((err)=>console.log("theres an error"));
  }
  rate(id){
    console.log(id);
    this._friendsPostsService.rate({"id":id, "rate":this.starsCount})
    .then((x)=>console.log("everything is gucci"))
    .catch((err)=>console.log("something went wrong with rating"))
  }

}
