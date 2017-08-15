import { Component, OnInit } from '@angular/core';
import { EditProfileService } from './edit-profile.service';

import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  currentUser:Object;

  public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});

  constructor(private _editProfileService:EditProfileService ) { }


  
  ngOnInit() {

    
  }

  getCurrentUser(){
    this._editProfileService.getCurrentUser()
    .then((user)=>this.currentUser=user)
    .catch((err)=>{console.log("cannot get the current user", err)})
  }

}
