import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class FriendslistService {

  constructor(private _http:Http) { }

  getAllFriends(){
    return this._http.get('/api/getallfriends')
    .map( (response: Response)=> response.json())
  		.toPromise();
  }
  current(){
    return this._http.get('/api/current')
    .map((response:Response)=> response.json())
    .toPromise();
  }
}
