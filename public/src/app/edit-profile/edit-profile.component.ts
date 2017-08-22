import { Component, OnInit } from '@angular/core';
import { EditProfileService } from './edit-profile.service';
import { Router } from '@angular/router'
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser:any;

  public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});

  constructor(private _editProfileService:EditProfileService, private _router:Router ) { }


  
  ngOnInit() {

    this.getCurrentUser();
  }

  getCurrentUser(){
    this._editProfileService.getCurrentUser()
    .then((user)=>this.currentUser=user)
    .catch((err)=>{console.log("cannot get the current user", err)})
  }

  editProfileComponent(formData){
    this._editProfileService.editProfile(formData.value)
    .then((profile)=> this._router.navigate(['/home']))
    .catch((error)=>console.log("Edit was unsuccessful"))
  }

}
