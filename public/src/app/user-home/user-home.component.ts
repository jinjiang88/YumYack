import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { UserHomeService } from './user-home.service';

=======
import { Router } from '@angular/router'
import { UserHomeService } from './user-home.service';
>>>>>>> 4fa6a43060e1a89895f5ed37deb4c2efb98c4911
=======
import { Router } from '@angular/router'
import { UserHomeService } from './user-home.service';
>>>>>>> 4fa6a43060e1a89895f5ed37deb4c2efb98c4911
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
  currentUser: Array<Object>

  friendsPosts: Array<Object>;

  test={test: "this is a test"}
  constructor(private _userHomeService: UserHomeService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getFriendsPosts();
  }


  //gets current user for the hub
  getCurrentUser(){
    this._userHomeService.getCurrentUser()
    .then( (user)=>this.currentUser=user)
    .catch( (err)=>console.log(err));

    
  }

  //gets users friends with populate
  getFriendsPosts(){
    this._userHomeService.getFriendsPosts()
    .then((friends)=>this.friendsPosts=friends)
    .catch((err)=>console.log("theres an error"));
  }




=======
=======
>>>>>>> 4fa6a43060e1a89895f5ed37deb4c2efb98c4911
	posts: Array<any>;
	user: any;
  constructor(
    private _userhomeService: UserHomeService,
    private _router: Router) { }

  ngOnInit() {
  	this.getAllPosts();
  }

  getCurrentUser(){
  	this._userhomeService.getCurrent()
  	.then( (user)=> this.user = user)
  	.catch((err) => this._router.navigate(['/']))
  }
  getAllPosts(){
  	this._userhomeService.getAllRecentPosts()
  	.then((posts)=> {
  		this.posts = posts
  	})
  	.catch( (err) => console.log(err))
  }
<<<<<<< HEAD
>>>>>>> 4fa6a43060e1a89895f5ed37deb4c2efb98c4911
=======
>>>>>>> 4fa6a43060e1a89895f5ed37deb4c2efb98c4911
}
