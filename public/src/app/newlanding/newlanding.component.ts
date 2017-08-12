import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { NewlandingService } from './newlanding.service';

@Component({
  selector: 'app-newlanding',
  templateUrl: './newlanding.component.html',
  styleUrls: ['./newlanding.component.css']
})
export class NewlandingComponent implements OnInit {

  constructor() { }
  email:"";
  password:"";

  ngOnInit() {
  }
  public imageSources: string[] = [
       'http://lorempixel.com/400/200/',
   'http://lorempixel.com/400/200/sports/',
     'http://lorempixel.com/400/200/',
   'http://lorempixel.com/400/200/sports/'
    ];

    public config: ICarouselConfig = {
      verifyBeforeLoad: true,
      log: false,
      animation: true,
      animationType: AnimationConfig.SLIDE,
      autoplay: true,
      autoplayDelay: 2000,
      stopAutoplayMinWidth: 768
    };
}
