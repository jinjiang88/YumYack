import { Component, OnInit } from '@angular/core';
import { FriendspostsService } from './friendsposts.service';
import { RatingModule } from 'ng2-rating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendsposts',
  templateUrl: './friendsposts.component.html',
  styleUrls: ['./friendsposts.component.css']
})
export class FriendspostsComponent implements OnInit {
friendsPosts: any;
starsCount: Number;
  constructor(private _friendsPostsService: FriendspostsService, private _router:Router) { }

  ngOnInit() {
    this.current();
    this.getFriendsPosts();
  }

    getFriendsPosts(){
    this._friendsPostsService.getFriendsPosts()
    .then((friends)=>this.friendsPosts=friends)
    .catch((err)=>console.log("theres an error"));
  }
  rate(id, users_id){
    console.log(id);
    this._friendsPostsService.rate({"id":id, "rate":this.starsCount, "users_id": users_id})
    .then((x)=>console.log("everything is gucci"))
    .catch((err)=>console.log("something went wrong with rating"))
  }
  current(){
    this._friendsPostsService.current()
    .then((user)=>{
      console.log(user)
      if(user.login == false){
        this._router.navigate(['/'])
      }else{
        this._router.navigate(['editprofile'])
      }
    })
  }

}
