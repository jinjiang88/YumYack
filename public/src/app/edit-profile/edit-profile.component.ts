import { Component, OnInit } from '@angular/core';
import { EditProfileService } from './edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  currentUser:Object;

  constructor(private _editProfileService:EditProfileService ) { }


  
  ngOnInit() {
  }

  getCurrentUser(){
    this._editProfileService.getCurrentUser()
    .then((user)=>this.currentUser=user)
    .catch((err)=>{console.log("cannot get the current user", err)})
  }

}
