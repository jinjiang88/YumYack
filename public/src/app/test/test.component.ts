import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { TestService } from './test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});
  constructor(private _testService: TestService, private _router: Router) { }
  error='';
  name='';
  description='';
  origin='';
  ngOnInit() {
  }

  hello(){
   	this._testService.createPost({name:this.name,description:this.description,origin:this.origin})
  	.then( (user) => this._router.navigate(['/posts']))
  	.catch( (error) => this.error=error ) 
  }

  

}
