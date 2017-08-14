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
}


