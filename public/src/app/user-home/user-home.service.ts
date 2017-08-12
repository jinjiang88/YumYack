import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserHomeService {

  constructor(private _http:Http) { }
  
  getCurrent(){
  	return this._http.get('/api/current')
  		.map( (user:Response) => user.json())
  		.toPromise()
  }
  getAllRecentPosts(){
  	return this._http.get('/api/recentposts')
  		.map( (posts:Response) => posts.json())
  		.toPromise()

  }
}
