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
  post:object;
  yelpdata:object[];

  constructor(private _activatedRoute:ActivatedRoute, private _router:Router,private _postViewService:PostviewService) { }

  ngOnInit() {
    this.current();
    this._activatedRoute.params.subscribe( (param)=>{
      this.id=param.id;
    })

    this.loadPost();
  }

  loadPost(){
    this._postViewService.loadPost({id:this.id})
    .then((post)=>(this.post=post, this.grabyelprecs(post)))
    .catch((err)=>console.log("there has been an error", err))
  }

  grabyelprecs(data){
    console.log(data)
    this._postViewService.grabyelpdata({posttitle:data})
    .then((data)=>this.yelpdata=data)
    .catch((err)=>console.log(err))
  }
  current(){
    this._postViewService.current()
    .then((user)=>{
      console.log(user)
      if(user.login == false){
        this._router.navigate(['/'])
      }else{
      }
    })
  }
}
