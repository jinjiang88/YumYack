import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class FindfriendsService {

  constructor(private _http: Http) { }

  getallUsers(){
    return this._http.get('/api/getallusers')
    	.map( (user:Response) => user.json())
  		.toPromise()
  }
  findbyUsername(someUser){
    console.log("in the serviceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + someUser.username)
    return this._http.post('/api/findbyusername', someUser)
      .map( (someUser: Response)=> someUser.json())
      .toPromise();
  }
  findbyfnamelname(nameusers){
    console.log("in the serviceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + nameusers.fname + nameusers.lname)
    return this._http.post('/api/getnameusers', nameusers)
      .map( (nameusers:Response) => nameusers.json())
      .toPromise()
  }
}
