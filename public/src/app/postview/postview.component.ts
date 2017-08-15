import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { PostviewService } from './postview.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  id:String;
  post:any;
  constructor(private _activatedRoute:ActivatedRoute, private _router:Router,private _postViewService:PostviewService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( (param)=>{
      this.id=param.id;
    })

    this.loadPost();
  }

  loadPost(){
    this._postViewService.loadPost({id:this.id})
    .then((post)=>this.post=post)
    .catch((err)=>console.log("there has been an error", err))
  }
}
