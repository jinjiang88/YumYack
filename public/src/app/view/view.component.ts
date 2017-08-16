import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewService } from './view.service';
import {RatingModule} from "ng2-rating";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _viewService: ViewService, private _router: Router) { }
  User: Array<Object>;
  id = "";


  starsCount:5;

  ngOnInit() {
    	this._activatedRoute.params.subscribe((param)=>{
      this.id = param.id;
    })

    this.getUser();
  }

    getUser(){
    console.log(this.id);
  	this._viewService.getUser({id:this.id})
  		.then( User => this.User = User )
  		.catch( err => console.log(err))
  }

  addFriend(){
     console.log(this.id);
  	this._viewService.addFriend({id:this.id})
  		.then( User => this._router.navigate(['/friendslist']) )
  		.catch( err => console.log(err))
  }


  typeof(){
    console.log(typeof this.starsCount)
    console.log(this.starsCount)
  }



}
