import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProfilepicService {

  constructor(private _http:Http) { }
  
    createProfilePic(){
  	return this._http.get('/api/createProfilePic')
  		.map( (user:Response) => user.json())
  		.toPromise()
  }
}
