import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { ProfilepicService } from './profilepic.service';
import { UserHomeService } from '../user-home/user-home.service';
@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});
  constructor(private _userHomeService: UserHomeService, private _profilepicService: ProfilepicService, private _router: Router) { }
  error = String;
  hitupload = false;
  Notifications: Array<Object>; //user's notifications
  currentUser: any; //current user
  ngOnInit() {
  }
  createProfilePic(){
   	this._profilepicService.createProfilePic()
  	.then( (user) => this._router.navigate(['/home']))
  	.catch( (error) => this.error=error ) 
  }
  getnotifications(){
    this._userHomeService.getNotifications()
    .then((notifications) =>{
      this.Notifications=notifications

    })
    .catch((err)=>console.log("there has been an error catching notifications")) 
  }
  //gets current user for the hub
  getCurrentUser(){ // grabs current logged user
    this._userHomeService.getCurrentUser()
    .then( (user)=>this.currentUser=user)
    .catch( (err)=>console.log(err));

    
  }
}
