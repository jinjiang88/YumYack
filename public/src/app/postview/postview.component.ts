import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { PostviewService } from './postview.service';
import { UserHomeService } from '../user-home/user-home.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  id:String;
  post:object;
  yelpdata:object[];
  Notifications: Array<Object>; //user's notifications
  currentUser: any; //current user
  constructor(private _userHomeService: UserHomeService, private _activatedRoute:ActivatedRoute, private _router:Router,private _postViewService:PostviewService) { }

  ngOnInit() {
    this.current();
    this._activatedRoute.params.subscribe( (param)=>{
      this.id=param.id;
    })
    this.getCurrentUser();
    this.loadPost();
    this.getnotifications();
  }

  loadPost(){
    this._postViewService.loadPost({id:this.id})
    .then((post)=>(this.post=post, this.grabyelprecs(post)))
    .catch((err)=>console.log("there has been an error", err))
  }

  grabyelprecs(data){
    console.log(data)
    this._postViewService.grabyelpdata({posttitle:data})
    .then((data)=>this.yelpdata=data)
    .catch((err)=>console.log(err))
  }
  current(){
    this._postViewService.current()
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
