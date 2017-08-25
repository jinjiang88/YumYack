import { Component, OnInit } from '@angular/core';
import { EditProfileService } from './edit-profile.service';
import { UserHomeService } from '../user-home/user-home.service';
import { Router } from '@angular/router'

import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser:any;
  Notifications: Array<Object>; //user's notifications



  constructor(private _editProfileService:EditProfileService, private _userHomeService: UserHomeService, private _router:Router ) { }


  
  ngOnInit() {


    this.getCurrentUser();
    this.getnotifications();
    this.current()

  }

  getCurrentUser(){
    this._editProfileService.getCurrentUser()
    .then((user)=>this.currentUser=user)
    .catch((err)=>{console.log("cannot get the current user", err)})
  }
  current(){
    this._editProfileService.current()
    .then((user)=>{
      console.log(user)
      if(user.login == false){
        this._router.navigate(['/'])
      }else{

      }
    })
  }

  // editProfileComponent(formData){
  //   this._editProfileService.editProfile(formData.value)
  //   .then((profile)=> this._router.navigate(['/home']))
  //   .catch((error)=>console.log("Edit was unsuccessful"))
  // }
  editProfileComponent(){
    console.log("you are now in editprofile component")
    console.log(this.currentUser)
    this._editProfileService.editProfile(this.currentUser)
    .then((profile)=> this._router.navigate(['/home']))
    .catch((error)=>console.log("Edit was unsuccessful"))
  }
  getnotifications(){
    this._userHomeService.getNotifications()
    .then((notifications) =>this.Notifications=notifications)
    .catch((err)=>console.log("there has been an error catching notifications")) 
  }
}
