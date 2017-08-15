import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs';

@Injectable()
export class LandingPageService {

  constructor(private _http:Http) { }
grabgrossest(){
  return this._http.get('/api/grossest')
  .map((data)=>data.json())
  .toPromise();
}
averaging(){
  return this._http.get('/api/averaging')
  .map((data)=>data.json())
  .toPromise();
}
getCurrent(){
  return this._http.get('/api/current')
  .map((users) => users.json())
  .toPromise();
}
}
