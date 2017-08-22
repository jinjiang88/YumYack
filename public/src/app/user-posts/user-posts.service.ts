import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class UserPostsService {

  constructor(private _http:Http) { }
  
  getCurrent(){
  	return this._http.get('/api/current')
  		.map( (user:Response) => user.json())
  		.toPromise()
  }
  getAllPosts(){
  	return this._http.get('/api/posts')
  		.map( (posts:Response) => posts.json())
  		.toPromise()

  }
  current(){
    return this._http.get('/api/current')
    .map((response:Response)=> response.json())
    .toPromise();
  }
}
