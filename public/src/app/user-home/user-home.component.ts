import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UserHomeService } from './user-home.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});//file uploader 

  currentUser: any; //current user

  friendsPosts: Array<Object>; //posts of user's friends

  

  Stars: any; //number of accumulated stars
  constructor(private _userHomeService: UserHomeService, private _router: Router) { }

  ngOnInit() {
    this.current();
    this.getCurrentUser();
    this.getFriendsPosts();
    this.getNumberOfStars();
  }


  //gets current user for the hub
  getCurrentUser(){ // grabs current logged user
    this._userHomeService.getCurrentUser()
    .then( (user)=>this.currentUser=user)
    .catch( (err)=>console.log(err));

    
  }
  //gets users friends with populate
  getFriendsPosts(){//grabs all of friends posts
    this._userHomeService.getFriendsPosts()
    .then((friends)=>this.friendsPosts=friends)
    .catch((err)=>console.log("theres an error"));
  }

  getNumberOfStars(){ //grabs the total number of stars
    console.log("running function getnumberofstars in component")
    this._userHomeService.getNumberOfStars()
    .then((stars)=>this.Stars=stars)
    .catch((err)=>console.log("there has been an error catching the stars"))

  
  }

  createPost(formData){ //creates post and redirects to post view
    this._userHomeService.createPost(formData.value)
   .then( (post) => this._router.navigate(['/postview/' + post._id]))
   .catch( (error) => console.log("there has been an error creating a post", error) ) 
 }
 current(){
  this._userHomeService.current()
  .then((user)=>{
    console.log(user)
    if(user.login == false){
      this._router.navigate(['/'])
    }else{
      this._router.navigate(['home'])
    }
  })
}


}
