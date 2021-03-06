import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserHomeService {

  constructor(private _http:Http) { }
  

  getCurrentUser(){
    return this._http.get('/api/getcurrentuser')
    .map( (response: Response)=> response.json())
    .toPromise();
  }

  getFriendsPosts(){
    return this._http.get('/api/getFriendsPosts')
    .map( (response: Response)=> response.json())
    .toPromise();
  }
  getCurrent(){
  	return this._http.get('/api/current')
  		.map( (user:Response) => user.json())
  		.toPromise()
  }
  getAllRecentPosts(){
  	return this._http.get('/api/posts')
  		.map( (posts:Response) => posts.json())
  		.toPromise()
  }

  getNumberOfStars(){
    console.log("now its in service")
    return this._http.get('/api/getNumberOfStars')
    .map((response:Response)=>response.json())
    .toPromise()
  
    
  }

  createPost(post){
  	return this._http.post('/api/createPost', post)
  		.map( (user:Response) => user.json())
  		.toPromise()
  }
  current(){
    return this._http.get('/api/current')
    .map((response:Response)=> response.json())
    .toPromise();
  }
  getNotifications(){
    return this._http.get('/api/getNotifications')
    .map((response:Response)=>response.json())
    .toPromise()
  }

}

