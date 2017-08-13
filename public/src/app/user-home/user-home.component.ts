import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserHomeService } from './user-home.service';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
	posts: Array<any>;
	user: any;
  constructor(
    private _userhomeService: UserHomeService,
    private _router: Router) { }

  ngOnInit() {
  	this.getAllRecentPosts();
    this.getCurrentUser();
  }

  getCurrentUser(){
  	this._userhomeService.getCurrent()
  	.then( (user)=> this.user = user)
  	.catch((err) => this._router.navigate(['/']))
  }
  getAllRecentPosts(){
  	this._userhomeService.getAllRecentPosts()
  	.then((posts)=> {
  		this.posts = posts
  	})
  	.catch( (err) => console.log(err))
  }
}
