import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class TestService {

  constructor(private _http:Http) { }

    createPost(post){
  	return this._http.post('/api/createPost', post)
  		.map( (user:Response) => user.json())
  		.toPromise()
  }

}
