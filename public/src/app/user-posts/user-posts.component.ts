import { Component, OnInit } from '@angular/core';
import { UserPostsService } from './user-posts.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
	posts: Array<any>;
	user: any;
  constructor(
  	private _userpostsService: UserPostsService,
  	private _router: Router) { }

  ngOnInit() {
  	this.getCurrentUser();
  	this.getAllPosts();
  }
  getCurrentUser(){
  	this._userpostsService.getCurrent()
  	.then( (user)=> this.user = user)
  	.catch((err) => this._router.navigate(['/']))
  }
  getAllPosts(){
  	this._userpostsService.getAllPosts()
  	.then((posts)=> {
  		this.posts = posts
  	})
  	.catch( (err) => console.log(err))
  }
}
