import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { ProfilepicService } from './profilepic.service';
@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});
  constructor(private _profilepicService: ProfilepicService, private _router: Router) { }
  error = String;
  ngOnInit() {
  }
  createProfilePic(){
   	this._profilepicService.createProfilePic()
  	.then( (user) => this._router.navigate(['/home']))
  	.catch( (error) => this.error=error ) 
  }
}
