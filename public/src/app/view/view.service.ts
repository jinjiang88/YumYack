import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class ViewService {

  constructor(private _http:Http) { }


   getUser(user){
  	return this._http.post('/api/getuser', user)
  		.map( (user:Response) => user.json())
  		.toPromise()
  }

    addFriend(user){
  	return this._http.post('/api/addfriend', user)
  		.map( (user:Response) => user.json())
  		.toPromise()
  }
  current(){
    return this._http.get('/api/current')
    .map((response:Response)=> response.json())
    .toPromise();
  }
  // getthisusersfriends(id){
  //   return this._http.get('/api/getuserfriends', id)
  //   .map((response:Response)=>response.json())
  //   .toPromise();
  // }
  getuserposts(id){
    return this._http.post('/api/getuserposts', id)
    .map((response:Response)=>response.json())
    .toPromise();
  }
}
