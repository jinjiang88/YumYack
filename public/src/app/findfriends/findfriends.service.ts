import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FindfriendsService {

  constructor(private _http: Http) { }

  getallUsers(){
    return this._http.get('/api/getallusers')
    	.map( (user:Response) => user.json())
  		.toPromise()
  }

}
