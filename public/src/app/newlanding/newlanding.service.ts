import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class NewlandingService {

  constructor(private _http:Http) { }


  topPosts(){
   return this._http.get('/api/topPost')
    .map((response: Response)=>response.json())
    .toPromise();
  }

  getRecentPosts(){
    return this._http.get('/api/getPosts')
    .map((response: Response)=>response.json())
    .toPromise();
  }
  login(user){
    return this._http.post('/api/login', user)
      .map( (response: Response)=> response.json())
      .toPromise();
  }
  current(){
    return this._http.get('/api/current')
    .map((response:Response)=> response.json())
    .toPromise();
  }
  topcontrib(){
    return this._http.get('/api/topcontrib')
    .map((response:Response)=> response.json())
    .toPromise();
  }
}


