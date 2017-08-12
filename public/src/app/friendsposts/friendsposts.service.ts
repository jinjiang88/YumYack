import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { RatingModule } from 'ng2-rating';
@Injectable()
export class FriendspostsService {

  constructor(private _http:Http) { }
 

   getFriendsPosts(){
    return this._http.get('/api/getFriendsPosts')
    .map( (response: Response)=> response.json())
    .toPromise();
  }

  rate(x){
    return this._http.post('/api/rate', x)
    .map( (response:Response)=>response.json())
    .toPromise();
  }
}

