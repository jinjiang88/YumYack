import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class PostviewService {

  constructor(private _http:Http) { }

  loadPost(post){
    return this._http.post('/api/loadPost', post)
    .map((response:Response)=>response.json())
    .toPromise();
  }
  grabyelpdata(param){
    console.log(":::::::::::::::::::::::::::")
    return this._http.post('/api/yelpsearch', param)
    .map((data:Response)=>data.json())
    .toPromise();
  }
  
}
