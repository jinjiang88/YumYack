import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});
  constructor() { }

  ngOnInit() {
  }

}
