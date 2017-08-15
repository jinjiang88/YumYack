import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class EditProfileService {



  constructor(private _http:Http) { }

  getCurrentUser(){
    return this._http.get('/api/getcurrentuser')
    .map( (response:Response)=>response.json())
    .toPromise();
  }

}
